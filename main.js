const image = document.getElementsByTagName('img')[0]
const length = 10
const indices = [...new Array(length).keys()].map((index) => index + Math.random() * 0.5)

function update() {
  const time = performance.now() / 5000

  image.style.clipPath = `polygon(${indices.map((index) => {
    const angle = Math.PI * 2 / 10 * (index + time)
    return `${Math.cos(angle) * 50 + 50}% ${Math.sin(angle) * 50 + 50}%`
  }).join(', ')})`

  requestAnimationFrame(update)
}

requestAnimationFrame(update)
