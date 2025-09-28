document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Senha pré-definida no Front-end (MUITO INSEGURO para uso real!)
    const CORRECT_PASSWORD = '1234';
    
    // Nome do seu arquivo Dashboard (ajuste se necessário)
    const DASHBOARD_PAGE = 'index.html'; 

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const enteredPassword = passwordInput.value;
        errorMessage.textContent = ''; // Limpa qualquer mensagem de erro anterior

        if (enteredPassword === CORRECT_PASSWORD) {
            // Se a senha estiver correta, redireciona para a página do dashboard
            window.location.href = DASHBOARD_PAGE;
        } else {
            // Se a senha estiver incorreta, exibe a mensagem de erro
            errorMessage.textContent = 'Senha incorreta. Tente novamente.';
            passwordInput.value = ''; // Opcional: limpa o campo de senha
            passwordInput.focus();
        }
    });
});
