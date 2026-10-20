const input = prompt('Введите число:');
const number = +input;
if (typeof number !== 'number') {
  console.log('Упс, кажется, вы ошиблись');
} else if (Number.isNaN(number)) {
  console.log('Упс, кажется, вы ошиблись');
} else {
  if (number % 2 === 0) {
    console.log('Число четное');
  } else {
    console.log('Число нечетное');
  }
}