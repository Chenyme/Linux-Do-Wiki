import styles from './LinuxdoUserCard.module.css';
import React, {useEffect, useState} from "react";
import * as linuxdoUserDataService from "../../../service/web/linuxdoUserDataService";

const LinuxdoUserCard = ({linuxdoUsername, forceSimplifiedUser}) => {
    const [simplifiedUser, setSimplifiedUser] = useState(null);

    useEffect(() => {
        if (forceSimplifiedUser) {
            setSimplifiedUser(forceSimplifiedUser);
        } else {
            const fetchData = async () => {
                try {
                    const user = await linuxdoUserDataService.retrieveSimplifiedUser(linuxdoUsername);
                    setSimplifiedUser(user);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
    }, [linuxdoUsername]);

    // ont user or loading
    if (!simplifiedUser) {
        return (
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <div className={styles.top}/>
                        <div className={styles.mid}/>
                        <div className={styles.bot}/>
                        <div className={styles.content}>
                            <div className={styles.name} style={{textDecoration: 'line-through'}}>{linuxdoUsername}</div>
                            <div className={styles.title}>你是谁？</div>
                            <div className={styles.trustLevel}>Level X</div>
                            <div className={styles.trustLevelName}>非用户</div>
                            <svg className={styles.chip} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                                 height="30px" viewBox="0 0 50 50" xmlSpace="preserve">
                                <image width="50" height="50" x="0" y="0"
                                       href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
                            </svg>
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
                        <div>
                            <div className={styles.sstrip1}>
                                <p className={styles.code}>CREATED</p>
                            </div>
                            <div className={styles.mstrip1}>
                                <p className={styles.code}>YYYY-MM-DD</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.sstrip2}>
                                <p className={styles.code}>SCORE</p>
                            </div>
                            <div className={styles.mstrip2}>
                                <p className={styles.code}>0</p>
                            </div>
                        </div>
                        <div className={styles.groupBack}>L I N U X &nbsp; D O N ' T</div>
                        <div className={styles.idBack}>0000 0000 0000 0000</div>
                    </div>
                </div>
            </div>
        )
            ;
    }

    const profileHidden = simplifiedUser.profileHidden;
    const suspended = simplifiedUser.suspended;

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
    const trustLevel = simplifiedUser.trustLevel;
    let trustLevelName;
    switch (trustLevel) {
        case 0:
            trustLevelName = "新用户";
            break;
        case 1:
            trustLevelName = "基本用户";
            break;
        case 2:
            trustLevelName = "成员";
            break;
        case 3:
            trustLevelName = "活跃用户";
            break;
        case 4:
            trustLevelName = "领导者";
            break;
        default:
            trustLevelName = "非用户";
            console.log(trustLevel);
            break;
    }

    // back
    let createdAt = simplifiedUser.createdAt;
    if (createdAt !== undefined) {
        createdAt = createdAt.slice(0, 10);
    }
    const gamificationScore = simplifiedUser.gamificationScore;

    // suspended user
    if (suspended) {
        const suspendedTill = simplifiedUser.suspendedTill.slice(0, 10);
        return (
            <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                        <div className={styles.top}/>
                        <div className={styles.mid}/>
                        <div className={styles.bot}/>
                        <div className={styles.content}>
                            <div className={styles.name} style={{textDecoration: 'line-through'}}>{name}</div>
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
                            <div className={styles.group}>L I N U X &nbsp; D O N E</div>
                            <div className={styles.id}>{id}</div>
                        </div>
                        <div className={styles.suspendedLock}>此账号已被封禁<br/>至 {suspendedTill}</div>
                    </div>
                    <div className={styles.flipCardBack}>
                        <div className={styles.back}/>
                        <div className={styles.groupBack}>L I N U X &nbsp; D O N E</div>
                        <div className={styles.idBack}>{id}</div>
                        <div className={styles.suspendedLock}>此账号已被封禁<br/>至 {suspendedTill}</div>
                    </div>
                </div>
            </div>
        );
    }

    // normal user
    return (
        <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <div className={styles.top}/>
                    <div className={styles.mid}/>
                    <div className={styles.bot}/>
                    <div className={styles.content}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.trustLevel}>Level {trustLevel}</div>
                        <div className={styles.trustLevelName}>{trustLevelName}</div>
                        <svg className={styles.chip} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px"
                             height="30px" viewBox="0 0 50 50" xmlSpace="preserve">
                            <image width="50" height="50" x="0" y="0"
                                   href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOYfEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSWekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GSe0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOWekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bfu3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWuafUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrbtnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOhg0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU/f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dEorDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2NgGAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVgOkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3dI2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6alKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkIJVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0FqBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGmBSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCETamiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdCS24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAyLTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
                        </svg>
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
                    <div>
                        <div className={styles.sstrip1}>
                            <p className={styles.code}>CREATED</p>
                        </div>
                        <div className={styles.mstrip1}>
                            <p className={styles.code}>{createdAt}</p>
                        </div>
                    </div>
                    <div>
                        <div className={styles.sstrip2}>
                            <p className={styles.code}>SCORE</p>
                        </div>
                        <div className={styles.mstrip2}>
                            <p className={styles.code}>{gamificationScore}</p>
                        </div>
                    </div>
                    <div className={styles.groupBack}>L I N U X &nbsp; D O</div>
                    <div className={styles.idBack}>{id}</div>
                </div>
            </div>
        </div>
    );
};

export default LinuxdoUserCard;
