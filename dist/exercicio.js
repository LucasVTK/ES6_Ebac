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
}, {
  aluno: 'Pedro',
  nota: 0
}];
function RetornaAlunoComNotaAcimaOuIgualA6() {
  for (var i = 0; i < arrayDeAlunos.length; i++) {
    if (arrayDeAlunos[i].nota >= 6) {
      console.log(arrayDeAlunos[i].aluno);
    }
  }
  function filtrarAlunoAbaixoDaMedia(aluno) {
    if (aluno.nota <= 5) {
      console.log("aluno abaixo da m\xE9dia: ".concat(aluno.aluno));
    }
  }
  var alunosAbaixo = arrayDeAlunos.filter(filtrarAlunoAbaixoDaMedia);
}
RetornaAlunoComNotaAcimaOuIgualA6();