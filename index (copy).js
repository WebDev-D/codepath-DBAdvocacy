document.addEventListener('DOMContentLoaded', function () {
  const signNowButton = document.getElementById('sign-now-button');

  let themeButton = document.getElementById("theme-button");

  
  // TODO: Remove the click event listener that calls addSignature()

  // TODO: Complete validation form

  let count = 3;

  const addSignature = () => {
    let petitionInputs = document.getElementById("sign-petition").elements;

    const oldCounter = document.getElementById("counter");
    if (oldCounter) {
      oldCounter.remove();
    }

    count = count + 1;

    const newCounter = document.createElement("p");
    newCounter.id = "counter";
    newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

    const signaturesDiv = document.querySelector(".signatures");
    signaturesDiv.appendChild(newCounter);
  }

  const validateForm = () => {
    let containsErrors = false;
    let petitionInputs = document.getElementById("sign-petition").elements;

    let person = {
      name: petitionInputs[0].value,
      hometown: petitionInputs[1].value
      // Add more properties as needed
    };

    setTimeout(() => {
      scaleImage();
    }, 500);

    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }

    if (!containsErrors) {
      addSignature(person);
      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = "";
      }
      toggleModal(person)
    }
  }

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  // Add a click event listener to the button
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);

  let scaleFactor = 1;

  const toggleModal = (person) => {
    // Select modal and modal content
    const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('modal-text-container');

    // Set the display style property of the entire modal to flex
    modal.style.display = 'flex';

    // Display a nice thank you message to the user
    modalContent.textContent = `Thank you so much ${person.name}!`;

    // Use setTimeout to hide the modal after a few seconds 
    setTimeout(() => {
      modal.style.display = 'none';
    }, 4000);
  };

 

  // Create a new function called scaleImage that takes no arguments
  const scaleImage = () => {
    const modalImage = document.getElementById('modal-img');
    // Check if the scaleFactor is 1
    if (scaleFactor === 1) {
      // If it is, set it to 0.8
      scaleFactor = 0.8;
    } else {
      // If not, set it back to 1
      scaleFactor = 1;
    }

    // Apply the scale transformation to the image
    modalImage.style.transform = `scale(${scaleFactor})`;

    setTimeout(scaleImage, 500);
  };

  // Call scaleImage to start the image animation
  scaleImage();
  
  // Add a click event listener to the button
  darkModeToggle.addEventListener('click', toggleDarkMode);

  // TODO: Remove the click event listener that calls addSignature()

  // TODO: Complete validation form

  signNowButton.addEventListener('click', validateForm);
});
