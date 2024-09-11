const puppeteer = require('puppeteer');

(async () => {
    // Запуск браузера
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Переход на нужный сайт
    await page.goto('https://junon.io?e=6eKxGNQbevTn0');

    // Ждем, пока кнопка станет доступной (замените селектор на свой)
    const buttonSelector = '#join_game_btn'; // Замените на селектор вашей кнопки
    await page.waitForSelector(buttonSelector);

    // Нажимаем на кнопку
    await page.click(buttonSelector);

    // Дополнительные действия после нажатия (если необходимо)
})();
