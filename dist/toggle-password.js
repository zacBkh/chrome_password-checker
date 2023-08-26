const togglePwdBtn = document.querySelector('#togglePasswordVisibility');
const passwordInput = document.querySelector('#passwordInput');
const eyeIcon = togglePwdBtn.querySelector('img');
const handleTogglePwdViz = (pwdInp) => {
    if (pwdInp.type === 'password') {
        pwdInp.type = 'text';
        eyeIcon.src = '/images/svg/eye-open.svg';
    }
    else {
        pwdInp.type = 'password';
        eyeIcon.src = '/images/svg/eye-close.svg';
    }
};
togglePwdBtn.addEventListener('click', () => handleTogglePwdViz(passwordInput));
