import {useEffect, useState} from "react";
import BlueLinkWrapper from "../common/wrapper/BlueLinkWrapper";
import TooltipWrapper from "../common/wrapper/TooltipWrapper";
import * as linuxdoTopicDataService from "../../service/web/linuxdoTopicDataService";

const LinuxdoTopicLink = ({linuxdoTopicId}) => {

    const [simplifiedTopic, setSimplifiedTopic] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const topic = await linuxdoTopicDataService.retrieveSimplifiedTopic(linuxdoTopicId);
                setSimplifiedTopic(topic);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [linuxdoTopicId]);

    if (!simplifiedTopic) {
        return (
            <TooltipWrapper
                tooltipId={"topic" + linuxdoTopicId}
                children={
                    <span
                        style={{color: "#fea000"}}
                    >
                    Linux Do 话题 #{linuxdoTopicId}
                </span>
                }
                tooltipChildren={
                    <>
                        <div>糟糕！该页面是一个不公开页面。<br/>您可能没有权限查看请求的资源。<br/>您可以尝试：</div>
                        <br/>
                        <BlueLinkWrapper
                            herf={"https://linux.do/t/topic/" + linuxdoTopicId}
                            text={"访问 Linux Do 话题 #" + linuxdoTopicId}
                            target="_blank"
                        />
                    </>
                }
            />
        );
    };

    const id = simplifiedTopic.id;
    const title = simplifiedTopic.title;
    const createdBy = simplifiedTopic.createdBy;
    const createdAt = simplifiedTopic.createdAt;
    const postsCount = simplifiedTopic.postsCount;
    const views = simplifiedTopic.views;
    const likeCount = simplifiedTopic.likeCount;
    const wordCount = simplifiedTopic.wordCount;
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <TooltipWrapper
            tooltipId={"topic" + id}
            children={
                <span
                    style={{color: "#fea000"}}
                >
                    {title}
                </span>
            }
            tooltipChildren={
                <>
                    <div style={{ marginBottom: '8px', fontSize: '16px', color: '#000', fontWeight: 'bold' }}>{title}</div>
                    <div style={{ marginBottom: '8px', color: '#555' }}>
                        由 <span style={{ fontWeight: 'bold', color: '#555' }}>{createdBy}</span> 发表于 <span style={{ fontWeight: 'bold', color: '#555' }}>{formatDate(createdAt)}</span>
                    </div>
                    <div style={{ marginBottom: '8px', color: '#555' }}>
                        <span style={{ fontWeight: 'bold', color: '#555' }}>{postsCount}</span> 层回贴，
                        <span style={{ fontWeight: 'bold', color: '#555' }}>{views}</span> 次浏览，
                        <span style={{ fontWeight: 'bold', color: '#555' }}>{likeCount}</span> 人点赞，
                        共 <span style={{ fontWeight: 'bold', color: '#555' }}>{wordCount}</span> 字
                    </div>
                    <div>
                        <a
                            href={"https://linux.do/t/topic/" + id}
                            target="_blank"
                            style={{ color: '#1e90ff', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                            访问此话题 #{id}
                        </a>
                    </div>
                </>
            }
        />
    );
};

export default LinuxdoTopicLink;