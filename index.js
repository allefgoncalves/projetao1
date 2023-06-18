
axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';
const objquizz={

}

let todoOsQuizzes =[];

function renderrizarQuizzes(){
    const elementoUl = document.querySelector('.todos-os-quizzes');
    elementoUl.innerHTML = '';

    const arrayElementos = todoOsQuizzes.map( function(quizz){
        console.log(quizz.title);
        return `
        <li>
            <button style="background-image:url(${quizz.image});" class="habilitado">
                <h2>${quizz.title}</h2>
            </button>
        </li> 
        `;
    });

    arrayElementos.forEach( function (li){
        elementoUl.innerHTML += li;
    });
}

function sucessoBuscarQuizzes(resposta){
    console.log(resposta.data);
    todoOsQuizzes = resposta.data;
    renderrizarQuizzes();
}

function erroBuscarQuizzes(erro){
    console.log(erro);
}

const promise = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes');
//const promise = axios.post('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes', objquizz);
promise.then(sucessoBuscarQuizzes);
promise.catch(console.log('deu errado'));

console.log(objquizz);