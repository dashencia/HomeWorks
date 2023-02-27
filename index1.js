/*



let cleaner = 40000;
let teacher = 22000;
console.log (cleaner + teacher);


console.log ("Владивосток" + "" + 2000);

console.log (128 + 254 +127 +201)


console.log (2**5)

console.log(`Нужно бежать со всех ног, чтобы только
оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум
вдвое быстрее!`);


const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}`);


const deposit = 30000;
console.log ("Ваш депозит на начало расчётного периода составлял" + deposit + "руб.")
const rate = 18.5;
console.log (' Согласно вашему тарифу, вам была присвоена ставка ' + rate + ' % ')
let increase = 150;
console.log (`К концу расчётного периода прирост составил ${increase} руб., и на данный момент ваш депозит составляет ${deposit+increase} руб.`)


//7 задание
let time = 0;
console.log(time);
time = 34;
console.log ("Старт поездки. Осталось минут: " + time);
time = (time - 15);
console.log (time);
console.log ('Немного сторис в соцсетях. Осталось минут: ' + time);
time = (time - 10);
console.log ("Немного не новостей, но событий. Осталось минут: " + time);
time = 0;
console.log ("Вы приехали. Добро пожаловать в Москву");


//8 задание
let fahrenheit = 451;
let celsius = (`${(fahrenheit - 32) / 1.8}`);
console.log (`${fahrenheit} градуса по Фаренгейту — это + ${celsius} градуса по Цельсию.`);*/


let price = document.querySelector ('.price2').textContent;
let priceBlock = document.querySelector ('.price2');
let button = document.querySelector ('.button');
let percent = price / 100 * 20;

function changePrice () {
let result = Number(price) - percent;
console.log (result)
console.log (price)
priceBlock.textContent = result;

}

button.addEventListener ('click', changePrice);











