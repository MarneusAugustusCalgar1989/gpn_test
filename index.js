import { startData, restults } from './gpn_test.js'
import testData from './gpn_test.js'
import { starBurst } from './starburns.js'

const startTestButton = document.querySelector('.start_test_button')
const testWrap = document.querySelector('.test_wrapp')
const redCrest = document.createElement('img')
redCrest.style.position = 'absolute'
redCrest.classList.add('red_crest')

redCrest.src = 'https://obzor.city/data/images/news_2024/07/gpn_test/nope.png'
const cardCounter = document.querySelector('.font_counter')
const imgWrapper = document.querySelector('.img_wrapper')
const rightColumn = document.querySelector('.right_col')
const buttonWrapper = document.querySelector('.button_wrapper')

const cardDescription = document.querySelector('.card_description')

const questionText = document.querySelector('.question_text')
// const answerText = document.createElement('div')
const answerText = document.createElement('button')

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
const funLady = document.createElement('img')
funLady.src =
  'https://obzor.city/data/images/news_2024/07/gpn_test/fun_lady.png'
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
    nexQuestionButton.style.display = 'none'

    cleaner()
    cardDescription.classList.remove('start_description')
    createPage(counter)
  }, 1000)
}

startTestButton.ontouchstart = (e) => {
  e.preventDefault()
  console.log('Test Started from mobile')

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
    nexQuestionButton.style.display = 'none'

    cleaner()
    cardDescription.classList.remove('start_description')
    createPage(counter)
  }, 1000)
}

