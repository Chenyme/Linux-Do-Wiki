import Image from 'next/image'
import Link from 'next/link'
import ThemeWrapper from "./components/ThemeWrapper";
import ScrollToTop from './components/ScrollToTop';

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
      if (title === "Wiki 使用说明") {
        return <>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
          </svg>
          &nbsp;&nbsp;
          <b>{title}</b></>
      }

      if (title === "Wiki 共建荣誉榜") {
        return <>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
            <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
          </svg>
          &nbsp;&nbsp;
          <b>{title}</b></>
      }

      if (title === "LinuxDo 社区") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "Oaifree 服务") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "Chat2API 服务") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "Fuclaude 服务") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "DeepLX 服务") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "HttpRW 服务") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
        );
      }

      if (title === "Wiki 更新记录") {
        return (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
            </svg>
            &nbsp;&nbsp;
            <b>{title}</b>
          </span>
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