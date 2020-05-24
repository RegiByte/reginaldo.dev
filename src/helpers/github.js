import axios from 'axios'
import {RESOURCES_REPO} from '../config/contents'

const client = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    }
})


export const getResources = (params = {}) => client.get(RESOURCES_REPO, params)

export const getFile = filePath => client.get(`https://raw.githubusercontent.com/BRKsReginaldo/reginaldo.dev-resources/master/${filePath}`)