document.addEventListener("DOMContentLoaded", () => {
  // Add any JavaScript you need to enhance the landing page

  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navItems = document.querySelectorAll(".nav__item"); // Pilih semua item menu dengan kelas 'nav-item'

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  /* Menu hidden */
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /* Close menu when a nav item is clicked */
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });

          //eat feature
    let clickCount = 0;

    document.querySelector('.btn-eat').addEventListener('click', function() {
        var beforeEat = document.querySelector('.before-eat');
        var afterEat = document.querySelector('.after-eat');
        var eatSound = document.getElementById('eat-sound');

        if (beforeEat.classList.contains('visible')) {
            beforeEat.classList.remove('visible');
            afterEat.classList.add('visible');
        } else {
            afterEat.classList.remove('visible');
            beforeEat.classList.add('visible');
        }

        // Update click count
        clickCount++;
        document.getElementById('click-counter').textContent = clickCount;

        // Play sound effect
        eatSound.play();
    });


      // song feature
      const audio = document.getElementById('audio');
      const playButton = document.getElementById('playButton');
  
      playButton.addEventListener('click', () => {
          if (audio.paused) {
              audio.play();
              playButton.textContent = 'Pause';
          } else {
              audio.pause();
              playButton.textContent = 'Play';
          }
      });

      audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    songSlider.value = value;
});

songSlider.addEventListener('input', () => {
    const time = (songSlider.value / 100) * audio.duration;
    audio.currentTime = time;
});
  });


