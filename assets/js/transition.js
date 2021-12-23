
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const section = entry.target;
        if (entry.isIntersecting) {
            section.classList.add('section-transition');
            return;
        }
    });
});

const sectionList = document.querySelectorAll('.section');
sectionList.forEach((sl) => {
    observer.observe(sl);
});

