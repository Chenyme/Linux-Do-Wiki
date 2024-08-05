import TooltipWrapper from "../common/wrapper/TooltipWrapper";
import BlueLinkWrapper from "../common/wrapper/BlueLinkWrapper";
import LinuxdoUserCard from "../cards/LinuxdoUserCard/LinuxdoUserCard";
import {useEffect, useState} from "react";
import * as linuxdoUserDataService from "../../service/web/linuxdoUserDataService";

const LinuxdoUserLink = ({ linuxdoUsername }) => {

    const [simplifiedUser, setSimplifiedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await linuxdoUserDataService.retrieveSimplifiedUser(linuxdoUsername);
                setSimplifiedUser(user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [linuxdoUsername]);

    if (!simplifiedUser) {
        return (
            <span
                style={{color: "#ffb003"}}
            >
                Linux Do 用户 @{linuxdoUsername}
            </span>
        );
    }

    const id = simplifiedUser.id;
    let name = simplifiedUser.name;
    const username = simplifiedUser.username;
    if (name === "") {
        name = username;
    }

    return (
        <TooltipWrapper
            tooltipId={"User" + id}
            children={
                <span
                    style={{color: "#ffb003"}}
                >
                    Linux Do 用户 @{name}
                </span>
            }
            tooltipChildren={
                <>
                    <LinuxdoUserCard
                        forceSimplifiedUser={simplifiedUser}
                    />
                    <br/>
                    <BlueLinkWrapper
                        herf={"https://linux.do/u/" + username + "/summary"}
                        text={"访问 " + name + " 的 Linux Do 主页"}
                        target="_blank"
                    />
                </>
            }
        />
    );
};

export default LinuxdoUserLink;