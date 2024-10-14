//Описываем структуру данных

export const startData = {
  testHeader: 'БЕЗОПАСНОСТЬ МОЖЕТ БЫТЬ ИНТЕРЕСНОЙ!',

  imageSource: {
    base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
    hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
    glasses: '',
    kurtka:
      'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
    shoes: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
  },
  testDescription:
    'Человек всегда ценил в одежде удобство, прагматичность и безопасность. Особенно эти качества важны на различных производствах. На примере специальной одежды сотрудников «Газпромнефть-Востока» мы покажем, какие особенные детали одежды, обуви, а также средства защиты помогают специалистам нефтегазовой отрасли чувствовать себя всегда комфортно.',
}

const testData = [
  {
    questionText: 'Что ему стоит надеть, чтобы защитить глаза?',
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
      'Представьте, сотруднику нефтегазодобывающего промысла нужно дрелью просверлить отверстия в стене.',

    answers: [
      {
        answerText: 'Очки-авиаторы',
        isCorrect: false,
        aftershok:
          'Нефтяники, конечно, предпочитают все передовое и эффективное, но в очках, предназначенных для пилотов, не работают. Все-таки у каждой отрасли своя специфика!',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_glasses.png',
      },
      {
        answerText: 'Очки типа лыжных',
        isCorrect: false,
        aftershok:
          'Они прекрасно защитят глаза лыжника на трассе. Но всему свое место, и для данного вида работ будут неудобны в использовании.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/ski_glasses.png',
      },
      {
        answerText: 'Открытые защитные очки',
        isCorrect: true,
        aftershok:
          '<p>Вы правы! Открытые защитные очки идеально подходят для данной работы. Они имеют широкий панорамный обзор. Линзы могут выдержать попадание металлического страйкбольного шара весом 0,2 грамма, летящего со скоростью около 91 м/с. А еще в этих очках можно работать даже в Африке, где столбик термометра поднимается до +55°С (одно из самых жарких мест на Земле), или в Антарктике, где в воздухе моментально застывает кипяток. Очки выдержат. При этом они будут комфортно затеняться при выходе на свет, а также их стекла не запотевают благодаря вентиляционным отверстиям в заушниках, обеспечивающих эффективный воздухообмен. </p>',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/guard_glasses1.png',
        previewFocus: 'to_head',
      },
    ],
  },
  {
    questionText: 'Что ему надеть с целью сохранения органов слуха?',
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
      'Сотруднику предстоит выполнить задачу на рабочем месте, где повышен уровень шума.',

    answers: [
      {
        answerText: 'Беспроводные накладные наушники',
        isCorrect: false,
        aftershok:
          'Безусловно, наушники с любимой музыкой или подкастом могут немного приглушить окружающий шум. Но даже самые крутые подобные устройства не смогут противостоять наиболее шумным агрегатам на производстве (они просто под это не «заточены»).',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/beats.png',
      },
      {
        answerText: 'Противошумовые наушники',
        isCorrect: true,
        aftershok:
          'Действительно, такие наушники — наилучший выбор для защиты ушей от шума.  Их отличает специальная конструкция. Внутренность чаши заполнена материалом, снижающим уровень шума. Увеличенный объём пространства между звукопоглощающим вкладышем и ушной раковиной препятствует скоплению влаги. Мягкие и широкие амортизаторы обеспечивают оптимальное прижатие чашек к голове, не вызывая дискомфорта и утомления при длительном ношении. ',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/norm_headphones.png',
        previewFocus: 'to_head',
      },
      {
        answerText: 'Шапку-ушанку',
        isCorrect: false,
        aftershok:
          'Шапка – это, конечно, дело хорошее. Она поможет сохранить уши от холода, но рядом с мощными источниками шума нужны специальные средства, которые помогут защитить слух работника.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/ushanka1.png',
      },
    ],
  },
  {
    questionText: 'Что ей следует надеть в целях безопасности?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/tshirted_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka: '',
      shoes:
        'https://obzor.city/data/images/news_2024/07/gpn_test/high_shoes.png',
    },
    cardDescription:
      'Начинается рабочая смена. Сотруднице лаборатории предстоит сделать несколько анализов нефти.',
    answers: [
      {
        answerText: 'Платье',
        isCorrect: false,
        aftershok:
          'Работники на промысле всегда, помимо нахождения в общежитии, должны оставаться в форме – специальной рабочей одежде.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/shirt_tshirt_with_hands.png',
      },
      {
        answerText: 'Специальный костюм для защиты от кислот и щелочей',
        isCorrect: true,
        aftershok:
          'Прекрасный выбор! Этот костюм позволяет надежно защитить работника от химических воздействий (кислот и щелочей). Костюм выполнен из специального плотного материала, который может выдержать контакт с химреагентами. В нем можно смело идти на прогулку в сплошной ливень и буквально выйти сухим из воды, ведь эта одежда готова к продолжительному контакту с различными жидкостями. В такой спецодежде не страшны даже капли кипящей нефти. Вот бы домохозяйкам иметь такой костюм, и можно не бояться получить ожоги при жарке котлет.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
        previewFocus: 'to_head',
      },
      {
        answerText: 'Деловой костюм',
        isCorrect: false,
        aftershok:
          'Всему своё место и деловому костюму тоже. Нет необходимости брать его с собой на промысел. Здесь лучше всего подойдет специальная одежда, которую выдают перед поездкой на промысел.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_suite_with_hands.png',
      },
    ],
  },
  {
    questionText: 'Какую обувь предоставим сотруднику?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
      hat: 'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
      glasses: '',
      kurtka:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      shoes: '',
    },
    cardDescription:
      'Сотрудник производства собирается выйти на смену, где ему предстоит работать тяжелыми грузами, к примеру, разгружать трубы.',

    answers: [
      {
        answerText: 'Специальные ботинки с жестким носком',
        isCorrect: true,
        aftershok:
          'Именно! Ведь эти ботинки не только удобные, но и безопасные, а их подошва достаточно прочна. Для защиты от ударов применяется внутренний защитный носок из композита ударной прочностью 200 Дж. В таких ботинках нога будет оставаться в безопасности, если даже на неё наступит слон! ',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
        previewFocus: 'to_shoes',
      },
      {
        answerText: 'Кеды',
        isCorrect: false,
        aftershok:
          'Несмотря на стиль и всю прекрасность кедов, у них другое предназначение. Лучше все же выбрать супер-ботинки, ведь они удобны с учетом защитной функции.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/kedos.png',
      },
      {
        answerText: 'Тапочки',
        isCorrect: false,
        aftershok:
          'Несмотря на всё удобство, тапочки небезопасны на производстве, поэтому стоит выбрать специальные ботинки.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/tapochki.png',
      },
    ],
  },
  {
    questionText: 'Что нужно надеть на голову?',
    imageSource: {
      base: 'https://obzor.city/data/images/news_2024/07/gpn_test/naked_man.png',
      hat: '',
      glasses:
        'https://obzor.city/data/images/news_2024/07/gpn_test/guard_glasses1.png',
      kurtka:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_kurtka.png',
      shoes:
        'https://obzor.city/data/images/news_2024/07/gpn_test/man_shoes.png',
    },
    cardDescription:
      'Сотрудник «Газпромнефть-Востока» выходит из своей комнаты перед началом работы. Он оделся по форме — на нем костюм, очки и надежные ботинки. Осталась самая малость...',

    answers: [
      {
        answerText: 'Винтажный кепи',
        isCorrect: false,
        aftershok:
          'Прекрасный выбор, чтобы прогуляться по городу! Но на промысле головной убор должен в первую очередь обеспечивать безопасность. ',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/kepi.png',
      },
      {
        answerText: 'Брендированную кепку',
        isCorrect: false,
        aftershok:
          'Несмотря на элегантность и удобство кепки, хоть и с логотипом компании, все же не подходят для того, чтобы надевать их на промысле.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/basebolka.png',
      },
      {
        answerText: 'Защитную каску',
        isCorrect: true,
        aftershok:
          'Именно этого элемента не хватает, чтобы завершить наш безопасный образ. Каска предназначена для защиты головы человека от ударов и механических воздействий. Для изготовления корпуса используются сверхпрочные материалы – ABS-пластик, стекловолокно, текстолит, полиэтилен, сотовый поликарбонат, винипласт. Каски проходят испытание на прочность, поэтому в них можно не бояться удариться головой об косяк или арматуру. А еще они могут выдержать падение двух кирпичей или, скажем, прыжок среднего, но довольно упитанного взрослого кота весом 5 килограммов.',
        questionAsset:
          'https://obzor.city/data/images/news_2024/07/gpn_test/man_hat.png',
        previewFocus: 'to_head',
      },
    ],
  },
]

