const form = document.getElementById('validar');
const valorA = parseFloat(document.getElementById('info-a').value);
const valorB = parseFloat(document.getElementById('info-b').value);
formEValido = false;

function validaCampo (valorA, valorB){
    return valorB > valorA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    const MensagemSucesso = 'Sucesso';
    const MensagemErro = 'Incorreto Valor B Menor';

    formEValido = validaCampo(valorA, valorB)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.message-sucess')
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        valorA.value = '';
        valorB.value = '';
    }
    else{
    const containerMensagemerro = document.querySelector('.message-erro')
    containerMensagemerro.innerHTML = MensagemErro;
    containerMensagemerro.style.display = 'block';
    }

})