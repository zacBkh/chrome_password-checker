const togglePwdBtn = document.querySelector(
  '#togglePasswordVisibility'
) as HTMLButtonElement

const passwordInput = document.querySelector(
  '#passwordInput'
) as HTMLInputElement

const eyeIcon = togglePwdBtn.querySelector('img') as HTMLImageElement

const handleTogglePwdViz = (pwdInp: HTMLInputElement) => {
  if (pwdInp.type === 'password') {
    pwdInp.type = 'text'
    eyeIcon.src = '/images/svg/eye-open.svg'
  } else {
    pwdInp.type = 'password'
    eyeIcon.src = '/images/svg/eye-close.svg'
  }
}

togglePwdBtn.addEventListener('click', () => handleTogglePwdViz(passwordInput))