nexQuestionButton.onclick = (e) => {
  if (deviceType === 'mobile') {
    e.preventDefault()
  }

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
    nexQuestionButton.classList.add('fade_out_1')
    if (nexQuestionButton.classList.value.includes('fade_in')) {
      nexQuestionButton.classList.remove('fade_in')
    }

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
  const imgArray = imgWrapper.querySelectorAll('img')
  if (found.isCorrect) {
    score++

    document.querySelector('.clicked').style.backgroundColor = 'green'
    deviceType === 'desktop'
      ? imgWrapper.classList.add(found.previewFocus)
      : imgWrapper.classList.add(found.previewFocus + '_mobile')

    imgArray.forEach((el) => {
      if (
        el.src === found.questionAsset &&
        el.classList.value.includes('to_scale')
      ) {
        console.log('AAAAAAA!!!!')

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
    found.funLady
      ? imgWrapper.querySelectorAll('img')[1].replaceWith(funLady)
      : imgWrapper.querySelectorAll('img')[1].replaceWith(funMan)
  } else {
    document.querySelector('.clicked').style.backgroundColor = 'red'
    imgArray.forEach((el) => {
      if (el.classList.value.includes('to_scale')) {
        el.remove()
      }
      if (
        el.src === found.questionAsset &&
        !el.classList.value.includes('to_scale')
      ) {
        console.log('Добавим красный крест')
        imgWrapper.appendChild(redCrest)
      }
    })
  }

  nexQuestionButton.style.display = 'flex'
  if (nexQuestionButton.classList.value.includes('fade_out_1')) {
    nexQuestionButton.classList.remove('fade_out_1')
    nexQuestionButton.classList.add('fade_in')
  }
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
      deviceType === 'desktop'
        ? imgWrapper.classList.add('to_shoes')
        : imgWrapper.classList.add('to_shoes_mobile')
    }
    if (previewNode.classList.value.includes('drop_shadow')) {
      previewNode.classList.remove('drop_shadow')
    }
    imgWrapper.appendChild(previewNode)
  }
}

//TEST - делаем красоту для мобил

const hoverAnalMobile = (event) => {
  if (
    event.target.classList.value.includes('answer_hovered') &&
    !answerClicked
  ) {
    answerClicked = true
    event.target.textContent = event.target.textContent.split(', уверены?')[0]

    clickedAnswers(event)
  } else if (!answerClicked) {
    const asnwerList = document.querySelectorAll('.answer_text')
    asnwerList.forEach((el) => {
      if (el.classList.value.includes('answer_hovered')) {
        el.classList.remove('answer_hovered')
        el.classList.remove('scaling')
        el.textContent = el.textContent.split(', уверены?')[0]
      }
    })

    const found = testData[counter].answers.find(
      (el) => el.answerText === event.target.textContent
    )
    previewNode.classList.add('to_scale')
    previewNode.src = found.questionAsset
    if (
      testData[counter].answers.find((el) => el.previewFocus).previewFocus ===
      'to_shoes'
    ) {
      deviceType === 'desktop'
        ? imgWrapper.classList.add('to_shoes')
        : imgWrapper.classList.add('to_shoes_mobile')
    }
    if (previewNode.classList.value.includes('drop_shadow')) {
      previewNode.classList.remove('drop_shadow')
    }
    imgWrapper.appendChild(previewNode)
    event.target.textContent = event.target.textContent + ', уверены?'
    event.target.classList.add('answer_hovered')
    event.target.classList.add('scaling')
  }
}

const clickedAnswers = (e) => {
  e.target.classList.add('clicked')
  dataAnal(e.target)
  cardCounter.classList.remove('text_go_in')
  cardDescription.classList.remove('swap_to_centre')
  buttonWrapper.classList.remove('fade_in')
  nexQuestionButton.classList.add('fade_in')
  let answersList = document.querySelectorAll('.answer_text')
  answersList.forEach((el) => {
    if (!el.classList.value.includes('clicked')) {
      el.classList.add('inactive')
      el.style.pointerEvents = 'none'
    }
    el.onclick = () => {
      console.log('foo')
    }
  })

  setTimeout(() => {
    nexQuestionButton.classList.toggle('enabled')
  }, 200)
}

const goToNextQuestion = () => {
  testWrap.scrollIntoView({ behavior: 'smooth' })

  // const inactiveElements = document.querySelectorAll('.inactive')
  const inactiveElements = document.querySelectorAll('.answer_text')

  if (cardCounter.classList.value.includes('hidden')) {
    cardCounter.classList.remove('hidden')
  }

  cardCounter.classList.add('text_go_out')
  cardDescription.classList.remove('text_go_in')
  cardDescription.classList.add('swap_to_right')
  buttonWrapper.classList.remove('fade_in')
  buttonWrapper.classList.add('fade_out')
  redCrest.classList.remove('red_crest')
  redCrest.classList.add('fade_out')

  console.log(counter)
  counter + 3 <= testData.length
    ? (nexQuestionButton.textContent = `Следующий вопрос`)
    : setTimeout(() => {
        nexQuestionButton.textContent = 'Узнать результат'
      }, 1000)

  setTimeout(() => {
    imgWrapper.querySelector('.to_scale')?.classList.remove('bounce')
    imgWrapper.querySelector('.to_scale')?.remove()
    imgWrapper.classList.remove('to_head') ||
      imgWrapper.classList.remove('to_shoes') ||
      imgWrapper.classList.remove('to_head_mobile') ||
      imgWrapper.classList.remove('to_shoes_mobile')
    cardCounter.classList.add('text_go_in')
    cardCounter.classList.remove('text_go_out')
    cardDescription.classList.remove('swap_to_right')
    buttonWrapper.classList.remove('fade_out')
    document.querySelector('.answer_text').remove()
    buttonWrapper.classList.add('fade_in')
    inactiveElements.forEach((el) => el.remove())
    nexQuestionButton.style.display = 'none'

    cleaner()

    createPage((counter += 1))
  }, 1000)
}

const createPage = (id) => {
  if (id < testData.length) {
    answerClicked = false
    cardDescription.classList.add('swap_to_centre')
    redCrest.classList.remove('fade_out')
    redCrest.classList.add('red_crest')

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
      cardDescription.classList.add('fade_in')
    } else if (
      score / testData.length >= 0.3 &&
      score / testData.length < 0.7
    ) {
      console.log('NORM', score / testData.length)
      const foundResult = restults.find((el) => el.resultValue === 'middle boy')
      imgWrapper.querySelector('img').src = foundResult.resultImage
      cardCounter.textContent = foundResult.resulHeader
      cardDescription.textContent = foundResult.resultDescription
      cardDescription.classList.add('fade_in')
    } else {
      console.log('BAD', score / testData.length)
      const foundResult = restults.find((el) => el.resultValue === 'bad boy')
      imgWrapper.querySelector('img').src = foundResult.resultImage
      cardCounter.textContent = foundResult.resulHeader
      cardDescription.textContent = foundResult.resultDescription
      cardDescription.classList.add('fade_in')
    }
    testFinished = true
    nexQuestionButton.classList.add('last_button')
    nexQuestionButton.style.display = 'flex'
    nexQuestionButton.classList.remove('fade_out_1')
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
startScreen()
