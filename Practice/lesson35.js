var fetchData = function (url, method) {
    console.log('Fetched');
};
var reqOprtions = {
    url: 'https://someurl.com',
    method: 'GET'
};
fetchData('qqq', 'GET');
// fetchData(reqOprtions.url, reqOprtions.method as "GET");
fetchData(reqOprtions.url, reqOprtions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber);
