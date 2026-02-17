import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
// import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
// import remarkGfm from "remark-gfm" // Didn't install remark-gfm, skipping for now

import { Post } from "./types"

// Define custom components if needed (e.g. specialized Callout)
const components = {
    // Add custom components here
}

const postsDirectory = path.join(process.cwd(), "src/content/blog")

export async function getPostBySlug(slug: string): Promise<{ meta: Post, content: React.ReactNode } | undefined> {
    const realSlug = slug.replace(/\.mdx$/, "")
    const filePath = path.join(postsDirectory, `${realSlug}.mdx`)

    try {
        const fileContent = fs.readFileSync(filePath, "utf8")

        const { content, frontmatter } = await compileMDX<{ title: string; description: string; date: string; tags: string[] }>({
            source: fileContent,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        // rehypeHighlight,
                        rehypeSlug,
                    ],
                },
            },
            // components: components, // Comment out components just in case
        })

        const meta: Post = {
            slug: realSlug,
            title: frontmatter.title,
            description: frontmatter.description,
            date: frontmatter.date,
            tags: frontmatter.tags,
            readingTime: "5 min read", // Placeholder logic
        }

        return { meta, content }
    } catch (error) {
        console.error("Error processing post:", slug, error) // Add logging
        return undefined
    }
}

export async function getAllPosts(): Promise<Post[]> {
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const files = fs.readdirSync(postsDirectory)

    const posts = await Promise.all(
        files.map(async (file) => {
            const { meta } = (await getPostBySlug(file)) || {}
            return meta
        })
    )

    // Filter out undefined and sort by date desc
    return (posts.filter((post): post is Post => !!post)).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}
