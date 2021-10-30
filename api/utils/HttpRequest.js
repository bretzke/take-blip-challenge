module.exports = {
    get(route, params = {}) {
        return this.request('GET', route, params);
    },

    post(route, params = {}) {
        return this.request('POST', route, params);
    },

    delete(route, params = {}) {
        return this.request('DELETE', route, params);
    },

    put(route, params = {}) {
        return this.request('PUT', route, params);
    },

    request(method, url, params = {}) {
        return new Promise((resolve, reject) => {
            let XMLHttpRequest = require('xhr2');
            let ajax = new XMLHttpRequest();
            ajax.open(method.toUpperCase(), url);
            ajax.onerror = event => {
                reject(event);
            }
            ajax.onload = event => {
                let obj = {};
                try {
                    obj = JSON.parse(ajax.responseText);
                } catch(e) {
                    reject(e);
                }
                resolve(obj)
            }

            ajax.setRequestHeader('Content-Type', 'application/json');

            //chama o ajax
            ajax.send(JSON.stringify(params));
        })
    }
};