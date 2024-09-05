const resultShow = document.querySelector(".result .resultShow");
const resultBtn = document.querySelector(".btn button");

resultBtn.addEventListener("click", () => {
  const userInput = document.querySelector(".degree #degree").value;
  const userType = document.querySelector(".fahre #type").value;

  if (userInput.length <= 0) {
    resultShow.innerHTML = "Enter The valid Input ";
    resultShow.style.color = "red";
  } else {
    if (userType == "fahrenheit") {
      let fahrenheit = ((userInput - 32) * 5) / 9;
      resultShow.innerHTML = fahrenheit.toFixed(4);
      resultShow.style.color = "black";
    } else if (userType == "celsius") {
      let celsius = (userInput * 9) / 5 + 32;
      resultShow.innerHTML = celsius.toFixed(4);
      resultShow.style.color = "black";
    }
  }
});

