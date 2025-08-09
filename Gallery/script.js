const grid = document.querySelector('.grid')
const imagesCount = 16
const wrapper = document.querySelector('.wrapper')
let bigImage
let boolVal = false

for (let i = 0; i < imagesCount; i++) {
  const div = document.createElement('div')
  div.classList.add('img-wrapper')

  const img = document.createElement('img')
  img.classList.add('grid-img')

  img.src = `images/image-${i + 1}.jpg`
  div.append(img)
  grid.append(div)

  img.addEventListener('click', (e) => {
    bigImage = document.createElement('img')
    bigImage.classList.add('big-img')
    bigImage.src = e.target.src
    wrapper.append(bigImage)
    grid.classList.add('change')
  })
}