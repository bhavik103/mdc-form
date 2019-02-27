// Instantiate MDC Drawer
mdc.autoInit();
 var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
 const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
 const snackbar = new mdc.snackbar.MDCSnackbar(document.querySelector('.mdc-snackbar'));
 
 topAppBar.setScrollTarget(document.getElementById('main-content'));
 topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
$('#signup').on('click',function(evt){
	dialog2.open();
});

//Menu ******************************
const m = window.mdc.menu;
const btn = document.querySelector('.moreOption');

const menu = new m.MDCMenu(document.querySelector('.mdc-menu'));
menu.setAnchorCorner(m.Corner.TOP_RIGHT)
menu.setAnchorElement(document.querySelector('.mdc-button'));

btn.addEventListener('click', () => {
	menu.open = !menu.open;
});

// function myFunction() {
//     var x = document.getElementById("snackbar")
//     x.className = "show";
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
// }


$('#register').on('click',function(){
	snackbar.open();
});
