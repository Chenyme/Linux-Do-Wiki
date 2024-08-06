import httpService from "./httpService";
import Link from 'next/link'

// fetch() on console to see the full response
export async function retrieveTopicJson(topicId) {
    try {
        const response = await httpService.get('/api/linuxdo/t/' + topicId + '.json');
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function retrieveSimplifiedTopic(topicId) {
    const json = await retrieveTopicJson(topicId);
    const simplifiedTopic = {
        id: json.id,// fixed
        createdBy: json.details.created_by.username,// fixed
        title: json.title,// may change
        createdAt: json.created_at,
        userId: json.user_id,// fixed
        categoryId: json.category_id,// may change
        tags: json.tags,// may none, one, or more
        postsCount: json.posts_count,// 盖楼的层数
        views: json.views,// 浏览量
        likeCount: json.like_count,// 赞
        lastPostedAt: json.last_posted_at,
        wordCount: json.word_count,
        participantCount: json.participant_count,
    };
    return simplifiedTopic;
};