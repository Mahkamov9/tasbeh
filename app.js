const input = document.getElementById("input");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");

incrementBtn.addEventListener("click" , ()=>{
  input.value++
})

resetBtn.addEventListener("click" , ()=>{
  input.value="0"
})

