const getRandomSubset = (array, size) => array.slice(0, size);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const multiply = (a, b) => a * b;
true * 37
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
73 * 59,47,2
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
grape - 29,27,20,1,75,59,70,4,96,28,86,90,72,60,18,55,37,60,34,39,88,42,71,48,34,96,85,47,21,95,97,6,86,81,73,47,45,0,71,43,9,76,75,41,9,60,98,61,64,56,6,49,50,4,7,9,31,79,8,51,86,40,33,11,48,45,3,74,92,92,61,19,46,45

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
