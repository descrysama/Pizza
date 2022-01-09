// let navbarNavSelect = document.getElementById('navbarFull');
// let SectionSelect = document.getElementById('home')

// if (windows.scrollY > (navbarNavSelect.offsetTop + navbarNavSelect.offsetHeight)) {
//     navbarNavSelect.classList.add('bg-dark');
// }


window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("scrolladder");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 1)) {
        let navbarFull = document.getElementById('navbarFull')
        navbarFull.classList.add('bg-dark');
    } else {
        navbarFull.classList.remove('bg-dark');
    }
  });