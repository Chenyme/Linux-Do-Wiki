import React from 'react';
import { toPng, toJpeg, toSvg } from 'html-to-image';

// filename: xxx.png, xxx.jpeg, xxx.svg
// format: png, jpeg, svg
// backgroundColor: null->transparent
const Printer = ({ elementId, showChildren, filename, format, backgroundColor }) => {
    const handleDownload = async () => {

        const element = document.getElementById(elementId);

        if (!element) {
            alert("未找到" + elementId + "元素");
            return null;
        }

        try {
            const width = element.offsetWidth;
            const height = element.offsetHeight;

            let dataUrl;

            switch (format) {
                case 'jpeg':
                    dataUrl = await toJpeg(element, {
                        quality: 0.95,
                        width,
                        height,
                        backgroundColor: backgroundColor || '#ffffff'
                    });
                    break;
                case 'svg':
                    dataUrl = await toSvg(element, { width, height, backgroundColor });
                    break;
                case 'png':
                default:
                    dataUrl = await toPng(element, {
                        width,
                        height,
                        backgroundColor: backgroundColor || null,
                    });
                    break;
            }

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Failed to render the element:', error);
        }
    };

    return (
        <span>
            <button onClick={handleDownload}>
                {showChildren}
            </button>
        </span>
    );
};

export default Printer;