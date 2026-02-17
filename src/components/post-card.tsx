import Link from "next/link"
import { format } from "date-fns"
import { Calendar, Clock, ArrowRight } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Post } from "@/lib/types"

interface PostCardProps {
    post: Post
    className?: string
}

export function PostCard({ post, className }: PostCardProps) {
    return (
        <Card className={cn("group relative flex flex-col justify-between transition-all hover:border-primary/50 hover:shadow-md", className)}>
            <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                    {post.readingTime && (
                        <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readingTime}</span>
                            </div>
                        </>
                    )}
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                        <span className="sr-only">Read {post.title}</span>
                    </Link>
                    {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                    {post.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2 relative z-10">
                    {post.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
                            #{tag}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <div className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "pl-0 group-hover:pl-2 transition-all")}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    )
}
