const pictureInnerContainer = document.querySelector('.picture-inner-container');
const arrayOfLinks = [
    'galery1.jpg', 
    'galery2.jpg', 
    'galery3.jpg', 
    'galery4.jpg', 
    'galery5.jpg', 
    'galery6.jpg', 
    'galery7.jpg', 
    'galery8.jpg', 
    'galery9.jpg', 
    'galery10.jpg', 
    'galery11.jpg', 
    'galery12.jpg', 
    'galery13.jpg', 
    'galery14.jpg', 
    'galery15.jpg'
]

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function createNewArray() {
    const newArr = shuffle(arrayOfLinks);
    const innerImg = newArr.map(item => {
        return `<img src="assets/img/galery/${item}" alt="galery img">`});
    for (let i = 0; i < 15; i++) {
        pictureInnerContainer.innerHTML += innerImg[i];
    }
}

createNewArray();