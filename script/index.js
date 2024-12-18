// ========= Header ================
const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.classList.add('header_top_block')
const logo = document.createElement('img')
logo.src = './images/logo.png'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const nav = document.createElement('nav')
const menuUl = document.createElement('ul')
menuUl.classList.add('menu')

const menuList = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']

for (let i = 0; i < menuList.length; i++) {
    const menuLi = document.createElement('li')
    const menuA = document.createElement('a')
    menuA.textContent = menuList[i]
    menuA.href = '#'
    menuA.classList.add('menu_item')

    menuLi.append(menuA)
    menuUl.append(menuLi)
}
// ====================================================


// =========== Main =======================

// ======== Cards section ===============
const main = document.createElement('main')
const cardsSection = document.createElement('section')
cardsSection.classList.add('cards')

for (let i = 0; i < 3; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    const cardImage = document.createElement('div')

    if (i === 1) {
        cardImage.classList.add('card-chart')
        const chartImage = document.createElement('img')
        chartImage.src = './images/card1.png'
        chartImage.classList.add('chart-backgr')
        chartImage.alt = 'chart-image'

        const chartLeftDiv = document.createElement('div')
        chartLeftDiv.classList.add('chart-left')
        chartLeftDiv.textContent = 'Да 78%'

        const chartRightDiv = document.createElement('div')
        chartRightDiv.classList.add('chart-right')
        chartRightDiv.textContent = 'Нет 22%'

        cardImage.append(chartImage, chartLeftDiv, chartRightDiv)
    } else {
        cardImage.classList.add('card-image')
        const image = document.createElement('img')
        image.src = './images/card1.png'
        image.alt = 'people'

        const cardText = document.createElement('div')
        cardText.classList.add('card-text')
        cardText.textContent = 'Часто ли Вы опаздываете на работу (учебу)?'

        cardImage.append(image, cardText)
    }

    cardsSection.append(card)
    card.append(cardImage)
}


// ====== About-app section =========
const aboutApp = document.createElement('section')
aboutApp.classList.add('aboutApp')
const aboutH2 = document.createElement('h2')
aboutH2.textContent = 'О приложении'

const videoContainer = document.createElement('div')
videoContainer.classList.add('videoContainer')
const videoContainerImg = document.createElement('img')
videoContainerImg.src = './images/video.png'
videoContainerImg.alt = 'Application overview'
const videoContainerButton = document.createElement('div')
videoContainerButton.classList.add('play_btn')
const playBtn_span = document.createElement('span')
playBtn_span.textContent = '\u25ba'

aboutApp.append(aboutH2, videoContainer)
videoContainer.append(videoContainerImg, videoContainerButton)
videoContainerButton.append(playBtn_span)
// ================================


// ======= Examples =========
const examples= document.createElement('section')
examples.classList.add('examples')
const examplesImg = document.createElement('img')
examplesImg.src = './images/sites.png'
examplesImg.alt = 'Sites'

examples.append(examplesImg)
// ==========================


// ======= About Project section ===========
const aboutProject = document.createElement('section')
aboutProject.classList.add('aboutProject')
const aboutProjectH2 = document.createElement('h2')
aboutProjectH2.textContent = 'О проекте'
const aboutProjectP = document.createElement('p')
aboutProjectP.classList.add('aboutProject_text')
aboutProjectP.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

aboutProject.append(aboutProjectH2, aboutProjectP)
// =================================


// ======== Download section ==================
const downloadSection = document.createElement('section')
downloadSection.classList.add('download')
const downloadSectionH2 = document.createElement('h2')
downloadSectionH2.textContent = 'Скачать'

const downloadSection_div = document.createElement('div')
downloadSection_div.classList.add('download_img')

const downloadImg1 = document.createElement('img')
downloadImg1.src = './images/android.png'
downloadImg1.alt = 'android'
const downloadImg2 = document.createElement('img')
downloadImg2.src = './images/qr.png'
downloadImg2.alt = 'QR'
downloadSection_div.append(downloadImg1, downloadImg2)

const downloadSectionP = document.createElement('p')
downloadSectionP.classList.add('downloadSection_text')
downloadSectionP.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

downloadSection.append(downloadSectionH2, downloadSection_div, downloadSectionP)
// ===========================================================================================

// ============ Footer =======================
const footer = document.createElement('footer')
const footer_h2 = document.createElement('h2')
footer_h2.textContent = 'SOME'

const footer_icons = document.createElement('div')
footer_icons.classList.add('footer_icons')
const footer_icons_img1 = document.createElement('img')
footer_icons_img1.src = './images/vk.png'
footer_icons_img1.alt = 'vk'
const footer_icons_img2 = document.createElement('img')
footer_icons_img2.src = './images/instagram (1).png'
footer_icons_img2.alt = 'instagram'
const footer_icons_img3 = document.createElement('img')
footer_icons_img3.src = './images/facebook.png'
footer_icons_img3.alt = 'facebook'
footer_icons.append(footer_icons_img1, footer_icons_img2, footer_icons_img3)


