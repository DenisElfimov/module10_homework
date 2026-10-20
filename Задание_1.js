const input = prompt("Введите число:");


if (input === null || input.trim() === '') {
  console.log('Упс, вы ничего не ввели');
} else {
  const number = +input;
  if (Number.isNaN(number)) {
    console.log('Упс, кажется, вы ошиблись');
  } else {
    if (number % 2 === 0) {
      console.log('Число четное');
    } else {
      console.log('Число нечетное');
    }
  }
}
