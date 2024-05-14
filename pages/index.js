import React from 'react';

import Main from '../components/layout/main/Main';
import PostPreview from '../components/postPreview/PostPreview';
import PageControls from '../components/pageControls/PageControls';

import utils from '../utils/';

import posts from '../posts/allPosts.json'

/**
 * Displays all blog posts for a given page number.
 * @param posts {array} all blog posts for the given page
 * @param pageControls {array} contains the pages for the navigation
 * @param currentPage {number} number of the active page
 * @returns {*}
 * @constructor
 */
const Posts = ({ posts, pageControls, currentPage }) => (
    <Main>
        {(posts || []).map(post => (
            <PostPreview
                key={post.id}
                id={post.id}
                title={post.title}
                previewText={post.description}
                previewImage={post?.previewImageUrls?.medium || ''}
                lastEdit={post.updatedAt}
            />
        ))}
        
        <PageControls data={pageControls} active={currentPage} />
    </Main>
);

export default Posts;

/**
 * Fetches all blog posts for the current page
 * number and calculates the navigation.
 * @param ctx
 * @returns {Promise<{props: {pageControls: (*|*[]), currentPage: number, posts: (*|*[])}}>} posts, page controls and page number
 */
export const getStaticProps = async (ctx) => {
    
    // Determine the page for which the blog posts should be shown
    const currentPage = +(ctx?.params?.currentPage || '1');
    
    // Calculate the nnavigation
    const pageControls = utils.getPages(posts.totalItems, posts.itemsPerPage, currentPage) || [];
    
    // Pass the posts, page controls and the active page number to the component
    return { props: { posts: posts.data || [], pageControls, currentPage } };
};