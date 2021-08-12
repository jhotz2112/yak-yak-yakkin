import sendRequest from './send-request';

const BASE_URL = '/api/locations';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}


export function addLocation(locationData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', locationData, true);
}

export async function updateLocation(locationData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', locationData)
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteOne(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}