const footer_links = document.createElement('div')
footer_links.classList.add('footer_links')

const footerLinksData = [
    {
        heading: 'Контакты',
        content: `
        <p>
            Tel.: <a href="tel:+996312915000">+996 (312) 915000</a> + Ext.<br>
            Fax: <a href="tel:+996312915028">+996 (312) 915 028</a>
        </p>
        `,
    },
    {
        heading: 'Адреса',
        content: `
            <address>
                American University of Central Asia<br>
                7/6 Aaly Tokombaev Street<br>
                Bishkek, Kyrgyz Republic 720060
            </address>
        `,
    },
    {
        heading: 'Помощь',
    },
]

for (let i = 0; i <footerLinksData.length; i++) {
    const linksColumn = document.createElement('div')
    linksColumn.classList.add('footerLinks_column')

    const heading = document.createElement('h3')
    heading.textContent = footerLinksData[i].heading

    linksColumn.append(heading)

    if (footerLinksData[i].content) {
        const content = document.createElement('div');
        content.innerHTML = footerLinksData[i].content;
        linksColumn.append(content)
    } else {
        const list = document.createElement('ul')

        for (let i = 0; i < 3; i++) {
            const listItem = document.createElement('li')
            const link = document.createElement('a')
            link.href = '#'
            link.textContent = 'Помощь'

            listItem.append(link)
            list.append(listItem)
        }

        linksColumn.append(list)
    }
    footer_links.append(linksColumn)
}

// ===========================================


// ==========================================================
const body = document.body
body.append(header, main, footer)
header.append(header_top_block, nav)
header_top_block.append(logo, h1)
nav.append(menuUl)

main.append(cardsSection, aboutApp, examples, aboutProject, downloadSection)
footer.append(footer_h2, footer_icons, footer_links)















































// DOM - document object model
//document - точка входа в dom дерева

// // ========= Создание элементов ===========
// const h1 = document.createElement('h1')
// // console.dir(h1);
// h1.textContent = 'JavaScript - DOM'

// const p = document.createElement('p')
// p.textContent = 'Параграф - p'


// const div = document.createElement('div')
// div.innerHTML = 'Random text in div'
// div.innerHTML = `<h2> H2 in div </h2>`
// div.innerHTML = `
// <ul>
//     <li>Item</li>
//     <li>Item</li>
//     <li>Item</li>
//     <li>Item</li>
//     <li>Item</li>
// </ul>
// `


// =============== Стилизация в JS ============

// const box = document.createElement('div')
// Для написания стилей по отдельности
// box.style.width = '400px'
// box.style.height = '400px'
// box.style.backgroundColor = 'red'

// Для написания нескольких стилей одновременно
// box.style.cssText = `
// width: 200px;
// height:200px;
// background-color: red;
// `



// ============= Получение тегов из html ===============
// Получение по ID
// const input1 = document.getElementById('inp1')
// // console.log(input1);
// input1.style.width = '500px'


// Получение по тегам
// const spans = document.getElementsByTagName('span')  // Возвращает псевдомассив
// console.log(spans[0]);


// // Получение по классам
// const spans = document.getElementsByClassName('text')
// console.log(spans);


// ========= Получение по селектору =========
// Селектор тега
// const span = document.querySelector('span')
// console.log(span);

// Селектор ID
// const input2 = document.querySelector('#inp2')
// console.log(input2);


// Селектор класса
// const span = document.querySelector('.text')
// console.log(span);


// Получение всех элементов по селектору
// const allSpan = document.querySelectorAll('.text')
// console.log(allSpan);



// ============== Работа с атрибутами ===============
// const image = document.createElement('img')
// image.setAttribute('src', 'https://i.pinimg.com/originals/20/5c/ee/205ceef08eb91f182983d0f611f4f2a3.jpg')
// image.src = 'https://i.pinimg.com/originals/20/5c/ee/205ceef08eb91f182983d0f611f4f2a3.jpg'
// image.alt = 'Горы'




//  =============== Работа с классами ===============
// const h1 = document.createElement('h1')
// const p = document.createElement('p')
// h1.textContent = 'Text in h1'
// p.textContent = 'Some text in p'

// h1.className = 'title test test2 test3'  // Первый способ
// h1.classList.add('title')        //Второй способ задать класс
// h1.classList.add('text')

// h1.classList.remove('text')





// =============== Добавление в html =================
// const body = document.body
// append - добавляет в конец

// body.append(h1, p)
// body.append(div)
// body.append(box)
// body.append(image)


// prepend  - добавляет в начало 