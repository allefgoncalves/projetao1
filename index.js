
axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';
const objquizz={

}

let todoOsQuizzes =[];
let meusQuizzes=[];
console.log(meusQuizzes);

function renderizarclearyourQuizzes(x){
    x.innerHTML= `
        <div class="clearYourQuizzes">
            <p>Você não criou nenhum quizz ainda :(</p>
            <button onclick="createQuizz()" data-test="create-btn">Criar Quizz</button>
        </div>
    `;
}

//OBS: tem que ajustar a função
function renderrizarMeusQuizzes(x){
    const elementoUl = document.querySelector('main');
    elementoUl.innerHTML = '';
    x.innerHTML+=
        `<div class="yourQuizzes">
            <div>
                <p>Seus Quizzes</p>
                <button onclick="createQuizz()" data-test="create-btn">+</button>
            </div>            
            <ul></ul>
        </div>`
    const arrayElementos = meusQuizzes.map( function(quizz){
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

//renderizar <main>
function renderizarMenuInicial(){
    let x = document.querySelector('main');
    x.innerHTML= "";
    x.classList.remove('Quizz');
    x.classList.remove('criacao');
    x.classList.add('start');
   
    if(meusQuizzes.length==0){
        renderizarclearyourQuizzes(x);
    }else{
        renderrizarMeusQuizzes(x);
    }
    x.innerHTML+= 
        `<p>Todos os Quizzes</p>
        <ul class = "todos-os-quizzes"> 
        </ul>
    `;
    renderrizarQuizzes()
}

function renderrizarQuizzes(){
    const elementoUl = document.querySelector('.todos-os-quizzes');
    elementoUl.innerHTML = '';

    const arrayElementos = todoOsQuizzes.map( function(quizz){
        return `
        <li>
            <button 
            style="background-image:url(${quizz.image});"
            onclick="jogarQuizz(this)">
                <h2>${quizz.title}</h2>
            </button>
        </li> 
        `;
    });

    arrayElementos.forEach( function (li){
        elementoUl.innerHTML += li;
    });
}

//escreve o quizz na tela
function renderizarQuizz(id){
    let quizz = todoOsQuizzes[id];
    let x = document.querySelector('main');
    x.innerHTML= "";
    x.classList.remove('start');
    x.classList.remove('criacao');
    x.classList.add('Quizz');
    x.innerHTML = `
    <div class="titleQuizz"
    style="background-image:url('https://i.pinimg.com/564x/7a/0d/a2/7a0da2ee83da31a7ed662bb0b8673640.jpg');"
    data-test="banner">
       <p>${quizz.title}</p>
    </div>
    <ul></ul>`;

    //completar a função e movela pra outra função separada
    console.log(quizz);
    const elementoUl = document.querySelector('.titleQuizz>ul');
    elementoUl.innerHTML = '';

    const arrayElementos = quizz.map( function(quizz){
        return `
        <li class="questions" data-test="question">
            <div class="pergunta" 
            data-test="question-title"
            style="background-color:#434CA0;">
                ${quizz.question.title}
            </div>
            <div class="selecao">
                <button onclick="resposta()" data-test="answer">
                    <img src="">
                    <p data-test="answer-text"></p>
                </button>
                <button onclick="resposta()" data-test="answer">
                    <img src="https://i.pinimg.com/564x/7a/0d/a2/7a0da2ee83da31a7ed662bb0b8673640.jpg">
                    <p data-test="answer-text">texto</p>
                </button>
                <button onclick="resposta()" data-test="answer">
                    <img src="https://i.pinimg.com/564x/7a/0d/a2/7a0da2ee83da31a7ed662bb0b8673640.jpg">
                    <p data-test="answer-text">resposta</p>
                </button>
                <button onclick="resposta()" data-test="answer">
                    <img src="https://i.pinimg.com/564x/7a/0d/a2/7a0da2ee83da31a7ed662bb0b8673640.jpg">
                    <p data-test="answer-text">vai espremer</p>
                </button> 
            </div>
        </li>`;
    });

    arrayElementos.forEach( function (li){
        elementoUl.innerHTML += li;
    });
}

function sucessoBuscarQuizzes(resposta){
    todoOsQuizzes = resposta.data;
    console.log(resposta.data);
    renderizarMenuInicial();
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
    console.log("teste-resposta");
}

let id=0;

//função que vai para as perguntas
function jogarQuizz(quizzselecionado){
/*  desabillitar:
    .start
*/
const selecionado = quizzselecionado.querySelector(`h2`).innerHTML;
let id;
//pegando a id do quizz
for(let i=0;i<todoOsQuizzes.length;i++ ){
    if(selecionado === todoOsQuizzes[i].title){
        id=i;
    }
}
document.querySelector(`.start`).classList.add('desabilitado');

renderizarQuizz(id);

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