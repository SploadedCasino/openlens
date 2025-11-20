document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll('.project-item');
  const body = document.querySelector("body");
  body.classList.remove("opacity-0");
  body.classList.add("opacity-100");
  const photos = document.querySelectorAll("img");
  let delay = 0;
  projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add a class on hover for more complex animations
            item.classList.add('hovered');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
        });
    });
    
  photos.forEach((photo) => {
    setTimeout(() => {
      photo.classList.remove("opacity-0");
      photo.classList.add("opacity-100");
    }, delay);
    delay += 100;
  });
});