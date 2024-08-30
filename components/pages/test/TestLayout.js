import React from 'react';
import {useConfig} from "nextra-theme-docs";

const TestLayout = ({ children }) => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                <h1>TEST title TEST</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/about">About</a>
                </nav>
            </header>
            <main style={{ marginTop: '20px' }}>
                TEST main start TEST
                {children}
                TEST main end TEST
            </main>
            <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
               TEST footer TEST
                <p>title: {useConfig().frontMatter.contributor !== undefined ? "贡献者：" + useConfig().frontMatter.contributor : null}</p>
                <p>createTime: {useConfig().frontMatter.createTime}</p>
            </footer>
        </div>
    );
};

export default TestLayout;
