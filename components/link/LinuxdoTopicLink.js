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
            <span
                style={{color: "#ffb003"}}
            >
                Linux Do 话题 #{linuxdoTopicId}
            </span>
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