
const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        console.log(entry);
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

