import sendRequest from './send-request';

const BASE_URL = '/api/locations';

// Retrieve an unpaid order for the logged in user
export function getAll() {
  return sendRequest(`${BASE_URL}`);
}


export function AddLocation(locationData) {
  // Just send itemId for best security (no pricing)
  return sendRequest(`${BASE_URL}/create`, 'POST', locationData);
}

// // Update the item's qty in the cart
// // Will add the item to the order if not currently in the cart
// // Sending info via the data payload instead of a long URL
// export function setItemQtyInCart(itemId, newQty) {
//   return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
// }

// // Updates the order's (cart's) isPaid property to true
// export function checkout() {
//   // Changing data on the server, so make it a POST request
//   return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
// }