export const restults = [
  {
    resulHeader: 'Хороший результат',
    resultDescription:
      'Поздравляем! Ваши навыки специалиста по производственной безопасности великолепны. Вы, как и работники «Газпромнефть-Востока», понимаете важность использования подходящих средств индивидуальной защиты. Ведь спецодежда, обувь и аксессуары делают работу не только комфортной, но и безопасной.',
    resultValue: 'good boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6970_1.jpg',
  },
  {
    resulHeader: 'Средний результат',
    resultDescription:
      'Что ж, вам еще есть над чем поработать! Обратите внимание, что на предприятиях «Газпромнефть-Востока» одним из важнейших аспектов всегда была безопасность производства. Именно она определяет в том числе и то, что сотрудники компании носят во время работы.',
    resultValue: 'middle boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6935_1.jpg',
  },
  {
    resulHeader: 'Плохой результат',
    resultDescription:
      'Кажется, вы немного перепутали, и подготовили работников не ко смене на производстве, а к походу в магазин у дома! Попробуйте пройти тест еще раз, и вы наверняка поймете, в чем тут дело, зачем нужно носить каски вместо кепок и ботинки с железным носком вместо тапочек.',
    resultValue: 'bad boy',
    resultImage:
      'https://obzor.city/data/images/news_2024/06/shalay/dsc_6927_1.jpg',
  },
]

export default testData
