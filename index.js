import { startData, restults } from './gpn_test.js'
import testData from './gpn_test.js'

const startTestButton = document.querySelector('.start_test_button')

const cardCounter = document.querySelector('.font_counter')
const imgWrapper = document.querySelector('.img_wrapper')
const cardDescription = document.querySelector('.card_description')
const questionText = document.querySelector('.question_text')
const answerText = document.createElement('div')
answerText.classList.add('answer_text')

const nexQuestionButton = document.querySelector('.next_question')

let counter = 0
let score = 0
let testFinished = false

const startScreen = () => {
  //Происходит одевание
  imgWrapper.querySelector('img').src = startData.startImage

  let manHat = document.createElement('img')
  manHat.classList.add('man_hat')
  manHat.src = startData.wears[0]
  manHat.style.position = 'absolute'
  imgWrapper.appendChild(manHat)

  let manGlasses = document.createElement('img')
  manGlasses.classList.add('man_glasses')
  manGlasses.src = startData.wears[3]
  manGlasses.style.position = 'absolute'
  imgWrapper.appendChild(manGlasses)

  let manShoes = document.createElement('img')
  manShoes.classList.add('man_shoes')
  manShoes.src = startData.wears[1]
  manShoes.style.position = 'absolute'
  imgWrapper.appendChild(manShoes)

  let manKurtka = document.createElement('img')
  manKurtka.classList.add('man_kurtka')
  manKurtka.src = startData.wears[2]
  manKurtka.style.position = 'absolute'
  imgWrapper.appendChild(manKurtka)

  document.querySelector('.font_counter').textContent = startData.testHeader
  cardDescription.textContent = startData.testDescription
}

startTestButton.onclick = () => {
  console.log('Test Started')
  startTestButton.style.display = 'none'

  cardDescription.style.display = 'flex'
  document.querySelector('.button_wrapper').style.display = 'block'
  nexQuestionButton.style.display = 'flex'

  document.querySelector('.man_hat').remove()
  document.querySelector('.man_glasses').remove()
  document.querySelector('.man_shoes').remove()
  document.querySelector('.man_kurtka').remove()

  createPage(counter)
}

nexQuestionButton.onclick = () => {
  if (nexQuestionButton.classList.value.includes('enabled')) {
    if (cardDescription.classList.value.includes('correct_card_description')) {
      cardDescription.classList.remove('correct_card_description')
    }
    if (
      cardDescription.classList.value.includes('incorrect_card_description')
    ) {
      cardDescription.classList.remove('incorrect_card_description')
    }
    nexQuestionButton.classList.toggle('enabled')
    nexQuestionButton.textContent = '>>>>'
    goToNextQuestion()
  } else {
    console.log('foo')
  }
}

const dataAnal = (data) => {
  const found = testData[counter].answers.find((el) => el.answerText === data)
  cardDescription.textContent = found.aftershok

  if (found.isCorrect) {
    document.querySelector('.clicked').style.backgroundColor = 'green'
    // cardDescription.classList.add('correct_card_description');
    score++
  } else {
    document.querySelector('.clicked').style.backgroundColor = 'red'
    // cardDescription.classList.add('incorrect_card_description');
  }
}

const clickedAnswers = (e) => {
  e.target.classList.add('clicked')
  dataAnal(e.target.textContent)
  let answersList = document.querySelectorAll('.answer_text')
  answersList.forEach((el) => {
    if (!el.classList.value.includes('clicked')) {
      el.classList.remove('answer_text')
      el.classList.add('inactive')
    }
    el.onclick = () => {
      console.log('foo')
    }
  })
  fontDecor(150)

  nexQuestionButton.classList.toggle('enabled')
}

const goToNextQuestion = () => {
  document.querySelector('.answer_text').remove()
  const inactiveElements = document.querySelectorAll('.inactive')
  inactiveElements.forEach((el) => el.remove())

  createPage((counter += 1))
}

const createPage = (id) => {
  if (id < testData.length) {
    imgWrapper.querySelector('img').src = testData[id].imageSource
    cardDescription.textContent = testData[id].cardDescription
    questionText.textContent = testData[id].questionText
    cardCounter.textContent = `Вопрос №${counter + 1}`

    for (let i in testData[id].answers) {
      let newAnswer = answerText.cloneNode(true)
      newAnswer.textContent = testData[id].answers[i].answerText
      questionText.parentNode.appendChild(newAnswer)
      newAnswer.onclick = (e) => {
        clickedAnswers(e)
      }
    }
  } else {
    document.querySelector('.button_wrapper').style.display = 'none'

    if (score / testData.length >= 0.7 && score / testData.length <= 1) {
      console.log('ZBS', score / testData.length)
      const foundResult = restults.find((el) => el.resultValue === 'good boy')
      imgWrapper.querySelector('img').src = foundResult.resultImage
      cardCounter.textContent = foundResult.resulHeader
      cardDescription.textContent = foundResult.resultDescription
    } else if (
      score / testData.length >= 0.3 &&
      score / testData.length < 0.7
    ) {
      console.log('NORM', score / testData.length)
      const foundResult = restults.find((el) => el.resultValue === 'middle boy')
      imgWrapper.querySelector('img').src = foundResult.resultImage
      cardCounter.textContent = foundResult.resulHeader
      cardDescription.textContent = foundResult.resultDescription
    } else {
      console.log('BAD', score / testData.length)
      const foundResult = restults.find((el) => el.resultValue === 'bad boy')
      imgWrapper.querySelector('img').src = foundResult.resultImage
      cardCounter.textContent = foundResult.resulHeader
      cardDescription.textContent = foundResult.resultDescription
    }
    testFinished = true
    nexQuestionButton.textContent = 'Попробуем еще разок?'
    nexQuestionButton.onclick = () => {
      location.reload()
    }
  }
}

const fontDecor = (decorationSpeed) => {
  nexQuestionButton.textContent = ''
  const nArr = Array(4).fill(' ')

  let quotCounter = 0
  let direction = 'forward'
  let minInt = setInterval(() => {
    if (nexQuestionButton.classList.value.includes('enabled')) {
      if (quotCounter < 4 && direction === 'forward') {
        nArr[quotCounter] = '>'
        quotCounter++
      } else if (quotCounter < 4 && direction === 'backward') {
        nArr[quotCounter] = ' '
        quotCounter++
      } else {
        direction === 'forward'
          ? (direction = 'backward')
          : (direction = 'forward')
        quotCounter = 0
      }

      nexQuestionButton.textContent = nArr.join('')
    } else {
      clearInterval(minInt)
    }
  }, decorationSpeed)
  minInt
}

startScreen()
