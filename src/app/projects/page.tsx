import { ProjectCard } from "@/components/project-card"

const projects = [
    {
        title: "Remote Suite Collaboration",
        description: "All in one platform for employee collaboration slight better than Teams",
        tags: ["React Native", "Supabase", "TypeScript"],
        link: "https://example.com/ecotrack",
        repo: "https://github.com/your-username/ecotrack",
    },
    {
        title: "LeatherCAD",
        description: "A customizable application for leather products can customize add to cart just like amazon but with custom feature and special for leather products",
        tags: ["React.js", "Tailwind CSS", "Express.js", "MongoDB", "Clerk"],
        link: "https://example.com/devdash",
        repo: "https://github.com/your-username/devdash",
    },
    {
        title: "Quick Ai",
        description: "Ai for summarizing , generating texts , creating images , removing objects from image and checking resumes.",
        tags: ["React.js", "Express.js", "NeonAI", "ClerkAI"],
        link: "https://example.com/algo",
        repo: "https://github.com/your-username/algo-viz",
    },
]

export const metadata = {
    title: "Projects | Tech Blog",
    description: "Check out my latest projects and experiments.",
}

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
                <p className="text-xl text-muted-foreground">
                    Showcase of my recent work, open source contributions, and experiments.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </div>
    )
}
