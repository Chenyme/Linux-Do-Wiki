// NOTE 若编辑该组件，必须同步编辑Wiki共建规范页面。

import React from 'react';
import {useConfig} from "nextra-theme-docs";
import Image from 'next/image';
import {getMark, LDMarkedStringList2LinuxdoUserLinkList} from "../../service/markedStringService";

const StandardLayout = ({ children }) => {

    const frontMatter = useConfig().frontMatter;

    const title = frontMatter.title !== undefined ? frontMatter.title : null;
    const description = frontMatter.description !== undefined ? frontMatter.description : null;
    const cover = frontMatter.cover !== undefined ? frontMatter.cover : null;


    const formattedPageEditedBy = formatLinkList("页面编辑者", frontMatter.pageEditedBy);
    const formattedResourceCreatedBy = formatLinkList("资源原创者", frontMatter.resourceCreatedBy);
    const formattedResourceSharedBy = formatLinkList("资源分享者", frontMatter.resourceSharedBy);

    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>{title}</title>
            <desc>{description}</desc>
        </head>
        <body>
            <header style={{marginBottom: '30px', borderBottom: '1px solid #ccc'}}>
                <h1 style={{textAlign: 'center', fontSize: '36px', fontWeight: 'bold'}}>{title}</h1>
            </header>
            <main>
                {children}
            </main>
            <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', padding: '10px', textAlign: 'left'}}>
                {formattedPageEditedBy}<br/>
                {formattedResourceCreatedBy}<br/>
                {formattedResourceSharedBy}<br/>
            </footer>
        </body>
        </html>
    );
}

// 未来可能提升为通用组件
function joinComponentList(componentList, separator) {
    return (
        <span>
            {componentList.map((component, index) => (
                <React.Fragment key={index}>
                    {component}
                    {index < componentList.length - 1 && separator}
                </React.Fragment>
            ))}
        </span>
    );
}

// 未来可能提升为通用组件
function formatLinkList(describe, list) {
    if (list === undefined || list === null || list.length === 0 || list === "") {
        return null;
    }
    const linklist = LDMarkedStringList2LinuxdoUserLinkList(list);
    return (
        <div>
            {describe}：{joinComponentList(linklist, '、')}
        </div>
    );
}

export default StandardLayout;
