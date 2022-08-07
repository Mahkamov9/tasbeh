const input = document.getElementById("input");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const colorBtn = document.getElementById("color-btn");

incrementBtn.addEventListener("click" , ()=>{
  input.value++
})

resetBtn.addEventListener("click" , ()=>{
  input.value="0"
  input.style.backgroundColor= "green"

})

colorBtn.addEventListener("click" , ()=>{
  input.style.backgroundColor= "red"
})


