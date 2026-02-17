import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { DUMMY_POSTS } from "@/lib/constants"
import { Post } from "@/lib/types"

// Assume we can fetch content dummy way
const DUMMY_CONTENT = (
    <div>
        <h2>Sample Content</h2>
        <p>This is a placeholder for MDX content.</p>
    </div>
)

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    return DUMMY_POSTS.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params
    const post = DUMMY_POSTS.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} | Tech Blog`,
        description: post.description,
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = DUMMY_POSTS.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-24 md:px-8 max-w-4xl">
            <Link
                href="/blog"
                className={buttonVariants({ variant: "ghost", size: "sm", className: "mb-8 group" })}
            >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
            </Link>

            <header className="mb-12 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>
                            {format(new Date(post.date), "MMMM d, yyyy")}
                        </time>
                    </div>
                    {post.readingTime && (
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readingTime}</span>
                        </div>
                    )}
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
                    {post.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {post.description}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-primary prose-pre:bg-muted/50 prose-pre:border prose-img:rounded-xl max-w-none">
                {DUMMY_CONTENT}
            </div>
        </article>
    )
}
