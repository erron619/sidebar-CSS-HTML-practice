let menuOpenerState = false;
const menuOpener = document.querySelector(".sidebar-opener");
const sidebar = document.querySelector(".sidebar");
menuOpener.addEventListener("click", function () {
    if (!menuOpenerState) {
        sidebar.classList.add("active");
    }
    else {
        sidebar.classList.remove("active");
    }
    menuOpenerState = !menuOpenerState;
    // console.log(menuOpenerState);
})