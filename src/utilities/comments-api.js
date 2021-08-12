import sendRequest from './send-request';

const BASE_URL = '/api/locations/comments';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}


export function addComment(locationData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', locationData, true);
}

export async function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function updateComment(locationData, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', locationData)
}