const sidebar = document.querySelector('.sidebar');
const about = document.querySelector('.about');
const faq = document.querySelector('.faq');

document.querySelector('.showmenu').addEventListener('click', () => {
  sidebar.style.display = 'flex';
});

document.querySelector('.hidemenu').addEventListener('click', () => {
  sidebar.style.display = 'none';
});

document.querySelector('.closeAbout').addEventListener('click', () => {
  about.style.display = 'none';
});

document.querySelector('.openAbout').addEventListener('click', () => {
  about.style.display = 'block';
  sidebar.style.display = 'none';
});

document.querySelector('.closeFaq').addEventListener('click', () => {
  faq.style.display = 'none';
});

document.querySelector('.openFaq').addEventListener('click', () => {
  faq.style.display = 'block';
  sidebar.style.display = 'none';
});

document.querySelector('.btn-primary').addEventListener('click', () => {
  alert('app is under development, bear with us.');
  window.open("/quiz/index.html");
});


const headlines = [
    "Unlock Your Potential with 2B Learn",
    "Your Gateway to Smarter Learning",
    "Empower Your Education Journey",
    "Master Knowledge with Interactive Quizzes",
    "Learn, Quiz, and Excel with 2B Learn",
    "Transform Learning into Fun and Engaging Experience",
    "Achieve Academic Success with 2B Learn",
    "Where Learning Meets Innovation",
    "Your Ultimate Learning Companion",
    "Step Up Your Learning Game with 2B Learn"
];

let index = 0;
const headlineElement = document.querySelector('.catchy');

function changeHeadline() {
    headlineElement.classList.add('fade-out');

    setTimeout(() => {
        index = (index + 1) % headlines.length;
        headlineElement.textContent = headlines[index];
        headlineElement.classList.remove('fade-out');
        headlineElement.classList.add('fade-in');

        setTimeout(() => {
            headlineElement.classList.remove('fade-in');
        }, 1000); // Remove fade-in class after animation duration
    }, 1000); // Match this delay with fade-out animation duration
}

setInterval(changeHeadline, 5000); // Change headline every 5 seconds


// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-question');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;

        // Check if the clicked FAQ item is already expanded
        if (answer.style.maxHeight) {
            // Collapse the answer
            answer.style.maxHeight = null;
            item.setAttribute('aria-expanded', 'false');
        } else {
            // Collapse all other answers
            document.querySelectorAll('.faq-answer').forEach(faq => {
                faq.style.maxHeight = null;
                faq.previousElementSibling.setAttribute('aria-expanded', 'false');
            });

            // Expand the clicked FAQ answer
            answer.style.maxHeight = answer.scrollHeight + "px";
            item.setAttribute('aria-expanded', 'true');
        }
    });
});