import { PostCard } from "@/components/post-card"
import { DUMMY_POSTS } from "@/lib/constants"
// import { getAllPosts } from "@/lib/posts"

export const metadata = {
    title: "Blog | Tech Blog",
    description: "Read my latest articles on web development.",
}

export default async function BlogPage() {
    // const posts = await getAllPosts()
    const posts = DUMMY_POSTS

    return (
        <div className="container mx-auto px-4 py-24 md:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
                <p className="text-xl text-muted-foreground">
                    Thoughts, tutorials, and deep dives into modern web engineering.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    )
}
