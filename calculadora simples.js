<!DOCTYPE html>
<html>
<head>
  <title>Calculadora Simples</title>
</head>
<body>

<h1>Calculadora Simples</h1>

<input type="text" id="num1">
<select id="operator">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="*">*</option>
  <option value="/">/</option>
</select>
<input type="text" id="num2">
<button onclick="calcular()">Calcular</button>

<p>Resultado: <span id="result"></span></p>

<script>
function calcular() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var operator = document.getElementById('operator').value;
  
  var result;
  
  switch(operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Operador inválido';
  }
  
  document.getElementById('result').innerHTML = result;
}
</script>

</body>
</html>
