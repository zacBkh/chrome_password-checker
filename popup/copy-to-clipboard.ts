const copyBtn = document.querySelector('#copyBtn')

const copyContent = async () => {
  console.log('CLICKED')
  try {
    await navigator.clipboard.writeText(passwordInput.value)
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

copyBtn.addEventListener('click', copyContent)
