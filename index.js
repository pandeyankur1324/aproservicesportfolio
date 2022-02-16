console.log("hello world");
  var outermenu = document.querySelector(".checkbox-toggle");
  console.log(outermenu.checked);
  
  outermenu.addEventListener("checked", ()=>{
    console.log("hello world it's testing time");
    outermenu.classList.toggle("checked");
  })