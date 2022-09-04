// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

const lines = gets();
const salary = Number(lines);
let percent;

//TODO: Complete os espaços em branco com uma possível solução para o problema:

if (salary >= 0 && salary <= 400.00 ) {
  percent = 15;
} else if (salary >= 400.01 && salary <= 800.00) {
  percent = 12;
} else if (salary >= 800.01 && salary <= 1200.00) {
  percent = 10;
} else if (salary >= 1200.01 && salary <= 2000.00) {
  percent = 7;
} else {
  percent = 4;
}

const reajust = (salary * percent) / 100;
const newSalary = salary + reajust;

print("Novo salario: " + newSalary.toFixed(2));
print("Reajuste ganho: " + reajust.toFixed(2));
print("Em percentual: " + percent + " %");