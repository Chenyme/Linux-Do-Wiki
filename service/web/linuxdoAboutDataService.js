import httpService from "./httpService";
import {retrieveUserJson} from "./linuxdoUserDataService";

export async function retrieveAboutJson() {
    try {
        const response = await httpService.get('/api/linuxdo/about.json');
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export async function retrieveAboutData(username) {
    const json = await retrieveAboutJson(username);
    return json.about;
};

// TODO continue here