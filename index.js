
axios.defaults.headers.common['Authorization'] = 'ab7bm1T0yWe01HwEY4ZPFk8l';
const objquizz={

}

const promise = axios.post('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes', objquizz);
promise.then(console.log('deu certo'));
promise.catch(console.log('deu errado'));

console.log(objquizz);