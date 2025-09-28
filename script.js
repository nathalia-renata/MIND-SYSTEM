document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    // Seleciona os campos de input pelo seu atributo 'name'
    const emailInput = form.querySelector('input[name="email"]'); 
    const passwordInput = form.querySelector('input[name="senha"]'); 
    
    // Credenciais de acesso corretas
    const CORRECT_EMAIL = 'nathaliaproz99@gmail.com';
    const CORRECT_PASSWORD = 'admin1234';
    
    // Nome do arquivo do seu dashboard (verifique se está correto)
    const DASHBOARD_PAGE = 'dashboard.html'; 

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const enteredEmail = emailInput.value;
        const enteredPassword = passwordInput.value;
        
        // Verifica se as credenciais correspondem
        if (enteredEmail === CORRECT_EMAIL && enteredPassword === CORRECT_PASSWORD) {
            // Sucesso! Redireciona
            alert('Login efetuado com sucesso!'); 
            window.location.href = DASHBOARD_PAGE;
        } else {
            // Falha no login
            alert('Acesso negado. E-mail ou senha incorretos.');
            
            // Limpa apenas a senha para que o usuário não precise digitar o e-mail novamente
            passwordInput.value = ''; 
            passwordInput.focus();
        }
    });
    
    // Funcionalidade do botão "Limpar Campos"
    form.querySelector('.limpar').addEventListener('click', () => {
        form.reset();
    });
});
