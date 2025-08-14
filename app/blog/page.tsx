import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, User, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeader from "@/components/section-header"
import AnimationWrapper from "@/components/animation-wrapper"
import { getAllPosts } from "@/lib/mdx"
import { Suspense } from "react"

// Hàm phân trang
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Trang trước"
          className="hover:bg-[#64A162] hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            className={currentPage === page ? "bg-[#64A162] hover:bg-[#548652]" : "hover:bg-[#64A162] hover:text-white"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Trang sau"
          className="hover:bg-[#64A162] hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}



export default function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const postsPerPage = 6

  return (
    <div className="flex flex-col">
      <SectionHeader backgroundImage="/image/blog.png" />

      <Suspense fallback={
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#64A162] mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải bài viết...</p>
        </div>
      }>
        <BlogContent page={page} postsPerPage={postsPerPage} />
      </Suspense>
    </div>
  )
}

async function BlogContent({ page, postsPerPage }: { page: number; postsPerPage: number }) {
  let blogPosts: any[] = []

  try {
    blogPosts = await getAllPosts()
  } catch (error) {
    console.error("Error fetching blog posts:", error)
  }

  const totalPages = Math.ceil(blogPosts.length / postsPerPage)
  const startIndex = (page - 1) * postsPerPage
  const paginatedPosts = blogPosts.slice(startIndex, startIndex + postsPerPage)
  const featuredPost = page === 1 && blogPosts.length > 0 ? blogPosts[0] : null

  // Nếu hiển thị featured post ở trang đầu, bỏ nó ra khỏi danh sách các bài viết khác
  const displayPosts =
    page === 1 && featuredPost ? paginatedPosts.filter((post) => post.slug !== featuredPost.slug) : paginatedPosts

  return (
    <>
      {/* Featured Post - Chỉ hiển thị ở trang đầu tiên */}
      {featuredPost && page === 1 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimationWrapper animation="fade-up">
              <Card className="overflow-hidden border-0 shadow-xl hover-lift transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative min-h-[300px] md:min-h-[400px]">
                    <Image
                      src={featuredPost.image || "/placeholder.svg?height=600&width=800"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardContent className="flex flex-col justify-center p-8 bg-gradient-to-br from-[#64A162]/5 to-white">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                        <CalendarIcon className="mr-1 h-4 w-4 text-[#64A162]" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                        <User className="mr-1 h-4 w-4 text-[#64A162]" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center bg-white px-3 py-1 rounded-full shadow-sm">
                        <Clock className="mr-1 h-4 w-4 text-[#64A162]" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <div className="mt-auto">
                      <Button asChild className="bg-[#64A162] hover:bg-[#548652] hover-lift text-lg px-8 py-3">
                        <Link href={`/blog/${featuredPost.slug}`}>Đọc bài viết nổi bật</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimationWrapper>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tất cả bài viết</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Khám phá những bài viết hữu ích về phương pháp học tiếng Anh, 
              kinh nghiệm thi IELTS và những câu chuyện thành công của học viên
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post, index) => (
              <AnimationWrapper key={post.slug} animation="fade-up" delay={index * 100}>
                <Card className="overflow-hidden border-0 shadow-lg hover-lift h-full group transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full bg-white">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4 text-[#64A162]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4 text-[#64A162]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#64A162] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 flex-grow leading-relaxed">{post.excerpt}</p>
                    <div className="mt-6">
                      <Button asChild variant="outline" className="w-full hover-lift border-[#64A162] text-[#64A162] hover:bg-[#64A162] hover:text-white transition-all duration-300">
                        <Link href={`/blog/${post.slug}`}>Đọc tiếp</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>

          {/* Phân trang */}
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                window.location.href = `/blog?page=${newPage}`
              }}
            />
          )}
        </div>
      </section>
    </>
  )
}
