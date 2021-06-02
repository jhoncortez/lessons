/* URL
* @command: run node url_demo.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/url.html
*/

// import module `url`

const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 8 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 8, and uncomment line 9 */

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));