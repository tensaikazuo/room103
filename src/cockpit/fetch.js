import axios from "axios";

const myToken = process.env.npm_config_cockpit_api_key

export async function fetchCollection() {
  return axios
    .post(
      `http://mycockpit:80/api/collections/get/Log?token=${myToken}`,
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
