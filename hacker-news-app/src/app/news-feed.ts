export interface NewsFeed {
    hits: Hits[],
    page: number,
    nbHits: number,
    nbPages: number,
    hitsPerPage: number,
}

interface Hits{
    title: string,
    url: string,
    author: string,
    points: number,
    num_comments: number,
    created_at: string,
}
