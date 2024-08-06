import Image from 'next/image'
import Link from 'next/link'
import ScrollToTop from './components/global/ScrollToTop';
import ThemeWrapper from "./components/common/wrapper/ThemeWrapper";
import UserAvatar from "./components/pages/user/useravatar";
import React from "react";

export default {
  docsRepositoryBase: 'https://github.com/Chenyme/Linux-Do-Wiki/blob/main',
  toc: {
    backToTop: false,
    title: '本页目录',
    extraContent: <ScrollToTop />
  },
  chat: {
    link: 'happy',
    icon: (
      <Link href="/user" style={{ textDecoration: 'none'}}>
        <UserAvatar />
      </Link>
    )
  },
  feedback: {
    content: '有疑问？给我们反馈 →',
  },
  editLink: {
    text: '在 GitHub 上编辑此页 →',
  },
  head: (
    <>
      <link rel="icon" href="/logo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LINUX DO - WIKI" />
      <meta property="og:description" content="LINUX DO 社区文档站" />
      <title>LINUX DO - WIKI</title>
    </>
  ),
  logo: (
    <>
      <Image src="/logo.png" alt="Logo" width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        LINUX DO - WIKI
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/Chenyme/Linux-Do-Wiki/blob/main'
  },
  themeSwitch: {
    useOptions() {
      return {
        light: (<>&nbsp;&nbsp;&nbsp;&nbsp;明亮</>),
        dark: (<>&nbsp;&nbsp;&nbsp;&nbsp;黑暗</>),
        system: (<>&nbsp;&nbsp;&nbsp;&nbsp;自动</>)
      }
    }
  },
  banner: {
    key: '1',
    dismissible: false,
    text: (
      <Link href="/user" style={{ textDecoration: 'none'}}>
        🎉 Wiki 个人空间 已上线测试！点击前往 →
      </Link>
    )
  },
  footer: {
    text: (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px' }}>
      <div style={{ textAlign: 'left' }}>
        <span>
          <b>Linux Do Wiki - {new Date().getFullYear()} Powered By @
          <a href="https://github.com/Chenyme/Linux-Do-Wiki" target="_blank" rel="noopener noreferrer">
            Chenyme
          </a>
          </b>
          <br />
          <br />
          <Link href="https://linux.do/">官网：<b>linux.do</b></Link> | <Link href="https://linuxdo.org/">备用：<b>linuxdo.org</b></Link>
        </span>
      </div>
      <div style={{ textAlign: 'right' }}>
        <ThemeWrapper
          childrenInLightTheme={
            <Image src='/linuxdo_logo_with_dark_text.png' width={200} height={80} alt="LinuxDo Logo" />
          }
          childrenInDarkTheme={
            <Image src='/linuxdo_logo_with_light_text.png' width={200} height={80} alt="LinuxDo Logo" />
          }
        />
      </div>
    </div>
    )
  },
  search: {
    placeholder: '搜索 Wiki 内容...',
    error: '哎呀，出错啦！请稍后重试！',
    emptyResult: <>
      <span class="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
        未找到相关内容，请尝试其他关键词！
      </span>
    </>
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent({ title, type }) {
      if (title.startsWith("[LD]")) {
        if (title === "[LD]Linux Do") {
          return (
            <div style={{display: "flex", alignItems: "center"}}>
              <Image src="/logo.png" width={16} height={16} />
              &nbsp;&nbsp;
              <span><b>{title.slice(4)}</b></span>
            </div>
          );
        }
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={16} height={16} />
                &nbsp;&nbsp;
                <span>{title.slice(4)}</span>
            </div>
        );
      }
        if (title.startsWith("[LDM]")) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={16} height={16} />
              &nbsp;&nbsp;
              <span>{title.slice(5)}</span>
            </div>
        );
      }
      if (title.startsWith("[LDW]")) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={16} height={16} />
              &nbsp;&nbsp;
              <span>{title.slice(5)}</span>
            </div>
        );
      }

      if (title === "欢迎") {
        return (
          <div style={{display: "flex", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8B7E66" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
            </svg>
            &nbsp;&nbsp;
            <span><b>{title}</b></span>
          </div>
        );
      }

      if (title === "公告") {
        return (
          <div style={{display: "flex", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#BEBEBE" class="bi bi-pass-fill" viewBox="0 0 16 16">
              <path d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0zM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"/>
            </svg>
            &nbsp;&nbsp;
            <span><b>{title}</b></span>
          </div>
        );
      }

      if (title === "荣誉榜") {
        return (
          <div style={{display: "flex", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#CD9B1D" class="bi bi-award-fill" viewBox="0 0 16 16">
              <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/>
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
            </svg>
            &nbsp;&nbsp;
            <span><b>{title}</b></span>
            </div>
        );
      }

        if (title === "社区服务") {
          return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#87CEFA" class="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"/>
              </svg>
            &nbsp;&nbsp;
            <span><b>{title}</b></span>
            </div>
          );
        }

        if (title === "佬友百科") {
          return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#CDBA96" class="bi bi-book-fill" viewBox="0 0 16 16">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
              </svg>
              &nbsp;&nbsp;
              <span><b>{title}</b></span>
            </div>
          );
        }

        if (title === "公开测试") {
          return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FA8072" class="bi bi-bug-fill" viewBox="0 0 16 16">
                <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z"/>
                <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975"/>
                </svg>
                &nbsp;&nbsp;
                <span><b>{title}</b></span>
            </div>
          );
        }

        if (title === "更新记录") {
          return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2E8B57" className="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              &nbsp;&nbsp;
              <span><b>{title}</b></span>
            </div>
          );
        }

      return <>{title}</>
    }
  },
  gitTimestamp: ({ timestamp }) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return `最后更新于 ${date.toLocaleDateString('zh-CN', options)}`;
  }
}