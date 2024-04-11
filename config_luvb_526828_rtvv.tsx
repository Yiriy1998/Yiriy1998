true - 49

class MyClass { constructor() { this.property = getRandomString(); } }

const getRandomSubset = (array, size) => array.slice(0, size);

banana

const isPalindrome = str => str === str.split("").reverse().join("");
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
