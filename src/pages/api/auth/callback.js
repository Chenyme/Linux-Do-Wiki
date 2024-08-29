import axios from 'axios';
import qs from 'qs';
import { serialize } from 'cookie';
import store from "../../../../service/storage/store";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'http://wiki.linux.do/api/auth/callback';
const TOKEN_ENDPOINT = 'https://connect.linux.do/oauth2/token';
const USER_ENDPOINT = 'https://connect.linux.do/api/user';

export default async (req, res) => {
    const { code, state } = req.query;

    if (!code || !state) {
        return res.status(400).send('Missing code or state parameter');
    }

    try {
        const data = qs.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI
        });

        const tokenResponse = await axios.post(TOKEN_ENDPOINT, data, {
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const userResponse = await axios.get(USER_ENDPOINT, {
            headers: { 'Authorization': `Bearer ${tokenResponse.data.access_token}` }
        });

        // 保存用户数据到cookie
        res.setHeader('Set-Cookie', serialize('user', JSON.stringify(userResponse.data), {
            path: '/',
            maxAge: 7200 // 2 hours
        }));

        // 重定向到首页或其他受保护页面
        res.redirect('/');
    } catch (error) {
        console.error('Error during token fetch or user info retrieval:', error.message);
        return res.status(500).send('Failed to fetch access token');
    }
};
