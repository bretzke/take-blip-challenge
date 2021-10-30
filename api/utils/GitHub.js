let HttpRequest = require('./HttpRequest');

module.exports = {
    getUserRepos(data = {}) {
        return new Promise((res, rej) => {
            let json = {
                'statusCode': 404,
                'message': 'Usuário não encontrado',
            };

            if(typeof data.user == 'undefined') res(json);

            HttpRequest.get(`https://api.github.com/users/${data.user}`).then(response => {
                if(typeof response['message'] != 'undefined') {
                    res(json);
                } else {
                    json['avatar'] = response['avatar_url'];
                    json['repos'] = [];

                    HttpRequest.get(response['repos_url']).then(repos => {
                        for (let i = 0; i < repos.length; i++) {
                            // validate the language if it exists
                            if((typeof data.language != 'undefined' && data.language) && repos[i]['language'] != data.language) continue;
                            
                            json.repos.push({
                                name: repos[i]['name'],
                                description: repos[i]['description'],
                                createdAt: repos[i]['created_at'],
                            });
                        }

                        // sort order => asc
                        json.repos.sort(function(a, b) {
                            if(a.createdAt < b.createdAt) {
                                return -1;
                            } else {
                                return true;
                            }
                        });

                        if(typeof data.limit == 'undefined') data.limit = 5;

                        // limit
                        while(json.repos.length > data.limit) {
                            json.repos.pop();
                        }

                        json['statusCode'] = 200;
                        delete json.message;
                        res(json);
                    }).catch(err => {
                        json['error'] = err;
                        res(json);
                    });
                }
            }).catch(err => {
                json['error'] = err;
                res(json);
            });
        });
    },
};