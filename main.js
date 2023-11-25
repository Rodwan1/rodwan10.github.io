const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altTexts = ["Closeup of an eye", "Swirling rocks", "Colorful flowers", "Egyptian art", "Butterfly"];

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

imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`);
    newImage.setAttribute('alt', `Image ${filename}`);
    thumbBar.appendChild(newImage);

    
  });

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
