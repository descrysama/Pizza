window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("scrolladder");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 10)) {
        let navbarFull = document.getElementById('navbarFull')
        navbarFull.classList.add('bg-dark');
    } else {
        navbarFull.classList.remove('bg-dark');
    }
  });

  window.addEventListener("resize", function() {
    var elementTarget2 = document.getElementById("ulnav");
    var width = window.innerWidth;
    if ( width < 992) {
        elementTarget2.classList.remove('align-items-center');
    } else {
        elementTarget2.classList.add('align-items-center');
    }
  });