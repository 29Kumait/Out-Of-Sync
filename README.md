# Out OF SYNc

```├── README.md ├── SECURITY.md ├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── app.js
│   ├── index.html
│   ├── media
│   │   ├── Async.png
│   │   ├── Fet.png
│   │   ├── Fetc.png
│   │   ├── W.ico
│   │   ├── X.ico
│   │   ├── against.png
│   │   ├── apis.ico
│   │   ├── art.ico
│   │   ├── data.ico
│   │   ├── fetch.ico
│   │   ├── fetch.png
│   │   ├── front.png
│   │   ├── home.ico
│   │   ├── icon.ico
│   │   ├── img.png
│   │   ├── img1.png
│   │   ├── items.ico
│   │   ├── mes.png
│   │   ├── pro.WEBP
│   │   ├── rain.WEBP
│   │   ├── side.ico
│   │   ├── sidebar.ico
│   │   └── web.png
│   └── style.css
├── server.js
├── src
│   ├── api
│   │   ├── art.js
│   │   ├── fileAPI.js
│   │   ├── newsAPI.js
│   │   ├── rijksmuseumAPI.js
│   │   ├── todoModified.js
│   │   ├── weatherAPI.js
│   │   └── weatherLonLatAPI.js
│   ├── constants.js
│   ├── pages
│   │   ├── itemsSidebarPage.js
│   │   ├── navPage.js
│   │   ├── portraitPage.js
│   │   ├── sidebarPage.js
│   │   ├── todoPage.js
│   │   └── weatherPage.js
│   └── views
│       ├── footerView.js
│       ├── itemsSidebarView.js
│       ├── mainView.js
│       ├── navView.js
│       └── sidebarView.js
└── updatePaths.js
```

## Description

"Out Of Sync" is a single-page application web into open APIs. The interface is clean and straightforward, sporting a sidebar sidebar with links to four dynamic pages. Each page provides simple experiment with API task based.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- JavaScript
- npm
- JSON, Rijksmuseum API

## Features

- A Single-page application structure. (SPA)
- Dynamic rendering of four distinct pages, each with its own API interaction
- Error-handling, Data-fetching, API's-interactions.

## Installation

To get started, you'll need to install some packages. Run the following command:

