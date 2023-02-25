// Get all the radio buttons with name "patty"
const pattyRadios = document.querySelectorAll('input[name="patty"]');

// Add event listener to each "patty" radio button
pattyRadios.forEach((radio) => {
  radio.addEventListener("click", () => {
    // Find the selected "patty" radio button
    selectedPatty = document.querySelector('input[name="patty"]:checked');
    // Get the value of the selected "patty" radio button
    selectedPattyValue = selectedPatty ? selectedPatty.value : null;
    console.log("Selected patty: " + selectedPattyValue);
  });
});

// Repeat the process for the "sauce" radio buttons
const sauceRadios = document.querySelectorAll('input[name="sauce"]');
sauceRadios.forEach((radio) => {
  radio.addEventListener("click", () => {
    selectedSauce = document.querySelector('input[name="sauce"]:checked');
    selectedSauceValue = selectedSauce ? selectedSauce.value : null;
    console.log("Selected sauce: " + selectedSauceValue);
  });
});
