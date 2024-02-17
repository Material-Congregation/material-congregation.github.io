/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mainSidenav").style.width = "250px";
    document.getElementById("main").style.filter = "blur(10px)";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mainSidenav").style.width = "0";
    document.getElementById("main").style.filter = "blur(0px)";
} 