var correctPasscode = "23/01"; // Change this to your desired passcode

window.onload = function() {
    // Show the passcode popup when the page loads
    document.getElementById("passcodePopup").style.display = "flex";
};

function checkPasscode() {
    var inputPasscode = document.getElementById("passcodeInput").value;
    if (inputPasscode === correctPasscode) {
        // Hide the passcode popup
        document.getElementById("passcodePopup").style.display = "none";
        // Show the main content
        document.getElementById("mainContent").style.display = "block";
    } else {
        alert("Incorrect passcode. Please try again.");
        document.getElementById("passcodeInput").value = ""; // Clear the input field
    }
}

//below is popup actions
document.getElementById("yesBtn").addEventListener("click", function() {
    showPopup("Yay! ❤️, I knew you love me", "./taylor_love.gif"); // Replace with your actual GIF URL for "Yes"
});

document.getElementById("noBtn").addEventListener("click", function() {
    increaseYesButtonSize();
    showPopup("Girl, i know that a mistake, try again", "./taylor_huh.gif"); // Replace with your actual GIF URL for "No"
});

function increaseYesButtonSize() {
    var yesButton = document.getElementById("yesBtn");
    yesButton.style.transform = "scale(1.2)"; // Increase size by 20%
    yesButton.style.transition = "transform 0.3s ease"; // Smooth transition
}

function showPopup(message, giftUrl) {
    var popupText = document.getElementById("popupText");
    var giftImage = document.getElementById("giftImage");

    // Check if the gift image element exists, create if not
    if (!giftImage) {
        giftImage = document.createElement("img");
        giftImage.id = "giftImage";
        giftImage.className = "gift-image";
        popupText.parentNode.insertBefore(giftImage, popupText);
    }

    // Update the gift image and text
    giftImage.src = giftUrl;
    popupText.textContent = message;

    // Display the popup
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
