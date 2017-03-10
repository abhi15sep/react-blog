var port = process.env.PORT || window.baseUrl || 9080;
var host = "localhost";
var protocol = "http:";

if (window) {
	host = window.location.hostname || host;
	protocol = window.location.protocol || protocol;
}

var config = {
    port: port,
    baseUrl : protocol + "//" + host + ":" + port,
    pageTitle: 'React Blog',
    itemsPerPage: 5,
    maxPageButtons: 3
};

module.exports = config;