\`\`\`bash
npm install
\`\`\`

## Usage

Navigate through the sidebar to access four different pages. Each page stands for different APIs interaction. providing a practical way to get hands-on experience with simple API tasks.

## Contributing

- Teachings and educational resources: [HackYourFuture](https://github.com/HackYourFuture)
- open AI

## License

License information is not yet available.

## 🌟 EXTRA

![image](https://cdn-images-1.medium.com/max/1600/1*rRoLpv-Zrmpa-srNhwlbvA.gif)

---

# Asynchronous JavaScript Concepts

---

## Callbacks

Callbacks are functions passed as arguments to other functions. They are executed at a later time. However, using too many callbacks can lead to "Callback Hell" or "Pyramid of Doom," making the code hard to read and manage.

```javascript
function fetchData(callback) {
  // Simulating async operation
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((result) => {
  console.log(result); // Outputs "Data fetched"
});
```

## Promises

![image](https://github.com/29Kumait/bug-free.md/assets/137179507/46b0e092-c447-4bc7-88e2-2c063c777140)
Promises represent the eventual completion or failure of an asynchronous operation. They make the code more readable and manageable.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData().then((result) => {
  console.log(result); // Outputs "Data fetched"
});
```

## Promise Chaining

<!-- markdownlint-disable-next-line MD033 -->
<img width="135" alt="IMG_6324" src="https://github.com/29Kumait/bug-free.md/assets/137179507/fe657dbe-2af3-437e-8b82-a560008b3739">

You can chain `.then()` methods to perform multiple asynchronous operations sequentially.

```javascript
fetchData()
  .then((result) => {
    console.log(result);
    return "New data";
  })
  .then((newResult) => {
    console.log(newResult); // Outputs "New data"
  });
```

## `.finally()`

The `.finally()` method is executed when the Promise is settled, regardless of whether it was resolved or rejected. It's usually used for cleanup actions.

```javascript
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });
```

---

## Event Loop

![image](https://miro.medium.com/v2/resize:fit:1400/1*TozSrkk92l8ho6d8JxqF_w.gif)

The Event Loop allows JavaScript to perform non-blocking operations even though it's single-threaded. It works as follows:

1. Run the initial script (synchronous code).
2. Execute asynchronous tasks, placing their callbacks in a message queue.
3. Once the main thread is free, the event loop moves the first message from the queue to be executed.
4. This continues as long as there are messages in the queue or tasks to process.

---

## Callback Hell (or Pyramid of Doom)

Callback Hell occurs when multiple callbacks are nested, leading to code that is hard to read and maintain.

### Example

```javascript
doSomething((result1) => {
  doSomethingElse(result1, (result2) => {
    anotherFunction(result2, (result3) => {
      yetAnotherFunction(result3, (result4) => {
        // so on...
      });
    });
  });
});
```

### Solutions

1. **Modularization**: Break out nested callbacks into named functions.
2. **Promises**: Use Promises to simplify asynchronous operations.
3. **Async/Await**: Makes asynchronous code look and behave like synchronous code

## Example to Avoid Callback Hell:

### 1. Modularization

Break out nested callbacks into separate named functions to improve readability.

#### Example 1

```javascript
function handleResult4(result4) {
  console.log("Result 4:", result4);
}

function handleResult3(result3) {
  yetAnotherFunction(result3, handleResult4);
}

function handleResult2(result2) {
  anotherFunction(result2, handleResult3);
}

function handleResult1(result1) {
  doSomethingElse(result1, handleResult2);
}

doSomething(handleResult1);
```

### 2. Promises

Use Promises to make the code more manageable and easier to read.

## Event Loop overview

![image](https://miro.medium.com/v2/resize:fit:1400/1*TozSrkk92l8ho6d8JxqF_w.gif)

The Event Loop allows JavaScript to perform non-blocking operations even though it's single-threaded. It works as follows:

1. Run the initial script (synchronous code).
2. Execute asynchronous tasks, placing their callbacks in a message queue.
3. Once the main thread is free, the event loop moves the first message from the queue to be executed.
4. This continues as long as there are messages in the queue or tasks to process.

## Callback Hell overview

Callback Hell occurs when multiple callbacks are nested, leading to code that is hard to read and maintain.

### Example 2

````javascript
async function main() {
  try {
    const result1 = await doSomething();
    const result2 = await doSomethingElse(result1);
    const result3 = await anotherFunction(result2);
    const result4 = await yetAnotherFunction(result3);
    console.log('Result 4:', result4);
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

main();
### Solutions

1. **Modularization**: Break out nested callbacks into named functions.
2. **Promises**: Use Promises to simplify asynchronous operations.
3. **Async/Await**: Makes asynchronous code look and behave like synchronous code.

## Example to Avoid Callback Hell:

---

### 1. Modularization

Break out nested callbacks into separate named functions to improve readability.

#### Example

This syntactic sugar makes working with Promises more straightforward. An `async` function implicitly returns a Promise. Inside an `async` function, you can use `await` to pause the execution until a Promise is resolved or rejected.

  rewriting the `fetchData` example:

```javascript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
}

async function main() {
  try {
    const result = await fetchData();
    console.log(result); // Outputs "Data fetched"
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

main();
````

In this example, `main` is an `async` function. Inside it, we `await` the resolution of `fetchData`. If it resolves, the result is stored in the variable `result`. If it rejects, the code in the `catch` block runs.

---

## `async/await` with `.finally()`

Can also use `.finally()` with `async/await` to perform some cleanup actions, similar to how you would with Promises:

```javascript
async function main() {
  try {
    const result = await fetchData();
    console.log(result); // Outputs "Data fetched"
  } catch (error) {
    console.log("An error occurred:", error);
  } finally {
    console.log("Done");
  }
}
```

![image](https://1.bp.blogspot.com/-4Q8cuX8et0w/XlPs59l0LrI/AAAAAAAAU-Q/A2NioJfXQY0pavFPS9INBPPv70xxU5zPACLcBGAsYHQ/s1600/api-c99e353f761d318322c853c03ebcf21b.gif)

## Using `fetch` with `async/await` for API Calls:

```javascript
async function fetchData() {
  //jsonplaceholder.typicode.com is just a free online REST API for testing.
  //This API doesn’t require an API key for access; it’s open for public use.
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
```

### Version with API Key:

```javascript
async function fetchDataWithApiKey() {
  const response = await fetch("https://...", {
    headers: {
      // Bearer:  is one of authentication's types.
      Authorization: `Bearer ${ApiKey}`,
    },
  });
  const data = await response.json();
  console.log(data);
}

fetchDataWithApiKey();
```

### Version with `try/catch` blocks:

```javascript
async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error);
  }
}

fetchDataWithErrorHandling();
```

### Version with API Key (with `try/catch`)

```javascript
async function fetchDataWithApiKeyAndErrorHandling() {
  try {
    const response = await fetch("https://someapi.com/data", {
      headers: {
        Authorization: `Bearer ${ApiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed:", error);
  }
}

fetchDataWithApiKeyAndErrorHandling();
```

```diff
!  ©️ AI Generated/Colected for the most part. .

```
