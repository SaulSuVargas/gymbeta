/* ==== MOSTRAR MENU ====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== ABRIR MENU =====*/
/* Validar la existencia (añadir) */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('mostrar-menu')
    })
}

/*===== CERRAR MENU =====*/
/* Validar la existencia (remover) */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('mostrar-menu')
    })
}

/* ==== REMOVER MENU MOBILE ====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos clic en cada enlace de navegación, cerramos el menu
    navMenu.classList.remove('mostrar-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==== CAMBIAR EL COLOR DE FONDO DEL HEADER ====*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Si baja un 50 px, automaticamente cambia el coolor del header
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ===== COLOR DE SECCION DE MENU ACTIVA LINK */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
