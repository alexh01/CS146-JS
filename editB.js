function change() {
   var whatHaveIDone = prompt("GO CRAY-Z", document.body.innerHTML);
   if (whatHaveIDone != null) {
    document.body.innerHTML=whatHaveIDone;
	}
}
window.onload = () => {
var newB = document.createElement("input");
newB.setAttribute("type","button");
newB.setAttribute("onclick","change()");
newB.value="edit";
document.getElementsByTagName("h1")[0].appendChild(newB);
};
