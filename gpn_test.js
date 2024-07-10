//Описываем структуру данных

export const startData = {
  testHeader: 'ПРИОДЕНЬСЯ!',

  imageSource: {
    base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
    hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
    glasses: '',
    kurtka:
      'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
    shoes: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
  },
  testDescription:
    'Безопасность на производстве – это краеугольный камень, техника безопасности пишется кровью, и одна из важнейших её частей — это правильно подобранная спецодежда. На примере экипировки сотрудников «Газпромнефть-Востока» предлагаем вам попробовать себя в роли специалиста по технике безопасности и правильно приодеть специалиста и специалистку. ',
}

const testData = [
  {
    questionText: 'Что ему стоит надеть?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      shoes:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
    },

    cardDescription:
      'Представьте себе жаркий летний день. Вашему сотруднику предстоит заняться погрузкой на вилочном погрузчике. Ввозить и вывозить.',
    answers: [
      {
        answerText: 'Очки-авиаторы ',
        isCorrect: false,
        aftershok:
          'Газовики, конечно, крутые, но не настолько, чтобы работать в авиаторах. Хотя специальноые йоба-очки на самом деле подойдут как надо.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_glasses.png',
      },
      {
        answerText: 'Очки типа лыжных',
        isCorrect: false,
        aftershok:
          'Всему свое место. И на складе таким очкам не место. А место здесь крутым специальным очкам.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/ski_glasses.png',
      },
      {
        answerText: 'Йоба защитные очки с автозатемнением и ударопрочностью',
        isCorrect: true,
        aftershok:
          'Что ж, вот когда вы правы - вы правы! Таки очки защищают от ударов и умеют менять степень затемнения. А еще они ударопрочные и могут защитить глаза в случае чего. Идеальный выбор! ',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/guard_glasses1.png',
      },
    ],
  },
  {
    questionText: 'Чего ему не хватает?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      shoes:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
    },
    cardDescription:
      'Сотруднику предстоит работать рядом с «факелом» /компрессором/турбогенератором/стройкой или другими шумными местами.',
    answers: [
      {
        answerText: 'Беруш',
        isCorrect: false,
        aftershok:
          'Беруши, конечно, дело хорошее. Но здесь нужны йоба-наушники, которые куда более безопасны, защищают от шума и повреждений.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/ear_plugs.png',
      },
      {
        answerText: 'Модных beats',
        isCorrect: false,
        aftershok:
          'Безусловно, вкладыши помогают избавиться от шума, но на производстве используют йоба-наушники. Ибо только они достаточно функциональны, безопасны и элегантно дополняют форму.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/beats.png',
      },
      {
        answerText: 'Противошумовые наушники с креплением на каске',
        isCorrect: true,
        aftershok:
          'Вы будто бы всю жизнь проработали инженером по технике безопасности. Действительно, такие наушники используются всегда и поэтому наглухо прикреплены к каскам.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/norm_headphones.png',
      },
    ],
  },
  {
    questionText: 'Что мы на него наденем?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/tshirted_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka: '',
      shoes:
        'https://obzor.city/data/images/news_2024/07/gpn_test/high_shoes.png',
    },
    cardDescription:
      'Начинается смена на одном из промыслов. Задача сотрудника сделать сверку-проверку на складе.',
    answers: [
      {
        answerText:
          'Шорты и футболку – на складе тепло и нет потенциально опасных факторов',
        isCorrect: false,
        aftershok:
          'Даже на складе работник должне оставаться в форме - специальном комбезе, который не только подчеркивает приверженность человека компании, но защитит в случае чего',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/shirt_tshirt_with_hands.png',
      },
      {
        answerText: 'Спецкостюм со степенями защиты и водонепроницаемостью',
        isCorrect: true,
        aftershok:
          'Прекрасный выбор! Этот костюм позволяет защитить работника от химических веществ, огня и полиции моды.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      },
      {
        answerText: 'Костюм тройка и галстук – работать надо стильно',
        isCorrect: false,
        aftershok:
          'Всему своё место. И костюму-тройке тоже. И его место определенно не на промысле. А на промысле лучше всего подойдет именно спецкостюм защиты.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_suite_with_hands.png',
      },
    ],
  },
  {
    questionText: 'Какую обувь ей предоставим?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      shoes: '',
    },
    cardDescription:
      'Сотруднику лаборатории предстоит сделать много анализов, а еще и сходить на обед.',
    answers: [
      {
        answerText: 'Специальные ботинки-берцы для защиты от всякого',
        isCorrect: true,
        aftershok:
          'Именно! Ведь эти ботинки не только удобные, но и безопасные. Они могут помочь сохранить ноги от огня, острых предметов и даже падения тяжестей. ',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
      },
      {
        answerText: 'Кеды',
        isCorrect: false,
        aftershok:
          'Несмотря на стиль и всю прекрасность кедов, лучше все же выбрать супер-ботинки, ведь они защитят от всего, а еще и удобные',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/kedos.png',
      },
      {
        answerText: 'Тапочки',
        isCorrect: false,
        aftershok:
          'Несмотря на всё удобство, тапочки предельно небезопасны на производстве, поэтому стоит выбрать специальные ботинки.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/tapochki.png',
      },
    ],
  },
]

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
]

export default testData
