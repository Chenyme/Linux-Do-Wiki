import LinuxdoUserLink from "../components/link/LinuxdoUserLink";

export function getMark(str) {
    const regex = /^\[([^\]]+)\]/;
    const match = str.match(regex);
    if (match) {
        return match[1];
    } else {
        return null;
    }
}

export function LDMarkedStringList2LinuxdoUserLinkList(strList) {
    return strList.map((str) => {
        const mark = getMark(str);
        console.log(mark);
        if (mark === 'LD') {
            return (
                <LinuxdoUserLink linuxdoUsername={str.slice(4)}/>
            );
        } else {
            return str;
        }
    });
}
