window.onload = () => {
  const registrationForm = document.querySelector('form[name=registration]')
  if (!registrationForm) {
    return
  }

  registrationForm.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const formElement = e.target as HTMLFormElement
    const formData = new FormData(formElement)

    const userData = Object.fromEntries(formData.entries())

    console.log('userData', userData)
  })
}
