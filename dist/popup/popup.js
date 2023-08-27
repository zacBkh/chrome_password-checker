const resultField = document.querySelector('#result');
const progressBarFill = document.querySelector('#progressBarFill');
const evaluatePasswordStrength = (pwd) => {
    if (!pwd.length) {
        return 0;
    }
    const lengthScore = Math.min(1, pwd.length / 12);
    const hasDigits = /[0-9]/.test(pwd) ? 1 : 0;
    const hasLetters = /[a-zA-Z]/.test(pwd) ? 1 : 0;
    const hasSpecialChars = /[^a-zA-Z0-9]/.test(pwd) ? 1 : 0;
    const complexityScore = hasDigits + hasLetters + hasSpecialChars;
    const complexityWeight = 0.5;
    const repeatedChars = (pwd.length - new Set(pwd).size) / pwd.length;
    const penalty = Math.min(1, repeatedChars * 2);
    let strength = (lengthScore + complexityScore * complexityWeight - penalty) /
        (1 + complexityWeight);
    console.log('bef strength', strength);
    if (pwd.length < 6) {
        strength -= 0.3;
        if (strength <= 0) {
            strength = 0.05;
        }
    }
    console.log('strength', strength);
    return strength;
};
const password = passwordInput.value;
const updateProgressBar = () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);
    console.log('strength prog', strength);
    if (strength >= 1) {
        progressBarFill.style.width = `${1 * 100}%`;
    }
    else {
        progressBarFill.style.width = `${strength * 100}%`;
    }
    if (strength >= 0.7) {
        progressBarFill.style.backgroundColor = 'green';
    }
    else if (strength >= 0.4) {
        progressBarFill.style.backgroundColor = 'orange';
    }
    else {
        progressBarFill.style.backgroundColor = 'red';
    }
};
const checkPwdStregnth = () => {
    const password = passwordInput.value;
    const strength = evaluatePasswordStrength(password);
    let result = '';
    if (strength >= 0.7) {
        result = 'Strong';
    }
    else if (strength >= 0.4) {
        result = 'Average';
    }
    else {
        result = 'Weak';
    }
    resultField.textContent = `${result}`;
    updateProgressBar();
};
passwordInput.addEventListener('input', checkPwdStregnth);
