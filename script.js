//menu setup
const menucontainer = document.createElement("div");
menucontainer.innerHTML = `<style>@keyframes close {
  from {opacity:1}
  to {opacity:0}
}
@keyframes open {
  from {opacity:0}
  to {opacity:1}
}
p {
  color:white;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}
</style><div id="menu" style="border-radius: 0px 0px 0px 40px; position: fixed; top: 0; right: 0; width: 300px; height: 300px; background-color: rgba(30, 30, 30, 1); z-index: 9999;border: 3px solid white; padding: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; display:none; animation-duration:1s;"><p>Extension Menu</p><button>Open in A:B</button></div>`
document.body.appendChild(menucontainer);
const menu = document.getElementById("menu")

var menuOpenState = false;

document.addEventListener('keydown', function (e) {
    //add the below back in to debug
    //console.log(e.key);
    if (e.key === '~' && e.altKey) {
        menuOpenState = !menuOpenState;
    }
  if (menuOpenState){
    menu.style.animationName = "open"
    menu.style.display = "block"


  } else {
    menu.style.animationName = "close"
    menu.style.display = "none"
  }
    console.log(menuOpenState)
});
