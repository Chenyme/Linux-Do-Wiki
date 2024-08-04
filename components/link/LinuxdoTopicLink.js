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
                        style={{color: "#ffb003"}}
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

    return (
        <TooltipWrapper
            tooltipId={"topic" + id}
            children={
                <span
                    style={{color: "#ffb003"}}
                >
                    Linux Do 话题 #{id}
                </span>
            }
            tooltipChildren={
                <>
                    <div>{title}</div>
                    <br/>
                    <BlueLinkWrapper
                        herf={"https://linux.do/t/topic/" + id}
                        text={"访问 Linux Do 话题 #" + id}
                        target="_blank"
                    />
                </>
            }
        />
    );
};

export default LinuxdoTopicLink;