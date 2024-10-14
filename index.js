import { startData, restults } from './gpn_test.js'
import testData from './gpn_test.js'
import { starBurst } from './starburns.js'

const startTestButton = document.querySelector('.start_test_button')
const testWrap = document.querySelector('.test_wrapp')

const cardCounter = document.querySelector('.font_counter')
const imgWrapper = document.querySelector('.img_wrapper')
const rightColumn = document.querySelector('.right_col')
const buttonWrapper = document.querySelector('.button_wrapper')
rightColumn.ontouchstart = (e) => {
  if (
    e.target.classList.value === 'question_placeholder' ||
    e.target.classList.value === 'right_col' ||
    e.target.classList.value === 'card_description' ||
    e.target.classList.value === 'question_text' ||
    e.target.classList.value === 'next_question' ||
    e.target.classList.value === 'start_description'
  ) {
    console.log('!!!')
    return false
  }
  console.log(e.target.classList.value)
}
const cardDescription = document.querySelector('.card_description')

const questionText = document.querySelector('.question_text')
const answerText = document.createElement('div')

answerText.classList.add('answer_text')

let previewNode = document.createElement('img')
previewNode.style.position = 'absolute'

let scaler = document.createElement('div')
scaler.classList.add('scaler')

const nexQuestionButton = document.querySelector('.next_question')

//Определяем, с чего мы смотрим сайт
let deviceType = ''

const testDevice = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    deviceType = 'mobile'
  } else deviceType = 'desktop'
}

//Данные для определения длинного тапа
let longTap = false
let timerStarted = false
let tapTime = 0

//Делаем таймер

const tapTimer = (event) => {
  const startTimer = setInterval(() => {
    if (!timerStarted) {
      clearInterval(startTimer)
      if (!answerClicked) {
        document
          .querySelectorAll('.answer_text')
          .forEach((el) =>
            el.classList.value.includes('scaling')
              ? el.classList.remove('scaling')
              : console.log('first')
          )
      }
    } else if (tapTime < 10) {
      !event.target.classList.value.includes('.scaling')
        ? event.target.classList.add('scaling')
        : console.log('first')

      longTap = false
      tapTime++
      console.log(tapTime)
    } else {
      console.log('Long Tap!')
      clearInterval(startTimer)
      longTap = true
      answerClicked = true
      clickedAnswers(event)
    }
  }, 50)
}

// Одеваем человека для каждого отдельного экрана
const suitUp = (asset, isBase = false) => {
  if (asset) {
    let wearAsset = document.createElement('img')
    let elClassName = asset.toString().split('/')
    elClassName = elClassName[elClassName.length - 1].split('.')[0]
    wearAsset.classList.add(`${elClassName}`)
    wearAsset.src = asset
    isBase
      ? (wearAsset.style.position = 'relative')
      : (wearAsset.style.position = 'absolute')
    imgWrapper.appendChild(wearAsset)
  } else {
    console.log('Nothing')
  }
}

//Подчищаем картинки
const cleaner = () => {
  let imagesTodDelete = imgWrapper.querySelectorAll('img')
  imagesTodDelete.forEach((el) => {
    if (el.src != imagesTodDelete[0].src) {
      el.remove()
    }
  })

  imgWrapper.querySelector('img').src = ''
}

let counter = 0
let score = 0
let testFinished = false
let answerClicked = false
const funMan = document.createElement('img')
funMan.src =
  'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man_fun.png'

// Рисуем стартовый экран
const startScreen = () => {
  for (let i in startData.imageSource) {
    i !== 'base'
      ? suitUp(startData.imageSource[i])
      : suitUp(startData.imageSource[i], true)
  }

  document.querySelector('.font_counter').textContent = startData.testHeader
  cardDescription.textContent = startData.testDescription
  cardDescription.classList.add('start_description')
}

startTestButton.onclick = (e) => {
  console.log('Test Started')

  cardCounter.classList.add('text_go_out')
  cardDescription.classList.add('swap_to_right')
  startTestButton.classList.add('swap_down')
  setTimeout(() => {
    cardCounter.classList.remove('text_go_out')
    cardDescription.classList.remove('swap_to_right')
    cardCounter.classList.add('text_go_in')
    cardDescription.classList.add('swap_to_centre')
    startTestButton.style.display = 'none'
    cardDescription.style.display = 'flex'
    buttonWrapper.style.display = 'block'
    buttonWrapper.classList.add('fade_in')
    nexQuestionButton.style.display = 'flex'

    cleaner()
    cardDescription.classList.remove('start_description')
    createPage(counter)
  }, 1000)
}

startTestButton.ontouchstart = (e) => {
  e.preventDefault()
  console.log('Test Started from mobile')

  startTestButton.style.display = 'none'

  cardDescription.style.display = 'flex'
  document.querySelector('.button_wrapper').style.display = 'block'
  nexQuestionButton.style.display = 'flex'
  cleaner()
  cardDescription.classList.remove('start_description')
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
  const found = testData[counter].answers.find(
    (el) => el.answerText === data.textContent
  )
  cardDescription.classList.add('text_go_out')

  setTimeout(() => {
    cardDescription.classList.remove('text_go_out')
    cardDescription.innerHTML = found.aftershok
    cardDescription.classList.add('text_go_in')
  }, 1000)

  suitUp(found.questionAsset)

  if (found.isCorrect) {
    document.querySelector('.clicked').style.backgroundColor = 'green'
    imgWrapper.classList.add(found.previewFocus)
    const imgArray = imgWrapper.querySelectorAll('img')
    imgArray.forEach((el) => {
      if (
        el.src === found.questionAsset &&
        el.classList.value.includes('to_scale')
      ) {
        el.classList.add('bounce')
        setTimeout(() => {
          el.classList.add('drop_shadow')
        }, 500)
      }
      if (
        el.src === found.questionAsset &&
        !el.classList.value.includes('to_scale')
      ) {
        el.remove()
      }
    })
    starBurst()

    data.style.filter = 'drop-shadow(5px -5px 0px gold);'
    imgWrapper.querySelectorAll('img')[1].replaceWith(funMan)
  } else {
    document.querySelector('.clicked').style.backgroundColor = 'red'
    // cardDescription.classList.add('incorrect_card_description');
  }
  score++
}

