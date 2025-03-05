function changeBackgroundColor() {
  const colors = [
    "#D3ECA7",
    "#A7D7C5",
    "#A0C4FF",
    "#FFDEB4",
    "#F9C6C9",
    "#C4B0FF",
    "#3752FD",
    "#077CCC",
    "#09A1E5",
    "#49B296",
    "#622876",
    "#89C247",
    "#962B7C",
    "#F4F7FF",
    "#00303C",
    "#1E1E1E",
    "#CB2E81",
    "#FF3187",
    "#FF5178",
    "#FF9259",
    "#FFB24A",
    "#FFD23B",
    "#FFFFFF",
  ];
  document.body.style.backgroundColor =
    colors[Math.trunc(Math.random() * colors.length)];
}

 function showAlert(button) {
   alert("are you sure?");

   let cardBody = button.closest(".card-body");

   let commentText = cardBody.querySelector("h3").innerText;
   let textarea = document.getElementById("inputText");
   textarea.value += (textarea.value ? "\n" : "") + commentText;
   let spannumber = document.getElementById("numberIN");
   let currentNmber = parseInt(spannumber.innerText, 10);
   if(currentNmber > 0){
    spannumber.innerText=currentNmber +1;
   }
   let numberOut = document.getElementById("numberOut");
   let currentNumber = parseInt(numberOut.innerText, 10);

   if (currentNumber > 0) {
     numberOut.innerText = currentNumber - 1;
     if (currentNumber - 1 === 0) {
       alert("All tasks are completed!");
     }
   }
     button.disabled = true;
     button.innerText = "Completed";
 }
document.getElementById("btnClearHistory").addEventListener('click', function(){
  document.getElementById('inputText').value = "";
});

let today = new Date().toISOString().split("T")[0];
document.getElementById("todayDate").textContent = today;