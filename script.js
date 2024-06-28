document.getElementById('volume-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const area = document.getElementById('area').value;
  const start = parseFloat(document.getElementById('start').value);
  const end = parseFloat(document.getElementById('end').value);
  
  fetch('http://127.0.0.1:5000/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ area, start, end })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = `V: ${data.volume.toFixed(2)}`;
    // Actualizar gráfica
  })
  .catch(error => console.error('Error:', error));
});