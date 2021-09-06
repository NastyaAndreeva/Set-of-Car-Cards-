const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', ()=> {
        ClearAllActive()

        slide.classList.add('active')
    })
}

function ClearAllActive() {
    slides.forEach(slide => {
        slide.classList.remove('active')
        
    })
}

