//Описываем структуру данных

export const startData = {
  testHeader: 'Такой-то тест',
  startImage: 'https://obzor.city/data/images/news_2024/06/vyveska/2.jpg',
  testDescription: 'Какое-то описание теста',
};

export const restults = [
  {
    resulHeader: 'Заголовок для хорошего результата',
    resultDescription: 'Описание для хорошего результата',
    resultValue: 'good boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6970_1.jpg',
  },
  {
    resulHeader: 'Средний результат',
    resultDescription: 'Описание среднего результата',
    resultValue: 'middle boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6935_1.jpg',
  },
  {
    resulHeader: 'Плохой-плохой результат',
    resultDescription: 'Описание худшего результата',
    resultValue: 'bad boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6927_1.jpg',
  },
];

const testData = [
  {
    questionText: 'Вопрос номер один',
    imageSource:
      'https://obzor.city/data/images/news_2024/06/kvartaly/087_resul0.jpg',
    cardDescription:
      'Какое-то описание, которое будет задавать контекст вопросу',
    answers: [
      {
        answerText: 'Текст ответа',
        isCorrect: true,
        aftershok: 'Текст после взаимодействия',
      },
      {
        answerText: 'Текст второго ответа',
        isCorrect: false,
        aftershok: 'Другой текст после взаимодействия',
      },
    ],
  },
  {
    questionText: 'Текст второго вопроса',
    imageSource:
      'https://obzor.city/data/images/news_2024/06/kvartaly/dji_0753_resul0.jpg',
    cardDescription:
      'Какое-то описание, которое будет задавать контекст второму вопросу',
    answers: [
      {
        answerText: 'Текст первого ответа на второй вопрос',
        isCorrect: true,
        aftershok: 'Текст после взаимодействия',
      },
      {
        answerText: 'Текст второго ответа на второй вопрос',
        isCorrect: false,
        aftershok: 'Другой текст после взаимодействия',
      },
      {
        answerText: 'Текст третьего ответа на второй вопрос',
        isCorrect: false,
        aftershok: 'Другой текст после взаимодействия',
      },
    ],
  },
  {
    questionText: 'Текст третьего вопроса',
    imageSource:
      'https://obzor.city/data/images/news_2024/06/artexpo/1_14_.jpg',
    cardDescription: 'Описание для третьего вопроса',
    answers: [
      {
        answerText: 'Текст первого ответа на третий вопрос',
        isCorrect: true,
        aftershok: 'Текст после взаимодействия',
      },
      {
        answerText: 'Текст второго ответа на третий вопрос',
        isCorrect: false,
        aftershok: 'Другой текст после взаимодействия',
      },
      {
        answerText: 'Текст третьего ответа на третий вопрос',
        isCorrect: false,
        aftershok: 'Другой текст после взаимодействия',
      },
    ],
  },
];

export default testData;
