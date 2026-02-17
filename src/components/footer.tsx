import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Kailash Choudhary
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/KAILASH-C12"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="https://github.com/KAILASH-C12" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://twitter.com/kailashc44" target="_blank" rel="noreferrer">
                        <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/kailashchoudhary44" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
