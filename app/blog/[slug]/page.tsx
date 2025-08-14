import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { marked } from "marked"

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)

    if (!post) {
      return {
        title: "Không tìm thấy bài viết",
        description: "Bài viết không tồn tại hoặc đã bị xóa",
      }
    }

    return {
      title: `${post.frontmatter.title} | InterLanguage Blog`,
      description: post.frontmatter.excerpt,
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
    return {
      title: "InterLanguage Blog",
      description: "Blog của trung tâm tiếng Anh InterLanguage",
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)

    if (!post) {
      notFound()
    }

    // Chuyển đổi Markdown sang HTML
    const htmlContent = marked(post.content)
    const { frontmatter } = post
    const relatedPosts = await getAllPosts()
    const filteredRelatedPosts = relatedPosts.filter((p) => p.slug !== params.slug).slice(0, 3)

    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
            <Image
              src={frontmatter.image || "https://i.imgur.com/CF1lFy8.png"}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{frontmatter.title}</h1>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>{frontmatter.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  <span>{frontmatter.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{frontmatter.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Button asChild variant="ghost" className="mb-6 flex items-center text-gray-600">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại trang blog
                </Link>
              </Button>

              <article className="prose prose-lg max-w-none">
                <Suspense fallback={<div>Đang tải nội dung...</div>}>
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </Suspense>
              </article>

              {/* Share Buttons */}
              <div className="mt-8">
                <p className="mb-2 font-semibold">Chia sẻ bài viết:</p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold">Bài viết liên quan</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRelatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={relatedPost.image || "/placeholder.svg?height=400&width=600"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{relatedPost.title}</h3>
                    <p className="mt-2 line-clamp-2 text-gray-600">{relatedPost.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Button asChild className="mt-4 w-full bg-[#64A162] hover:bg-[#548652]">
                      <Link href={`/blog/${relatedPost.slug}`}>Đọc tiếp</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  } catch (error) {
    console.error("Error rendering blog post:", error)
    notFound()
  }
}
