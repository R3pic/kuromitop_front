import { UUID } from "crypto"

export type Comment = {
    id: number,
    content: string,
    created_at: Date,
}

export type Track = {
    id: number,
    title: string,
    artist: string,
    thumbnail: string,
    comment_count: number,
    recent_comment: Comment
}

export type Bundle = {
    id: UUID,
    title: string,
}

export type Profile = {
    id: number,
    username: string,
    user_id: number,
    nickname: string,
    thumbnail: string,
    introduction: string,
    created_at: Date,
    updated_at: Date,
    bundleList: Bundle[]
};