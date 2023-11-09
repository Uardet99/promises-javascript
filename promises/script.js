const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Resolving an asynchronous request!"); // Resuelve
    } else {
      reject("Rejecting an asynchronous request!"); // Rechaza
    }
  }, 2000);
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  });
