import crypto from 'crypto';

const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = 'http://wiki.linux.do/api/auth/callback';
const AUTHORIZATION_ENDPOINT = 'https://connect.linux.do/oauth2/authorize';

export default (req, res) => {
    const state = crypto.randomBytes(16).toString('hex');
    const authorizationUrl = `${AUTHORIZATION_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&state=${state}`;
    res.redirect(authorizationUrl);
};
