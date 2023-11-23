import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Ком`юніті')

page.append(title)

const createCommunityInfo = () => {
  const createCommunity = createElement('main', 'community')

  const headerInfo = createElement(
    'div',
    'community__header',
  )

  const createButtonClosed = createElement(
    'button',
    'button--closed',
    'База знань',
  )
  headerInfo.append(createButtonClosed)

  const createButtonOpen = createElement(
    'button',
    'button--open',
    'Інформація',
  )
  headerInfo.append(createButtonOpen)

  createCommunity.append(headerInfo)

  const img = createElement('img')
  img.src = 'img/image.png'
  createCommunity.append(img)

  const createInfo = createElement('div', 'community__info')
  createCommunity.append(createInfo)

  const createInfoTitle = createElement(
    'h2',
    'community__title',
    'Що таке база знань?',
  )
  createInfo.append(createInfoTitle)

  const createInfoDescription = createElement(
    'p',
    'community__description',
    'База знань - база даних, що містить правила виведення та інформацію про містить інформацію, що є результатом вирішення попередніх завдань.',
  )
  createInfo.append(createInfoDescription)

  const buttonLink = createElement(
    'button',
    'button button__link',
    'Перейти до ком`юніті у Телеграм',
  )
  createCommunity.append(buttonLink)

  page.append(createCommunity)

  return createCommunityInfo
}

const communityInfoBlock = createCommunityInfo()
