function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('hidden');
}

function hideSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.classList.add('hidden');
}

var submitButton = document.getElementById('submitButton');
if (submitButton) {
    submitButton.addEventListener('click', function(){
        showSuccessMessage();
    });
}

var feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event){
        event.preventDefault();
        showSuccessMessage();
    });
}

var addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        showSuccessMessage();
    });
});

var okButton = document.getElementById('closeButton');
okButton.addEventListener('click', function() {
    hideSuccessMessage();
});

function goBack() {
    window.history.back();
}

var backButton = document.getElementById('backButton');
if (backButton) {
    backButton.addEventListener('click', function() {
        goBack();
    });
}
