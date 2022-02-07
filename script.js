let receiveBtn = document.getElementById('questions-submit'),
    sendBtn = document.getElementById('send-submit'),
    modal = document.querySelector('.questions-form'),
    closeBtn = document.getElementById('close-btn'),
    alert = document.getElementsByClassName('alert')[0],
    alertMail =  document.getElementsByClassName('alert-mail')[0],
    alertMessage = document.getElementsByClassName('alert-message')[0];






receiveBtn.addEventListener('click', function () {
        modal.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});                                                                                  

sendBtn.addEventListener('click', function (form) {
    if (document.getElementById("email").value == '') {
        alertMail.style.display = 'block';
        return;
    } else if (document.getElementById("message").value == '') {
        alertMessage.style.display = 'block';
    } else {
        alert.style.display = 'block';
        alertMail.style.display = 'none';
        alertMessage.style.display = 'none';
    }
});


