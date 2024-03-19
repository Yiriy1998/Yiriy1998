grape


const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
59,42,89,58,91,30,34,26,63,18 - false
function addNumbers(a, b) { return a + b; }
58,94,20,55,91,21,87,22,16,94,84,87,71,95,90,52,43,30,96,32,8,13,75,27,5,17,49,50,5,78,50,34,25,10,24,14,99,2,30,53,90,85,53,22,79,42,33,73,87,25,99,86,95,69,6,26,39,66 / false

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
false + 42
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const removeDuplicates = array => Array.from(new Set(array));

91 + true
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getRandomIndex = array => Math.floor(Math.random() * array.length);
