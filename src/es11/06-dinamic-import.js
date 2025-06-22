const btnStart = document.getElementById('btn-start');
const formContainer = document.getElementById('form-container');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-name');
const loading = document.getElementById('loading');

// Mostrar input al hacer clic en "Ingresar nombre"
btnStart.addEventListener('click', () => {
  formContainer.style.display = 'block';
  nameInput.focus();
});

// Cuando se envía el nombre
submitBtn.addEventListener('click', async () => {
  const nombre = nameInput.value.trim();

  if (!nombre) {
    alert('Por favor, escribe tu nombre.');
    return;
  }

  // Mostrar carga UX
  loading.style.display = 'block';

  try {
    const { saludar } = await import('./module.js');

    // Simulación UX: espera de 1.5 segundos
    setTimeout(() => {
      loading.style.display = 'none';
      saludar(nombre);
    }, 1500);
  } catch (error) {
    loading.style.display = 'none';
    console.error('❌ Error al importar el módulo:', error);
    alert('Algo salió mal. Intenta de nuevo.');
  }
});
