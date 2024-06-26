import Index, { getStaticProps } from './';
import posts from '../posts/allPosts.json'

export default Index;
export { getStaticProps };

/**
 * Loads the first page of blog posts and uses the meta
 * data to calculate how many pages of posts there will
 * be in total. This is necessary to determine if there
 * is a previous and next page of blog posts.
 * @returns {Promise<{paths: [], fallback: boolean}>} props for each of the sites
 */
export const getStaticPaths = async () => {
    
    // Fetches the first page of blog posts to use the metadata    
    const data = {...posts};

    // Calculate how many pages of blog posts there are in total
    const totalPages = Math.ceil((data.totalItems || 0) / data.itemsPerPage);
    
    // Prepare props for each of the site
    const paths = [];
    
    for (let i = 0; i <= totalPages; i++) {
        paths.push({
            params: {
                currentPage: i.toString()
            }
        });
    }
    
    return {
        fallback: false,
        paths
    };
};