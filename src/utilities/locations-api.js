import sendRequest from './send-request';

const BASE_URL = '/api/locations';

// Retrieve an unpaid order for the logged in user
export function getAll() {
  return sendRequest(`${BASE_URL}`);
}


export function AddLocation(locationData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', locationData);
}

export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

