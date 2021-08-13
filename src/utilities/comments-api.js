import sendRequest from './send-request';

const BASE_URL = '/api/locations';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addComment(commentData, locationId) {
    return sendRequest(`${BASE_URL}/${locationId}/comments`, 'POST', commentData);
}

export async function deleteOne(commentId) {
    return sendRequest(`/api/comments/${commentId}`, 'DELETE')
}
