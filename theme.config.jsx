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

        if (title === "精选服务") {
            return (
                <div style={{display: "flex", alignItems: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path
                            d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
                    </svg>
                    &nbsp;&nbsp;
                    <span>{title}</span>
                </div>
            );
        }

        if (title === "佬友百科") {
            return (
                <div style={{display: "flex", alignItems: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-book" viewBox="0 0 16 16">
                        <path
                            d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>
                    &nbsp;&nbsp;
                    <span>{title}</span>
                </div>
            );
        }

        if (title === "公开测试") {
            return (
                <div style={{display: "flex", alignItems: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-bug" viewBox="0 0 16 16">
                        <path
                            d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
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