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
        id: user.id,// fixed
        username: user.username,// fixed
        name: user.name,// nickname
        avatar_template: user.avatar_template,// {size} can be 96 or 288
        email: user.email,
        trust_level: user.trust_level
        // add more if you need
    };
    return simplifiedUser;
};