//TEST - делаем красоту для ПК

const hoverAnalDesktop = (event) => {
  if (!answerClicked) {
    const found = testData[counter].answers.find(
      (el) => el.answerText === event.target.textContent
    )
    previewNode.classList.add('to_scale')
    previewNode.src = found.questionAsset
    if (
      testData[counter].answers.find((el) => el.previewFocus).previewFocus ===
      'to_shoes'
    ) {
      imgWrapper.classList.add('to_shoes')
    }
    if (previewNode.classList.value.includes('drop_shadow')) {
      previewNode.classList.remove('drop_shadow')
    }
    imgWrapper.appendChild(previewNode)
  }
}

//TEST - делаем красоту для мобил

const hoverAnalMobile = (event) => {
  event.preventDefault()
  const answersArr = document.querySelectorAll('.answer_text')

  answersArr.forEach((el) => {
    if (el.classList.value.includes('clicked')) {
      console.log('TAPED')
      answerClicked = true
    }
  })

  if (!answerClicked) {
    document
      .querySelectorAll('.answer_text')
      .forEach((el) => el.classList.remove('answer_hovered'))

    event.target.classList.add('answer_hovered')
    const found = testData[counter].answers.find(
      (el) => el.answerText === event.target.textContent
    )
    previewNode.src = found.questionAsset
    previewNode.classList.add('to_scale')
    if (
      testData[counter].answers.find((el) => el.previewFocus).previewFocus ===
      'to_shoes'
    ) {
      imgWrapper.classList.add('to_shoes')
    }
    if (previewNode.classList.value.includes('drop_shadow')) {
      previewNode.classList.remove('drop_shadow')
    }
    imgWrapper.appendChild(previewNode)

    timerStarted = true
    tapTimer(event)
  }
}

const touchMoveFunc = (e) => {
  timerStarted = false
  tapTime = 0
}

const touchEndFunc = (e) => {
  e.preventDefault()
  timerStarted = false
  tapTime = 0
}

const clickedAnswers = (e) => {
  e.target.classList.add('clicked')
  dataAnal(e.target)
  cardCounter.classList.remove('text_go_in')
  cardDescription.classList.remove('swap_to_centre')
  buttonWrapper.classList.remove('fade_in')
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

  setTimeout(() => {
    fontDecor(150)
    nexQuestionButton.classList.toggle('enabled')
  }, 1000)
}

const goToNextQuestion = () => {
  const inactiveElements = document.querySelectorAll('.inactive')

  cardCounter.classList.add('text_go_out')
  cardDescription.classList.remove('text_go_in')
  cardDescription.classList.add('swap_to_right')
  buttonWrapper.classList.remove('fade_in')
  buttonWrapper.classList.add('fade_out')

  setTimeout(() => {
    imgWrapper.querySelector('.to_scale').classList.remove('bounce')
    imgWrapper.querySelector('.to_scale').remove()
    imgWrapper.classList.remove('to_head') ||
      imgWrapper.classList.remove('to_shoes')
    cardCounter.classList.add('text_go_in')
    cardCounter.classList.remove('text_go_out')
    cardDescription.classList.remove('swap_to_right')
    buttonWrapper.classList.remove('fade_out')
    document.querySelector('.answer_text').remove()
    buttonWrapper.classList.add('fade_in')
    inactiveElements.forEach((el) => el.remove())

    cleaner()

    createPage((counter += 1))
  }, 1000)
}

const createPage = (id) => {
  if (id < testData.length) {
    answerClicked = false
    cardDescription.classList.add('swap_to_centre')

    // imgWrapper.querySelector('img').src = testData[id].imageSource.base
    for (let i in testData[id].imageSource) {
      if (testData[id].imageSource[i].length > 0) {
        i == 'base'
          ? suitUp(testData[id].imageSource[i], true)
          : suitUp(testData[id].imageSource[i])
      }
    }

    cardDescription.textContent = testData[id].cardDescription

    questionText.textContent = testData[id].questionText
    cardCounter.textContent = `Вопрос №${counter + 1}`

    for (let i in testData[id].answers) {
      let newAnswer = answerText.cloneNode(true)
      newAnswer.textContent = testData[id].answers[i].answerText
      newAnswer.appendChild(scaler)
      questionText.parentNode.appendChild(newAnswer)

      if (deviceType === 'desktop') {
        newAnswer.addEventListener('mouseover', (e) => hoverAnalDesktop(e))

        newAnswer.onclick = (e) => {
          clickedAnswers(e)
          answerClicked = true
        }
      } else {
        console.log('its mobile')
        newAnswer.addEventListener('touchstart', (e) => hoverAnalMobile(e))
        // newAnswer.addEventListener('touchmove', (e) => touchMoveFunc(e))
        newAnswer.addEventListener('touchend', (e) => touchEndFunc(e))
        newAnswer.addEventListener('touchcancel', (e) => touchEndFunc(e))
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
    nexQuestionButton.classList.add('last_button')
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

//Launch zone
testDevice()
console.log(deviceType)

startScreen()
