import React, { useState, useEffect } from 'react';
import * as linuxdoUserDataService from "../service/web/linuxdoUserDataService";

const UserDataComponentTest = ({username}) => {
    const [simplifiedUser, setSimplifiedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await linuxdoUserDataService.retrieveSimplifiedUser(username);
                setSimplifiedUser(user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [username]);

    if (!simplifiedUser) {
        return <div>Loading...</div>;
    }

    const twoName = simplifiedUser.name + " @" + simplifiedUser.username;
    const avatar_template = simplifiedUser.avatar_template;
    const avatar96Url = "https://images.weserv.nl/?url=" + "https://linux.do" + avatar_template.replace("/{size}/", "/96/");
    const avatar288Url = "https://images.weserv.nl/?url=" + "https://linux.do" + avatar_template.replace("/{size}/", "/288/");

    return (
        <div>
            name @username = {twoName}
            <br/>
            size=96 = <img src={avatar96Url} alt="Avatar"/>
            <br/>
            size-228 = <img src={avatar288Url} alt="Avatar"/>
        </div>
    );
};

export default UserDataComponentTest;