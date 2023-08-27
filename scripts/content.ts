// onFocus
const handleFocusInput = async (event: FocusEvent) => {
  const element = event.target as HTMLElement

  if (element.tagName !== 'INPUT') {
    return
  }
  const target = event.target as HTMLInputElement

  const pwdCheckrIcon = document.querySelector('#password-checker-icon')
  if (pwdCheckrIcon) {
    return
  }

  if (target.type === 'password') {
    console.log('User focused on a password input field.')
    const imgObject = await chrome.runtime.sendMessage({
      action: 'getImageURL',
    })
    const iconInput = document.createElement('div')
    iconInput.setAttribute('id', 'password-checker-icon')

    iconInput.style.cssText = `
    margin-top: 15px;
    height: 20px;
    width: 20px;
    top: 50%;
    right: 3px;
    transform: translateY(-50%);
    background: url(${imgObject.imageURL}) no-repeat;
    cursor: pointer;`

    element.insertAdjacentElement('afterend', iconInput)

    iconInput.addEventListener('click', function () {
      console.log('Icon clicked!')

      // Create iframe and insert
      const dialogElement = document.createElement('iframe')
      dialogElement.setAttribute('id', 'testestest')

      dialogElement.src = chrome.runtime.getURL('dialog.html')

      document
        .querySelector('#password-checker-icon')
        .insertAdjacentElement('afterend', dialogElement)
      document.body.appendChild(dialogElement)
    })
  }
}

// onBlur
const handleBlurInput = (event: FocusEvent) => {
  const element = event.target as HTMLElement
  const icon = document.querySelector('#password-checker-icon')

  if (element.tagName !== 'INPUT') {
    return
  }

  if (icon) {
    icon.remove()
  }

  console.log('event', event)
  console.log('event', element.tagName)
}

document.addEventListener('focusin', handleFocusInput)
// document.addEventListener('focusout', handleBlurInput)
