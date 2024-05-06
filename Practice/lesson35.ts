const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log('Fetched');
    
}

const reqOprtions = {
    url: 'https://someurl.com',
    method: 'GET'
}

fetchData('qqq', 'GET');
// fetchData(reqOprtions.url, reqOprtions.method as "GET");

fetchData(reqOprtions.url, <"GET">reqOprtions.method);

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = +input.value;
console.log(someNumber);
