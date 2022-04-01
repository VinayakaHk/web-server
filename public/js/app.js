console.log("Client side javascript file is loaded!");

const weatherform = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#messageOne");
const messageTwo = document.querySelector("#messageTwo");

// messageTwo.textContent = '';

weatherform.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchquery = search.value;
  messageOne.textContent = "Loading...";
  fetch("http://localhost:3000/weather?address=" + searchquery).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = "Error, No Location found";
          console.log(data.error);
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
          console.log(data.location);
          console.log(data.forecast);
        }
      });
    }
  );
});

