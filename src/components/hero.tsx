"use client"

import Link from "next/link"
// import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Code, Terminal } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32 bg-background">
            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                            <Terminal className="mr-2 h-4 w-4" />
                            <span>Full Stack Developer & Technical Writer</span>
                        </div>
                    </div>

                    <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl mb-6">
                        Building the Future, <br className="hidden sm:inline" />
                        One Line at a Time.
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Welcome to my digital garden. Here I share my journey in software engineering,
                        deep dives into modern web technologies, and lessons learned along the way.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/blog"
                            className={buttonVariants({ size: "lg", className: "group" })}
                        >
                            Start Reading
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/projects"
                            className={buttonVariants({ variant: "outline", size: "lg", className: "group" })}
                        >
                            <Code className="mr-2 h-4 w-4" />
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[100px]" />
            </div>
        </section>
    )
}
