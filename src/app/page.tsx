import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Hero } from "@/components/hero"
import { PostCard } from "@/components/post-card"
import { NewsletterForm } from "@/components/newsletter-form"
import { DUMMY_POSTS } from "@/lib/constants"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Posts</h2>
              <p className="text-muted-foreground">
                Hand-picked articles to get you started.
              </p>
            </div>
            <Link
              href="/blog"
              className={buttonVariants({ variant: "ghost", className: "hidden md:flex group" })}
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {DUMMY_POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 flex justify-center md:hidden">
            <Link
              href="/blog"
              className={buttonVariants({ variant: "outline", size: "lg", className: "w-full" })}
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 border-t bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-secondary/30 p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Stay in the loop</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the newsletter to get the latest posts and updates delivered directly to your inbox.
              No spam, just quality content.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
