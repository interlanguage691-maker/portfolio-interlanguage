"use client"

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
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            className={currentPage === page ? "bg-[#64A162] hover:bg-[#548652]" : ""}
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
      <SectionHeader backgroundImage="https://i.imgur.com/z1tchXw.png" />

      <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Đang tải bài viết...</div>}>
        <BlogContent page={page} postsPerPage={postsPerPage} />
      </Suspense>
    </div>
  )
}

async function BlogContent({ page, postsPerPage }: { page: number; postsPerPage: number }) {
  let blogPosts = []

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
              <Card className="overflow-hidden border-0 shadow-lg hover-lift">
                <div className="grid md:grid-cols-2">
                  <div className="relative min-h-[300px]">
                    <Image
                      src={featuredPost.image || "/placeholder.svg?height=600&width=800"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover hover-bright"
                    />
                  </div>
                  <CardContent className="flex flex-col justify-center p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2 className="mt-4 text-3xl font-bold">{featuredPost.title}</h2>
                    <p className="mt-4 text-gray-600">{featuredPost.excerpt}</p>
                    <div className="mt-6">
                      <Button asChild className="bg-[#64A162] hover:bg-[#548652] hover-lift">
                        <Link href={`/blog/${featuredPost.slug}`}>Đọc tiếp</Link>
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post, index) => (
              <AnimationWrapper key={post.slug} animation="fade-up" delay={index * 100}>
                <Card className="overflow-hidden border-0 shadow-md hover-lift h-full">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={post.image || "/placeholder.svg?height=400&width=600"}
                      alt={post.title}
                      fill
                      className="object-cover hover-bright"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
                    <p className="mt-2 text-gray-600 flex-grow">{post.excerpt}</p>
                    <div className="mt-4">
                      <Button asChild variant="outline" className="w-full hover-lift">
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
