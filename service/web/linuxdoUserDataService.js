import httpService from "./httpService";

// fetch() on console to see the full response
export async function retrieveUserJson(username) {
    try {
        const response = await httpService.get('/api/linuxdo/users/' + username + '.json');
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function retrieveUserData(username) {
    const json = await retrieveUserJson(username);
    return json.user;
};

// sth: eg. "user.id", "user.name", "user.avatar_template", etc.
export async function retrieveUserSth(username, sth) {
    const user = await retrieveUserData(username);
    return eval(sth);
};

export async function retrieveSimplifiedUser(username) {
    const user = await retrieveUserData(username);
    const simplifiedUser = {
        // if hidden
        profileHidden: user.profile_hidden,// true or null
        // can not be hidden
        id: user.id,// fixed
        username: user.username,// fixed
        name: user.name,// nickname
        avatarTemplate: user.avatar_template,// {size} can be 96 or 288
        title: user.title,
        // can be hidden
        email: user.email,
        trustLevel: user.trust_level,
        createdAt: user.created_at,
        // add more data if you need
    };
    return simplifiedUser;
};
