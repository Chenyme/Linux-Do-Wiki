import Image from 'next/image'
import {useTheme} from "nextra-theme-docs";

const LinuxDoLogoWithThemes = () => {
    let src = useTheme().theme === 'light'
        ? '/linuxdo_logo_with_dark_text.png'
        : '/linuxdo_logo_with_light_text.png';

    return (
        <Image src={src} width={220} height={100} />
    );
}

export default LinuxDoLogoWithThemes;
