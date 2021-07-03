const ulCategor = document.getElementById("categories");
console.log(`В списке ${ulCategor.children.length} категории.`);

const h2Array = document.querySelectorAll('h2');

const liArray = document.querySelectorAll('.item');

console.log(`Категория: ${h2Array[0].textContent}`);
console.log(`Количество элементов: ${liArray[0].children[1].children.length}`);

console.log(`Категория: ${h2Array[1].textContent}`);
console.log(`Количество элементов: ${liArray[1].children[1].children.length}`);

console.log(`Категория: ${h2Array[2].textContent}`);
console.log(`Количество элементов: ${liArray[2].children[1].children.length}`);
