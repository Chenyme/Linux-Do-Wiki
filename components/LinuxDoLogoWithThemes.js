import Image from 'next/image';
import { useTheme } from 'nextra-theme-docs';
import { useEffect, useState } from 'react';

const LinuxDoLogoWithThemes = () => {
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

    const src = currentTheme === 'light'
        ? '/linuxdo_logo_with_dark_text.png'
        : '/linuxdo_logo_with_light_text.png';

    return (
        <Image src={src} width={220} height={100} alt="LinuxDo Logo" />
    );
}

export default LinuxDoLogoWithThemes;
