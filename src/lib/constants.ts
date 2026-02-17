import { Post } from "@/lib/types";

export const DUMMY_POSTS: Post[] = [
    {
        slug: "stack-vs-heap-memory-java",
        title: "Stack vs Heap Memory in Java: Deep Internal Working",
        description:
            "A low-level explanation of how Java manages memory using stack frames, heap allocation, object references, and garbage collection internals.",
        date: "2026-01-25T12:00:00Z",
        tags: ["Java", "Memory Management", "JVM", "DSA"],
        readingTime: "9 min read",
        content: `
Memory management is one of the most important foundations of computer science.

In Java, memory is divided primarily into **Stack Memory** and **Heap Memory**.

## Stack Memory
each thread has its own stack. It stores method calls, local variables, primitive data types, and references to heap objects.
When a method is invoked, a stack frame is pushed. When it returns, the frame is popped. This follows the LIFO (Last In First Out) principle.

\`\`\`java
public void example() {
    int x = 10;        // stored in stack
    User u = new User(); // reference in stack, object in heap
}
\`\`\`

## Heap Memory
Heap stores objects, class instances, and arrays. Objects live in heap until garbage collected.

## Key Concept
Stack memory is fast and automatically managed. Heap memory is dynamic and managed by the Garbage Collector.
`,
    },
    {
        slug: "recursion-stack-visualization",
        title: "Understanding Recursion Through Stack Frame Execution",
        description:
            "Visualizing recursive function calls at the stack-frame level and analyzing space complexity using call stack growth.",
        date: "2026-01-18T12:00:00Z",
        tags: ["Recursion", "Stack", "Java", "Algorithms"],
        readingTime: "8 min read",
        content: `
Recursion is not magic. It is simply function calls using stack frames.

### Example: Factorial

\`\`\`java
int factorial(int n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}
\`\`\`

### Stack Execution
1. \`factorial(4)\`
2. \`-> factorial(3)\`
3. \`    -> factorial(2)\`
4. \`        -> factorial(1)\`

Each call creates a new stack frame. Space Complexity is O(n) because maximum stack depth is n.
`,
    },
    {
        slug: "memory-model-java-vs-cpp",
        title: "Memory Model Comparison: Java vs C++",
        description:
            "Understanding how memory allocation differs between managed (Java) and unmanaged (C++) environments.",
        date: "2026-01-10T12:00:00Z",
        tags: ["Java", "C++", "Memory", "Systems"],
        readingTime: "11 min read",
        content: `
**Java:**
- Automatic garbage collection
- No explicit free()
- Objects always on heap
- References stored on stack

**C++:**
- Manual memory management
- new/delete
- Stack allocation possible for objects
- Risk of dangling pointers
`,
    },
    {
        slug: "time-and-space-complexity-guide",
        title: "Mastering Time and Space Complexity for Interviews",
        description:
            "A structured guide to analyzing algorithmic complexity, including amortized analysis, recursion tree method, and real interview patterns.",
        date: "2026-01-05T12:00:00Z",
        tags: ["Algorithms", "Complexity", "DSA", "Interview Prep"],
        readingTime: "12 min read",
        content: `
Big-O is not memorization. It is mathematical reasoning.

We cover:
1. Constant Time O(1)
2. Linear Time O(n)
3. Logarithmic O(log n)
4. n log n
5. Exponential growth

**Binary Search:** Time Complexity: O(log n) because search space halves each iteration.
**Merge Sort:** Time: O(n log n), Space: O(n).
`,
    },
    {
        slug: "modern-react-patterns-2026",
        title: "Advanced React Patterns: From Hooks to Architecture",
        description:
            "A deep exploration of advanced React patterns including compound components, controlled vs uncontrolled abstractions, custom hooks architecture, and performance optimization.",
        date: "2026-02-15T12:00:00Z",
        tags: ["React", "Architecture", "Performance"],
        readingTime: "8 min read",
        content: `
In this article, we explore modern React architecture patterns used in production systems.

Topics covered:
- Compound component pattern
- Controlled vs uncontrolled abstractions
- Context segmentation for performance
- Rendering cost analysis
`,
    },
    {
        slug: "nextjs-server-actions-deep-dive",
        title: "Next.js Server Actions: Eliminating API Layers",
        description:
            "Understanding how Server Actions redefine data mutations in full-stack React applications, including caching boundaries and optimistic updates.",
        date: "2026-02-10T12:00:00Z",
        tags: ["Next.js", "Server Actions", "Full Stack"],
        readingTime: "10 min read",
        content: `
Server Actions introduce a paradigm shift in Next.js application architecture.

Key concepts:
- How Server Actions replace traditional API routes
- Secure data mutations without exposing endpoints
- Integration with React transitions
- Cache invalidation using revalidatePath
`,
    },
    {
        slug: "tailwind-animation-system-design",
        title: "Scalable Animation Systems with Tailwind CSS",
        description:
            "How to build maintainable animation systems using Tailwind utilities, CSS variables, and design tokens without sacrificing performance.",
        date: "2026-02-05T12:00:00Z",
        tags: ["Tailwind CSS", "UI/UX", "Animation"],
        readingTime: "7 min read",
        content: `
Animations should be intentional, not decorative.

In this article we cover:
- Utility-first animation design
- Performance considerations (GPU acceleration)
- Creating reusable animation primitives
`,
    },
];
