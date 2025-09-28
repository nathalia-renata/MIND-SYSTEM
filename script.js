/**
 * Função Customizada de Alerta (Modal)
 * Substitui o alert() nativo para funcionar corretamente no ambiente iframe.
 * @param {string} message - A mensagem a ser exibida no modal.
 */
function customAlert(message) {
    const modal = document.createElement('div');
    // Adiciona classes do Tailwind para o layout e background opaco
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4';
    
    // Conteúdo do modal (HTML embutido)
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 scale-100">
            <h3 class="text-xl font-bold text-mind-system mb-3">Atenção!</h3>
            <p class="text-gray-700 mb-4">${message}</p>
            <button class="bg-mind-system text-white px-4 py-2 rounded-lg float-right hover:bg-emerald-600 transition duration-200" onclick="this.closest('.fixed').remove()">
                Entendi
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

/**
 * Inicializa os event listeners após o carregamento completo do DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Localiza o botão principal de CTA pelo ID
    const demoButton = document.getElementById('demoButton');

    if (demoButton) {
        // Atribui a função customAlert ao clique do botão
        demoButton.onclick = () => {
            customAlert('Funcionalidade de Demonstração em Construção. Aguarde!');
        };
    }
});
