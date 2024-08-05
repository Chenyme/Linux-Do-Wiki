import httpService from "./httpService";

// Fetch full response
export async function retrieveUserJson(username) {
    try {
        const response = await httpService.get(`/api/linuxdo/u/${username}/summary.json`);
        console.log('API Response:', response);  // Log the full response data
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// Fetch and return specific user summary data
export async function retrieveSimplifiedUser(username) {
    try {
        const data = await retrieveUserJson(username);
        if (data && data.user_summary) {
            const user_summary = data.user_summary;
            const simplifiedUser = {
                likesGiven: user_summary.likes_given,
                likesReceived: user_summary.likes_received,
                topicsEntered: user_summary.topics_entered,
                postsReadCount: user_summary.posts_read_count,
                daysVisited: user_summary.days_visited,
                topicCount: user_summary.topic_count,
                postCount: user_summary.post_count,
                timeRead: user_summary.time_read,
                recentTimeRead: user_summary.recent_time_read,
                bookmarkCount: user_summary.bookmark_count,
                canSeeSummaryStats: user_summary.can_see_summary_stats,
                solvedCount: user_summary.solved_count,
                topicIds: user_summary.topic_ids
            };

            return simplifiedUser;
        } else {
            console.error('Invalid response structure:', data);  // Log the invalid response structure
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
