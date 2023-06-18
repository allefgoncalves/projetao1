
axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';
const objquizz={

}

let todoOsQuizzes =[];
let meusQuizzes=[];

//OBS: tem que ajustar a função
function renderrizarMeusQuizzes(){
    const elementoUl = document.querySelector('.todos-os-quizzes');
    elementoUl.innerHTML = '';

    const arrayElementos = todoOsQuizzes.map( function(quizz){
        console.log(quizz.title);
        return `
        <li data-test="my-quiz">
            <button 
            style="background-image:url(${quizz.image});" 
            class="habilitado"
            onclick="jogarQuizz()">
                <h2>${quizz.title}</h2>
            </button>
        </li> 
        `;
    });

    arrayElementos.forEach( function (li){
        elementoUl.innerHTML += li;
    });
}

function renderrizarQuizzes(){
    const elementoUl = document.querySelector('.todos-os-quizzes');
    elementoUl.innerHTML = '';

    const arrayElementos = todoOsQuizzes.map( function(quizz){
        console.log(quizz.title);
        return `
        <li data-test="others-quiz">
            <button 
            style="background-image:url(${quizz.image});"
            onclick="jogarQuizz()">
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

promise.then(sucessoBuscarQuizzes);

//obs: está execultando o catch - verificar
promise.catch(console.log('deu errado'));

//função que verifica a resposta correta da alternativa
function resposta(){
    //faz a verificação do ditetorio:
    //questions.(variavel).answers.(variavel).isCorrectAnswer
    console.log("teste");
}

//função que vai para as perguntas
function jogarQuizz(quizzselecionado){
/*  desabillitar:
    .start
    habilitar:
    
*/

console.log('clicou'); //teste

}




//função que cria os quizzes 
function createQuizz(){
/*  desabillitar:

    habilitar:
    
*/

/*quando add quizze(s) 
    desabillitar:

    habilitar:

*/ 

console.log(criarquizz);
}