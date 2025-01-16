import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions = [
    {
      question: '1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0; Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?',
      answer: 'A variável SOMA será 91.',
      fileName: '1_fibonacci.py',
      showAnswer: false,
      buttonText: 'Mostrar resposta da pergunta 1'
    },
    {
      question: '2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;',
      answer: `def is_fibonacci(number):
    a, b = 0, 1
    fibonacci_sequence = [a, b]
    while b < number:
        a, b = b, a + b
        fibonacci_sequence.append(b)
    if number in fibonacci_sequence:
        return f"The number {number} belongs to the Fibonacci sequence."
    else:
        return f"The number {number} does not belong to the Fibonacci sequence."

if __name__ == "__main__":
    number = 21  # You can change this number
    result = is_fibonacci(number)
    print(result)`,
      fileName: 'C:\\Tecnicotargetsystem\\2_fibonacci_sequence.py',
      showAnswer: false,
      buttonText: 'Mostrar resposta da pergunta 2'
    },
    {
      question: '3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: • O menor valor de faturamento ocorrido em um dia do mês; • O maior valor de faturamento ocorrido em um dia do mês; • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. IMPORTANTE: a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;',
      answer: `import json

def analyze_sales(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)

    sales = data['daily_sales']
    valid_sales = [sale['value'] for sale in sales if sale['value'] > 0]

    if not valid_sales:
        return "No sales data available."

    min_sale = min(valid_sales)
    max_sale = max(valid_sales)
    average_sale = sum(valid_sales) / len(valid_sales)
    days_above_average = len([sale for sale in valid_sales if sale > average_sale])

    return {
        "min_sale": min_sale,
        "max_sale": max_sale,
        "days_above_average": days_above_average
    }

if __name__ == "__main__":
    file_path = "daily_sales.json"
    result = analyze_sales(file_path)
    print(result)`,
      fileName: 'C:\\Tecnicotargetsystem\\3_sales_analyzer.py',
      showAnswer: false,
      buttonText: 'Mostrar resposta da pergunta 3'
    },
     {
      question: '4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado: • SP – R$67.836,43 • RJ – R$36.678,66 • MG – R$29.229,88 • ES – R$27.165,48 • Outros – R$19.849,53 Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.',
      answer: 'SP: 42.31%, RJ: 22.88%, MG: 18.23%, ES: 16.95%, Outros: 12.37%',
      fileName: 'C:\\Tecnicotargetsystem\\4_state_sales.py',
      showAnswer: false,
      buttonText: 'Mostrar resposta da pergunta 4'
    },
    {
      question: '5) Escreva um programa que inverta os caracteres de um string. IMPORTANTE: a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código; b) Evite usar funções prontas, como, por exemplo, reverse;',
      answer: `def reverse_string(text):
    reversed_text = ""
    for i in range(len(text) - 1, -1, -1):
        reversed_text += text[i]
    return reversed_text

if __name__ == "__main__":
    text = "Hello World"
    reversed_text = reverse_string(text)
    print(reversed_text)
`,
      fileName: 'C:\\Tecnicotargetsystem\\5_reverse_string.py',
      showAnswer: false,
      buttonText: 'Mostrar resposta da pergunta 5'
    }
  ];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  toggleAnswer(item: any) {
    item.showAnswer = !item.showAnswer;
    this.cdr.detectChanges();
  }
}
