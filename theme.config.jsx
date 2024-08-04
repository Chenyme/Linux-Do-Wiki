import Image from 'next/image'
import Link from 'next/link'
import ThemeWrapper from "./components/common/wrapper/ThemeWrapper";
import ScrollToTop from './components/global/ScrollToTop';
import React from "react";

export default {
  docsRepositoryBase: 'https://github.com/Chenyme/Linux-Do-Wiki/blob/main',
  toc: {
    backToTop: false,
    title: '本页目录',
    extraContent: <ScrollToTop />
  },
  chat: {
    link: '/user',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
        </svg>
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
      <a href="/user" target="_blank">
        🎉 Wiki 个人空间 已上线测试！点击前往 →
      </a>

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
    placeholder: '搜索文档...',
    error: '哎呀出错啦，请稍后重试！',
    emptyResult: <>
      <span class="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">
      未找到相关内容，请尝试其他关键词
      </span>
    </>
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent({ title, type }) {
      if (title.startsWith("[LD]")) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={15} height={15} />
                &nbsp;&nbsp;
                <span>{title.slice(4)}</span>
            </div>
        );
      }

        if (title.startsWith("[LDM]")) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={15} height={15} />
              &nbsp;&nbsp;
              <span>{title.slice(5)}</span>
            </div>
        );
      }

      if (title.startsWith("[LDW]")) {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <Image src="/logo.png" width={15} height={15} />
              &nbsp;&nbsp;
              <span>{title.slice(5)}</span>
            </div>
        );
      }

      if (title === "欢迎") {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z"/>
              </svg>
              &nbsp;&nbsp;
              <span>{title}</span>
            </div>
        );
      }

      if (title === "公告") {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pass"
                   viewBox="0 0 16 16">
                <path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"/>
                <path
                    d="M8 2a2 2 0 0 0 2-2h2.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0H6a2 2 0 0 0 2 2Zm0 1a3.001 3.001 0 0 1-2.83-2H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1.67A3.001 3.001 0 0 1 8 3Z"/>
              </svg>
              &nbsp;&nbsp;
              <span>{title}</span>
            </div>
        );
      }

      if (title === "共建荣誉榜") {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award"
                   viewBox="0 0 16 16">
                <path
                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
              </svg>
              &nbsp;&nbsp;
              <span>{title}</span>
            </div>
        );
      }

      if (title === "更新记录") {
        return (
            <div style={{display: "flex", alignItems: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   className="bi bi-clock-history" viewBox="0 0 16 16">
                <path
                    d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                <path
                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              &nbsp;&nbsp;
              <span>{title}</span>
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