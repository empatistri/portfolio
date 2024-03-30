let NavMenu = document.getElementById("nav-menu"),
    ToOpen = document.getElementById("toggle-open"),
    ToClose = document.getElementById("toggle-close");

if ( ToOpen ) {
    ToOpen.addEventListener("click", () => {
        NavMenu.classList.add("show-menu")
    })
}

if ( ToClose ) {
    ToClose.addEventListener("click", () => {
        NavMenu.classList.remove("show-menu")
    })
}