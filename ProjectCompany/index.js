const people = [
    {
        name: 'Nirmal Kumar I',
        photo: 'founders/nirmal.jpg',
        info: 'Founder'    
    },

];

let currentIndex = 0;

function updateCard() {
    const photoElement = document.getElementById('person-photo');
    const nameElement = document.getElementById('person-name');
    const infoElement = document.getElementById('person-info');

    photoElement.src = people[currentIndex].photo;
    nameElement.textContent = people[currentIndex].name;
    infoElement.textContent = people[currentIndex].info;

    currentIndex = (currentIndex + 1) % people.length;
}

updateCard();
setInterval(updateCard, 3000); 


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
