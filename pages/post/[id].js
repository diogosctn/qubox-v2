import React from 'react';

import BlogPost from '../../components/blogPost/BlogPost';

/**
 * Renders the blog post for the given data.
 * @param post
 * @returns {*}
 * @constructor
 */
const Post = (post) => <BlogPost post={post} />;

export default Post;

/**
 * Loads the blog post.
 * @param ctx {object} context that contains the ID of the blog post that should be loaded
 * @returns {Promise<{props: *}>}
 */
export const getStaticProps = async (ctx) => {
    // Determine the ID of the blog post
    const postId = ctx.params.id;
    console.log(postId)
    // Fetch the blog post
    const post = await require("../../posts/" + postId);
    
    // Pass the post data to the component
    return { props: post };
};

  
/**
 * Determines all the paths for the blog posts.
 * @returns {Promise<{paths: {params: {id: *}}[], fallback: boolean}>}
 */
export const getStaticPaths = async () => {
    // Fetch all blog post IDs
    const allBlogPostIds = [];
    
    // Get all IDs
    const paths = allBlogPostIds.map(id => ({ params: { id } }));
    
    return {
        fallback: false,
        paths
    };
};