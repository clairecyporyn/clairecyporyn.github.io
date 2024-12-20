// select all sections with dropdown functionality
const sections = document.querySelectorAll('.section');

// loop through each section
sections.forEach((section) => {
  const header = section.querySelector('.section-header');
  const content = section.querySelector('.section-content');
  const arrow = section.querySelector('.dropdown-arrow');

  // add click event to toggle content
  header.addEventListener('click', () => {
    const isOpen = content.style.display === 'block';

    // collapse or expand content
    content.style.display = isOpen ? 'none' : 'block';

    // toggle arrow rotation
    arrow.classList.toggle('open', !isOpen);
  });
});