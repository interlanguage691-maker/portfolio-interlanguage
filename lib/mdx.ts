"use server"

import fs from "fs"
import path from "path"
import matter from "gray-matter"

const rootDirectory = path.join(process.cwd(), "content")

export async function getPostBySlug(slug: string) {
  const filePath = path.join(rootDirectory, "blog", `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf8")
  const { content, data } = matter(fileContent)

  return {
    content,
    frontmatter: {
      slug,
      ...data,
    },
  }
}

export async function getAllPosts() {
  const blogDir = path.join(rootDirectory, "blog")

  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true })
    return []
  }

  const files = fs.readdirSync(blogDir)
  const posts = []

  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const filePath = path.join(blogDir, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContent)
      const slug = file.replace(".mdx", "")

      posts.push({
        slug,
        ...data,
      })
    }
  }

  return posts.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return 0
  })
}
