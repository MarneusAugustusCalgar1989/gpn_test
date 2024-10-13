export const starBurst = () => {
  const star = document.createElement('div')
  star.innerHTML = '&#9733;'

  for (let i = 0; i < 5; i++) {
    let starNode = star.cloneNode(true)
    starNode.classList.add('stars')
    starNode.classList.add(i)
    starNode.style.animation = `startrek_${i} 0.7s ease-in-out forwards`
    document
      .querySelector('.test_wrapp')
      .insertBefore(starNode, document.querySelector('.left_col'))
  }
  setTimeout(() => {
    document.querySelectorAll('.stars').forEach((el) => el.remove())
  }, 1000)
}