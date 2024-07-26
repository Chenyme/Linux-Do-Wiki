import {useEffect, useState} from "react";
import {useTheme} from "nextra-theme-docs";
import DisableSsrWrapper from "./DisableSsrWrapper";

const ThemeWrapper = ({ childrenInLightTheme, childrenInDarkTheme }) => {
    const { theme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
        if (theme === 'system') {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const updateTheme = () => setCurrentTheme(darkModeMediaQuery.matches ? 'dark' : 'light');
            updateTheme();
            darkModeMediaQuery.addEventListener('change', updateTheme);

            return () => darkModeMediaQuery.removeEventListener('change', updateTheme);
        } else {
            setCurrentTheme(theme);
        }
    }, [theme]);

    const children = currentTheme === 'light'
        ? childrenInLightTheme
        : childrenInDarkTheme;

    return (
        <>
            <DisableSsrWrapper>
                {children}
            </DisableSsrWrapper>
        </>
    );
}

export default ThemeWrapper;