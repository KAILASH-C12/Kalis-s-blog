import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Project {
    title: string
    description: string
    tags: string[]
    link?: string
    repo?: string
}

interface ProjectCardProps {
    project: Project
    className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Card className={cn("group flex flex-col justify-between transition-all hover:border-primary/50 hover:shadow-md h-full", className)}>
            <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-4 pt-4 mt-auto">
                {project.repo && (
                    <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full gap-2")}
                    >
                        <Github className="h-4 w-4" />
                        Code
                    </Link>
                )}
                {project.link && (
                    <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "sm" }), "w-full gap-2")}
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </Link>
                )}
            </CardFooter>
        </Card>
    )
}
