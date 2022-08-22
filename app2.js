var url = require("url")

//url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
// tham số được truyền vào là urlString

//https://nodejs.org/docs/latest-v15.x/api/url.htm

var urlInfo = url.parse("https://nodejs.org/docs/latest-v15.x/api/url.htm");

console.log(urlInfo);