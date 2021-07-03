const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ul = document.getElementById('ingredients');
const liArray = ingredients.map((element) => {
    const liElem = document.createElement('li');
    liElem.textContent = element;
return liElem;
});
ul.append(...liArray);