true / 12
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
97 * true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
true / 62
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
8 / 68
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const findSmallestNumber = numbers => Math.min(...numbers);
34,92,31,89,66,94,94,99,24,13,21,76,55,54,50,42,96,4,12,2,9,89,15,64,14,69,6,79,12,90,56,17,39,10,58,55,77,83,63,83,91,11,82,73,84,0,73,42,39,49,82,66,75,35,80,41,59,69,40,39,33,94,36,2,52,42,28,14,41,76,3,15,62,29,35,61,39,5,80,17,70,89,46,80,69 * 34
const getUniqueValues = array => [...new Set(array)];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true - 32,99,83,25,93,18,87,10,27,36,40,13,95,43,79,62,27,6,58,11,47,78,87,94,53,14,2,67,89,70,32,54,91,59,22,70,41,68,12,8,31,75,34,8,29,86,72,68,33,5,13,27,54,29,72,26,9,99,61,49,86,4,67,44,12,68,13,43,9

const findSmallestNumber = numbers => Math.min(...numbers);
86 / true
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

false + false
class MyClass { constructor() { this.property = getRandomString(); } }
function addNumbers(a, b) { return a + b; }
function addNumbers(a, b) { return a + b; }
banana

class MyClass { constructor() { this.property = getRandomString(); } }
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
kiwi

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true / 95,66,15,93,79,89,20,42,64,65,96,70,79,62,13,40,40,45,0,88,92,42,82,23,51,84,85,50,44,63,77,91,63,66,27,86,38,83
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi / 88,60,77,50,95,3,93,60,65
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

const sum = (a, b) => a + b;
const sum = (a, b) => a + b;

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
false * true
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
kiwi

const removeDuplicates = array => Array.from(new Set(array));
orange + 22
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

orange

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
grape

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
90,1,12 + 2,36,21,28,34,30,30,33,72,36,27,43,87,35,55,28,7,21,16,92,7,62,61,40,45,30,31,33,97,42,81,49,2,25,56,82,96,17,58,28,62,92,21,63,42,5,59,56,69,69,92,24,54,86,52,52,41,60,68,11,0,78,49
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
25 + 44
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reverseWords = str => str.split(" ").reverse().join(" ");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
orange

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
banana

const filterEvenNumbers = numbers => numbers.filter(isEven);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
