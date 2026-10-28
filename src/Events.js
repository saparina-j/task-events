export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;

        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.textContent);
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';

    let isFirstClick = true;

    a.addEventListener('click', function (event) {
        if (isFirstClick) {
            event.preventDefault();
            a.textContent += ' ' + a.href;
            isFirstClick = false;
        }
    });

    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>Пункт</li>';

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
