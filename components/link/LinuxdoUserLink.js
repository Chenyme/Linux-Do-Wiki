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
                style={{color: "#fea000"}}
            >
                <b>@{linuxdoUsername}</b>
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
                    style={{color: "#fea000"}}
                >
                    <b>@{name}</b>
                </span>
            }
            tooltipChildren={
                <>
                    <LinuxdoUserCard
                        forceSimplifiedUser={simplifiedUser}
                    />
                    <br/>
                    <b>
                        <BlueLinkWrapper
                            herf={"https://linux.do/u/" + username + "/summary"}
                            text={"访问 " + name + " 的 Linux Do 主页"}
                            target="_blank"
                        />
                    </b>
                </>
            }
        />
    );
};

export default LinuxdoUserLink;