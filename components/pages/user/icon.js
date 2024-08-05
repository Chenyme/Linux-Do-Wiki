import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const UserIcon = () => {
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
                        width: '27px',
                        height: '27px',
                        objectFit: 'cover',
                        transform: 'translateX(-7px)' // 向左移动20px
                    }}
                />
            )}
        </div>
    );
};

export default UserIcon;