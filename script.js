document.getElementById('serviceForm').addEventListener('submit', function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
    this.classList.add('was-validated');
  });
  