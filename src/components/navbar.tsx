"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
]

export function Navbar() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between mx-auto px-4 md:px-8">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 font-bold text-xl">
                        Kalis's Blog
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "transition-colors hover:text-foreground/80 relative",
                                    pathname === item.path ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <div
                                        className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    {/* Mobile menu could go here */}
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or extra items */}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
