var p1 = new Promise((resolve, reject) => {
  resolve("successg");
});

p1.then(
  () => {
    console.log("success");
  },
  () => {
    console.log("failure");
  }
);
