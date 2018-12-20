const toggle = (element) => {
    element.classList.toggle('hidden')
}

const sectionTitles = document.getElementsByClassName('your-text');
Array.from(sectionTitles).forEach(section => {
    section.addEventListener('click', () => {
        toggle(document.getElementById(section.dataset.section));
    })
})