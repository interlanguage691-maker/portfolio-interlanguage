import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"
import { getPostBySlug, getAllPosts } from "@/lib/mdx"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { marked } from "marked"
import AnimationWrapper from "@/components/animation-wrapper"

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
      title: `${(post as any).frontmatter.title} | InterLanguage Blog`,
      description: (post as any).frontmatter.excerpt,
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
    const { frontmatter } = post as any
    const relatedPosts = await getAllPosts()
    const filteredRelatedPosts = relatedPosts.filter((p: any) => p.slug !== params.slug).slice(0, 3)

    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[300px] w-full overflow-hidden md:h-[500px] lg:h-[600px]">
            <Image
              src={frontmatter.image || "https://i.imgur.com/CF1lFy8.png"}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl leading-tight mb-6 drop-shadow-lg">
                  {frontmatter.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <User className="mr-2 h-4 w-4" />
                    <span>{frontmatter.author}</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>{frontmatter.date}</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{frontmatter.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Button asChild variant="ghost" className="mb-8 flex items-center text-gray-600 hover:text-[#64A162] hover:bg-[#64A162]/10 transition-all duration-300">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Quay lại trang blog
                </Link>
              </Button>

              <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-[#64A162] prose-a:text-[#64A162] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#64A162] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg">
                <Suspense fallback={
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#64A162] mx-auto mb-4"></div>
                    <p className="text-gray-600">Đang tải nội dung...</p>
                  </div>
                }>
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </Suspense>
              </article>

              {/* Share Buttons */}
              <div className="mt-12 p-6 bg-gradient-to-r from-[#64A162]/5 to-[#9ddaec]/5 rounded-xl border border-[#64A162]/20">
                <p className="mb-4 font-semibold text-gray-900 text-center">Chia sẻ bài viết:</p>
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full border-[#64A162] text-[#64A162] hover:bg-[#64A162] hover:text-white transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-[#64A162] text-[#64A162] hover:bg-[#64A162] hover:text-white transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-[#64A162] text-[#64A162] hover:bg-[#64A162] hover:text-white transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bài viết liên quan</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Khám phá thêm những bài viết hữu ích khác về chủ đề tương tự
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredRelatedPosts.map((relatedPost, index) => (
                <AnimationWrapper key={relatedPost.slug} animation="fade-up" delay={index * 100}>
                  <div className="overflow-hidden rounded-xl bg-white shadow-lg hover-lift transition-all duration-300 group">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={(relatedPost as any).image || "/placeholder.svg?height=400&width=600"}
                        alt={(relatedPost as any).title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#64A162] transition-colors duration-300">
                        {(relatedPost as any).title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">{(relatedPost as any).excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <CalendarIcon className="mr-1 h-4 w-4 text-[#64A162]" />
                          {(relatedPost as any).date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-4 w-4 text-[#64A162]" />
                          {(relatedPost as any).readTime}
                        </span>
                      </div>
                      <Button asChild className="w-full bg-[#64A162] hover:bg-[#548652] hover-lift transition-all duration-300">
                        <Link href={`/blog/${relatedPost.slug}`}>Đọc tiếp</Link>
                      </Button>
                    </div>
                  </div>
                </AnimationWrapper>
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
