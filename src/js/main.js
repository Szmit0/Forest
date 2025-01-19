const navIcon = document.querySelector('.nav__burger-icon')
const navPanelMobile = document.querySelector('.nav__panel--mobile')
const navLinkMobile = document.querySelectorAll('.nav__link--mobile')
const footerYear = document.querySelector('.footer__year')

const toggleNav = () => {
	navPanelMobile.classList.toggle('shown')
}

const removeNav = () => {
	navPanelMobile.classList.toggle('shown')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navLinkMobile.forEach(link => {
	link.addEventListener('click', () => {
		removeNav()
	})
})
navIcon.addEventListener('click', toggleNav)
navIcon.addEventListener('click', removeNav())
