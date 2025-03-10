"use strict";

var arrayDeAlunos = [{
  aluno: 'Lucas',
  nota: 8
}, {
  aluno: 'Anna',
  nota: 10
}, {
  aluno: 'Jorge',
  nota: 2
}, {
  aluno: 'Matheus',
  nota: 6
}];
function RetornaAlunoComNotaAcimaOuIgualA6() {
  for (var i = 0; i < arrayDeAlunos.length; i++) {
    if (arrayDeAlunos[i].nota >= 6) {
      console.log(arrayDeAlunos[i].aluno);
    } else {}
  }
}
RetornaAlunoComNotaAcimaOuIgualA6();