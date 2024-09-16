function loader(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const img = button.querySelector('img');
    const imgSrc = img.src;
    const mainContainer = document.querySelector('.main-container');
    mainContainer.style.backgroundImage = `url(${imgSrc})`;
    mainContainer.style.backgroundSize = 'cover';
    mainContainer.style.backgroundPosition = 'center';
    mainContainer.style.backgroundRepeat = 'no-repeat';
}
