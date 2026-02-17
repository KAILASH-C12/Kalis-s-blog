"use client"

import { buttonVariants } from "@/components/ui/button"

export function NewsletterForm() {
    return (
        <form
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            onSubmit={(e) => {
                e.preventDefault()
                // Handle subscription logic here
                console.log("Subscribed!")
            }}
        >
            <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button className={buttonVariants({ size: "default" })}>
                Subscribe
            </button>
        </form>
    )
}
