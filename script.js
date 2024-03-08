//menu setup
const menucontainer = document.createElement("div");
menucontainer.innerHTML = `<style>
@keyframes close {
  from {opacity:1}
  to {opacity:0}
}
@keyframes open {
  from {opacity:0}
  to {opacity:1}
}
p.sgm {
  color:white;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
.sgm#sgmexec::-webkit-scrollbar {
  display: none;
}
.sgm#sgmexec {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
textarea.sgm {
  outline:none;
  resize:none;
  border: 3px solid white; padding: 10px;
  background-color: rgb(50, 50, 50);
  color: white;
  font-size:10pt;
  height:20pt;
  border-radius:25px;
  margin: 0;
}
button.sgm {
  border: 3px solid white; padding: 10px;
  background-color: rgb(50, 50, 50);
  color: white;
  cursor: pointer;
  border-radius:25px;
  margin: 0;
}
.sgmhorizcenter {
  position: absolute;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.sgmverticenter {
  position: absolute;
  top: 50%;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
button.sgm:hover {
  background-color: rgb(60, 60, 60)
}
button.sgm:active {
  background-color: rgb(20, 20, 20)
}
</style><div class="sgm" id="menu" style="border-radius: 0px 0px 0px 40px; position: fixed; top: 0; right: 0; width: 300px; height: 100%; background-color: rgba(30, 30, 30, 1); z-index: 9999;border: 3px solid white; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; display:none; animation-duration:0.2s;"><br><p class="sgm" style="font-size:20pt">SGMenu</p><button id="sgmab" class="sgm sgmhorizcenter">Open in A:B</button><br><br><p class="sgm">Execute Javascript</p><textarea id="sgmexec" class="sgm" style=""></textarea><button class="sgm" style="" id="sgmexecbutton" onclick="eval(sgm_exec.value)">Execute</button></div>`
document.body.appendChild(menucontainer);
const sgm_menu = document.getElementById("menu")
const sgm_execbttn = document.getElementById("sgmexecbutton")
const sgm_exec = document.getElementById("sgmexec")

var menuOpenState = false;

document.addEventListener('keydown', function (e) {
    //add the below back in to debug
    //console.log(e.key);
    if (e.key === '~' && e.altKey) {
        menuOpenState = !menuOpenState;
        setTimeout(function(){if(!menuOpenState){sgm_menu.style.display = "none"}}, 200)
    }
  if (menuOpenState){
    sgm_menu.style.animationName = "open"
    sgm_menu.style.display = "block"


  } else {
    sgm_menu.style.animationName = "close"
    
  }
    console.log(menuOpenState)
});
function findAllVariables() { 
      for (let variable in document) { 
         if (window.hasOwnProperty(variable) && !(variable.slice(0, 1) == "on")){
             console.log(variable); 
          } 
     } 
}
findAllVariables()
