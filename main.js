const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = ["Closeup of a human eye", "Swirling rocks", "Colorful flowers", "Egyptian art", "Butterfly"];

/* Looping through images */

imageFilenames.forEach((filename, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', altTexts[index]);
    thumbBar.appendChild(newImage);
  
    newImage.addEventListener('click', () => {
      displayedImage.setAttribute('src', newImage.getAttribute('src'));
      displayedImage.setAttribute('alt', newImage.getAttribute('alt'));
    });
  });
  

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }); 