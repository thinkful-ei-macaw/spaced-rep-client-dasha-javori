import config from "../config";
import TokenService from "./token-service";

const languageService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/api/language`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

//getbyid
// getLanguage() {
//   return fetch(`${config.API_ENDPOINT}/language/${thoughtID}`, {
//     headers: {
//     },
//   })
//     .then(res =>
//       (!res.ok)
//         ? res.json().then(e => Promise.reject(e))
//         : res.json()
//     )
// },

//getwords

export default languageService;
