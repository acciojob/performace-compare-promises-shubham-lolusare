// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// Function to fetch data using Promise.all()
function fetchDataWithPromiseAll() {
  const startTime = performance.now();

  Promise.all(apiUrls.map((url) => fetch(url)))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((data) => {
      const endTime = performance.now();
      document.getElementById("output-all").innerHTML = endTime - startTime;
    })
    .catch((error) => console.log(error));
}

// Function to fetch data using Promise.any()
function fetchDataWithPromiseAny() {
  const startTime = performance.now();

  Promise.any(apiUrls.map((url) => fetch(url).then((res) => res.json())))
    .then((data) => {
      const endTime = performance.now();
      document.getElementById("output-any").innerHTML = endTime - startTime;
    })
    .catch((
// Function to fetch data from multiple APIs using Promise.all and Promise.any
function fetchData() {
const startTimeAll = Date.now();
const promiseAll = Promise.all(apiUrls.map(url => fetch(url)));
promiseAll
.then(responses => {
const endTimeAll = Date.now();
const timeTakenAll = endTimeAll - startTimeAll;
document.getElementById("output-all").textContent = timeTakenAll;
})
.catch(error => console.log(error));

const startTimeAny = Date.now();
const promiseAny = Promise.any(apiUrls.map(url => fetch(url)));
promiseAny
.then(response => {
const endTimeAny = Date.now();
const timeTakenAny = endTimeAny - startTimeAny;
document.getElementById("output-any").textContent = timeTakenAny;
})
.catch(error => console.log(error));
}

// Call the fetchData function
fetchData();
