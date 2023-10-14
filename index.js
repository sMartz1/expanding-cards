let images = document.getElementsByClassName('image')

console.log(images)
console.log(images.length)

for (let e of images) {
  console.log(e)
  e.addEventListener('click', (e) => {
    document.getElementsByClassName('active')[0].classList.remove('active')
    console.log(e)
    e.target.classList.add('active')
  })
}
