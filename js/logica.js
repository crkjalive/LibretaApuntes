const buscar = (i) => {
	section_title.innerHTML = `${data[i].title}`
	section_driver.innerHTML = data[i].driver
	section_description.innerHTML = data[i].description
}

let item = '';

const menu = (data) => {
	for (let i = 0; i < data.length; i++) {
		item += `<a class="header_nav_a" href="#"><li class="header_nav_li">${data[i].title}</li></a>`
	}
	return item
}

const section_title = document.getElementById('section_title')
const section_driver = document.getElementById('section_driver')
const section_description = document.getElementById('section_description')

const header = document.getElementById('header_nav_ul')
header.className = 'header'
header.innerHTML = menu(data);


const header_nav_li = document.querySelectorAll('.header_nav_li');

for (let i = 0; i < header_nav_li.length; i++) {
	header_nav_li[i].addEventListener('click', () => {
		buscar(i)
	})
}