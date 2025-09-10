document.getElementById("EligibilityBtn").addEventListener("click", () => {
  //select where to display the results
  const results = document.getElementById("Result");
  //get the value from the input
  const ageValue = parseInt(document.getElementById("userAge").value);
  results.innerHTML = "";
  if (isNaN(ageValue) || ageValue < 0) {
    results.innerHTML = "enter valid age";
    return;
  }
  if (ageValue >= 18) {
    results.innerHTML += "you are eligible to vote <br>";
  } else {
    results.innerHTML += "you are not eligible to vote <br>";
  }

  if (ageValue >= 21) {
    results.innerHTML += "you are eligible to smoke <br>";
  } else {
    results.innerHTML += "not eligible to smoke <br>";
  }

  if (ageValue >= 16) {
    results.innerHTML += "you are eligible to drive <br>";
  } else {
    results.innerHTML += "you are not eligible to drive <br>";
  }
});
