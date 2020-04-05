import axios from "axios";

export async function fetchCollection() {
  return axios
    .post(
      'http://localhost:8080/api/collections/get/Log?token=fe71c0c6f9aa01736ac432513d5136',
      {
        filter: {
          Date: true,
        },
        sort: {_created:-1},
        // populate: 1,
        // simple: 1,
      }
    )
    .then(collection => collection.data)
    .catch(error => {
      console.error(error);
    });
}
