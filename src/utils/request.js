export default class RequestUtil {

    //static _apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJuaXJhbmQiLCJpYXQiOjE1ODgyNTg3MzB9.XGQmtTbHtcYdLd0FWnOlUJEsupww9lesbDZ1qULvDY0' || null

    static fetchJSON(url, _apiToken, params = {}) {
        console.log(url, params)
        return fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${_apiToken || ''}`
            },
            body: JSON.stringify(params),
        }).then((response) => response.json());
    }

    static setAPIToken(apiToken) {
        this._apiToken = apiToken;
    }
}