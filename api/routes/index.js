let github = require('./../utils/GitHub');

module.exports = (app) => {
    app.post('/', (req, res) => {
        github.getUserRepos(req.body).then(json => {
            res.status(json.statusCode).json(json);
        });
    });
};