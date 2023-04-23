const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText);
        pollTitle.innerHTML = response.data.title;

        for (let answer in response.data.answers) {
            pollAnswers.insertAdjacentHTML('afterBegin', `<button class="poll__answer">${response.data.answers[answer]}</button>`);
        }

        const pollAnswer = document.querySelectorAll(".poll__answer");

        pollAnswer.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                pollAnswers.innerHTML = "";
                const xhrNew = new XMLHttpRequest();
                xhrNew.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhrNew.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhrNew.send('vote=1&answer=2');
                xhrNew.addEventListener('readystatechange', () => {
                    if (xhrNew.readyState === xhrNew.DONE) {
                        let sum = 0;
                        let responseResult = JSON.parse(xhrNew.responseText).stat;
                        console.log(responseResult);
                        responseResult.forEach(result => {
                            sum =+ result.votes;
                        })
                        responseResult.forEach(result => {
                            let percent = ((result.votes / sum) * 100).toFixed(2);
                            poolAnswers.innerHTML += "<div>" + result.answer + " <b>" + percent + "%" + "</b></div>";
                        })
                    }
                }) 
            })
        })
    }
})