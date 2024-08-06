import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';


const UserAvatar = () => {
    const [user, setUser] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        const userCookie = Cookie.get('user');
        if (userCookie) {
            const parsedUser = JSON.parse(userCookie);
            setUser(parsedUser);
            if (parsedUser.avatar_url) {
                setAvatarUrl(parsedUser.avatar_url);
            }
        }
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {avatarUrl && (
                <img
                    src={avatarUrl}
                    alt="User Avatar"
                    style={{
                        borderRadius: '50%',
                        width: '28px',
                        height: '28px',
                        objectFit: 'cover',
                        transform: 'translateX(-8px)'
                    }}
                />
            )}
        </div>
    );
};

export default UserAvatar;
