export interface NewsfeedItem {
    author: string;
    children: Children[],
    created_at: string;
    title: string;
    type: string;
    url: string;
}

interface Children{
    author: string;
    children: Children[],
    created_at: string;
    text: string;
    type: string;
}