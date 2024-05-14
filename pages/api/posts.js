import posts from "../../posts/allPosts.json";

export default function handler(req, res) {
    res.status(200).json(posts)
}