import styles from './LinuxdoUserCard.module.css';
import React, {useEffect, useState} from "react";
import * as linuxdoUserDataService from "../service/web/linuxdoUserDataService";

const LinuxdoUserCard = ({ linuxdoUsername }) => {
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
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <div className={styles.top}/>
                        <div className={styles.mid}/>
                        <div className={styles.bot}/>
                        <div className={styles.content}>
                            <div className={styles.name}>{linuxdoUsername}</div>
                            <div className={styles.title}>你是谁？</div>
                            <svg className={styles.avatar} xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 width="100px" height="100px"
                                 viewBox="0 0 100 100"
                                 xmlSpace="preserve"
                            >
                                <defs>
                                    <clipPath id="circleClip">
                                        <circle cx="50" cy="50" r="50"/>
                                    </clipPath>
                                </defs>
                                <circle cx="50" cy="50" r="47" fill="transparent"/>
                                <image width="100" height="100" x="0" y="0" clipPath="url(#circleClip)"
                                       href="/logo.png"></image>
                            </svg>
                            <div className={styles.group}>L I N U X &nbsp; D O N ' T</div>
                            <div className={styles.id}>0000 0000 0000 0000</div>
                        </div>
                    </div>
                    <div className={styles.flipCardBack}>
                        <div className={styles.back}/>
                        <div className={styles.strip}></div>
                        <div className={styles.mstrip}>
                            <p className={styles.code}></p>
                        </div>
                        <div className={styles.sstrip}>
                            <p className={styles.code}>Level X</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const profileHidden = simplifiedUser.profileHidden;

    // front
    const id = simplifiedUser.id.toString().padStart(16, '0').match(/.{1,4}/g).join(' ')
    let name = simplifiedUser.name;
    const username = simplifiedUser.username;
    if (name === "") {
        name = username;
    }
    const avatarTemplate = simplifiedUser.avatarTemplate;
    const avatar288Url = "/image/linuxdo" + avatarTemplate.replace("/{size}/", "/288/");
    const title = simplifiedUser.title;

    // back
    const trustLevel = simplifiedUser.trustLevel;
    let createdAt = simplifiedUser.createdAt;
    if (createdAt !== undefined) {
        createdAt = createdAt.slice(0, 10);
    }

    return (
        <div>
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <div className={styles.top}/>
                        <div className={styles.mid}/>
                        <div className={styles.bot}/>
                        <div className={styles.content}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.title}>{title}</div>
                            <svg className={styles.avatar} xmlns="http://www.w3.org/2000/svg"
                                 x="0px" y="0px"
                                 width="100px" height="100px"
                                 viewBox="0 0 100 100"
                                 xmlSpace="preserve"
                            >
                                <defs>
                                    <clipPath id="circleClip">
                                        <circle cx="50" cy="50" r="50"/>
                                    </clipPath>
                                </defs>
                                <circle cx="50" cy="50" r="47" fill="transparent"/>
                                <image width="100" height="100" x="0" y="0" clipPath="url(#circleClip)"
                                       href={avatar288Url}></image>
                            </svg>
                            <div className={styles.group}>L I N U X &nbsp; D O</div>
                            <div className={styles.id}>{id}</div>
                        </div>
                    </div>
                    <div className={styles.flipCardBack}>
                        <div className={styles.back}/>
                        <div className={styles.strip}></div>
                        <div className={styles.mstrip}>
                            <p className={styles.code}>{createdAt}</p>
                        </div>
                        <div className={styles.sstrip}>
                            <p className={styles.code}>Level {trustLevel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinuxdoUserCard;
