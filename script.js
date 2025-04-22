const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

lengthValue.textContent = lengthSlider.value; // Set initial value

lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = this.value;
})
const generatePassword = document.querySelector(".generate-password");
const passwordFields = document.querySelectorAll(".password-field");
const passwordCopy = document.querySelector(".password-copy");

generatePassword.addEventListener('click', function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    const length = lengthSlider.value;

    passwordFields.forEach(field => {
        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }
        field.textContent = password;
    });
});

passwordFields.forEach(field => {
    field.addEventListener('click', function() {
        const password = this.textContent
        navigator.clipboard.writeText(password)
        passwordCopy.textContent = 'Copied!';
        setTimeout(() => {
            passwordCopy.textContent = '';
        }, 1500);
    })
    field.addEventListener('mouseover', function() {
        if (this.textContent != '') {
            passwordCopy.textContent = 'Click to copy'; 
        }       
    });
    field.addEventListener('mouseout', function() {
        passwordCopy.textContent = '';
    });
});


