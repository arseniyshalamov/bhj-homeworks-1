const chatWidget = document.querySelector(".chat-widget");
const chatWidgetMessages = document.querySelector(".chat-widget__messages");
const chatWidgetInput = document.getElementById("chat-widget__input");

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

const AnswerFromBot = [
    "добрый день!",
    "простите, все операторы заняты, вам ответит бот.",
    "вопрос по товару в вашей карзине?",
    "простите, не понятно, на каком языке пишите?",
    "мы не можем вам помочь, досвидание.",
    "вы не в том маназине."
];

document.addEventListener('keydown', event => {
    if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
        chatWidgetMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">${chatWidgetInput.value}</div>
        </div>
        `;

        chatWidgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${new Date().toLocaleTimeString()}</div>
            <div class="message__text">${AnswerFromBot[Math.floor(Math.random() * AnswerFromBot.length)]}</div>
        </div>
        `

        chatWidgetInput.value = '';
        chatWidgetMessages.lastElementChild.scrollIntoView(false);
    }
})