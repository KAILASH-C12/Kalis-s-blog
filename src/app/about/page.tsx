import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata = {
    title: "About Me | Tech Blog",
    description: "Learn more about the author.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-8 max-w-4xl">
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>

                <div className="prose dark:prose-invert max-w-none mb-8">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        I began my programming journey in 2023, starting with Python and building small scripts to understand how logic translates into code. What started as curiosity quickly evolved into a deeper interest in computer science fundamentals — data structures, algorithms, and how memory and systems actually work under the hood.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        As I explored more, I developed a strong command over Java and focused heavily on mastering DSA patterns — recursion, sliding window, two pointers, stack/queue problems, dynamic programming, and complexity analysis. I enjoy breaking down problems algorithmically and thinking in terms of time and space efficiency.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Today, I’m deeply interested in Full Stack and Software Development. I don’t just build interfaces — I think about architecture, scalability, and maintainability. Whether it’s frontend rendering strategies or backend performance, I try to approach development with a systems mindset.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Link
                        href="https://github.com/KAILASH-C12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                        <FaGithub className="mr-2 h-5 w-5" />
                        GitHub
                    </Link>
                    <Link
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                        <FaTwitter className="mr-2 h-5 w-5 text-sky-500" />
                        Twitter
                    </Link>
                    <Link
                        href="https://linkedin.com/in/kailashchoudhary44"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "outline", size: "lg" })}
                    >
                        <FaLinkedin className="mr-2 h-5 w-5 text-blue-600" />
                        LinkedIn
                    </Link>
                    <Link
                        href="mailto:kc3737381@gmail.com"
                        className={buttonVariants({ variant: "default", size: "lg" })}
                    >
                        <FaEnvelope className="mr-2 h-5 w-5" />
                        Get in Touch
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">My Technical Focus</h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">Core Computer Science</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Strong understanding of Data Structures & Algorithms</li>
                                <li>Comfortable with common problem-solving patterns</li>
                                <li>Time and Space complexity analysis</li>
                                <li>Stack vs Heap memory model</li>
                                <li>JVM fundamentals</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">Backend & Systems</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Java (primary language for DSA and backend logic)</li>
                                <li>Node.js fundamentals</li>
                                <li>Understanding of REST APIs and server-side architecture</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-primary">Frontend & Full Stack</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>React & Next.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Building structured, scalable UI systems</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">My Approach to Learning</h2>
                    <p className="text-muted-foreground mb-6">
                        I believe strong software engineers are built on:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Solid fundamentals",
                            "Consistent practice",
                            "Understanding concepts deeply instead of memorizing",
                            "Building real projects to apply theory"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-muted-foreground">
                        I continuously work on improving my problem-solving skills while building full-stack applications that reflect clean architecture and good engineering practices.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2">Beyond Coding</h2>
                    <p className="text-muted-foreground">
                        Outside of development, I enjoy learning about system design, exploring new technologies, and pushing myself to grow both technically and personally.
                    </p>
                </div>
            </div>
        </div>
    );
}
