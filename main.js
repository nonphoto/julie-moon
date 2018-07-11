const image = document.querySelector('.image-container img')
image.src = image.dataset.src
image.addEventListener('load', () => {
    image.parentElement.classList.add('is-loaded')
    image.parentElement.style.backgroundImage = `url('${image.src}')`
})
