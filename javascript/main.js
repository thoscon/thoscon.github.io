let burgerBtn = document.querySelector(".burger-menu-button");
let burgerMenu = document.querySelector(".burger-menu");

let isBurgerOpen = false;



// add a click event listener to the div
burgerBtn.addEventListener('click', function() {
    // specify the action to take when the div is clicked
    if (!isBurgerOpen){
        console.log('showing burger');
        burgerMenu.style.display = "block";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen){
        console.log('closing burger');
        burgerMenu.style.display = "none";
        isBurgerOpen = false;
    }
  });

  // add a click event listener to the div
  burgerMenu.addEventListener('click', function() {
    // specify the action to take when the div is clicked
    if (!isBurgerOpen){
        console.log('showing burger');
        burgerMenu.style.display = "block";
        isBurgerOpen = true;
    }
    else if (isBurgerOpen){
        console.log('closing burger');
        burgerMenu.style.display = "none";
        isBurgerOpen = false;
    }
  });