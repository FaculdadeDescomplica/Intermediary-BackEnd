import { basename, dirname } from 'path';

let nome_do_arquivo = basename('./teste.txt');
let filename = basename('/test/something');

let dir = dirname('/test/something') // /test
let diretorio = dirname('/test/something/file.txt') // /test/something

console.log("nome do arquivo 1 = " + nome_do_arquivo);
console.log("nome do arquivo 2 = " + filename);

console.log("diretorio 1 = " + dir);
console.log("diretorio 2 = " + diretorio);