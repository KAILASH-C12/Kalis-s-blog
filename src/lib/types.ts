export interface Post {
    slug: string
    title: string
    description: string
    date: string
    readingTime?: string
    tags: string[]
    coverImage?: string
    content?: string
}
