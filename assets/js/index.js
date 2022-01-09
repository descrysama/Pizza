window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("scrolladder");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 10)) {
        let navbarFull = document.getElementById('navbarFull')
        navbarFull.classList.add('bg-dark');
    } else {
        navbarFull.classList.remove('bg-dark');
    }
  });