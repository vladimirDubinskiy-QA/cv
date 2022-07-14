/* Это объявление переменной, мы нашли кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('"What matters most is how well you walk through the fire."')
})