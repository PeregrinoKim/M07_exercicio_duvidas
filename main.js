const form = document.getElementById('validar');

formEValido = false;

function validaCampo (valorA, valorB){
    return valorB > valorA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
const valorA = parseFloat(document.getElementById('info-a').value);
const valorB = parseFloat(document.getElementById('info-b').value);
    const MensagemSucesso = 'Sucesso';
    const MensagemErro = 'Incorreto Valor B Menor';

    formEValido = validaCampo(valorA, valorB)
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.message-sucess')
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.getElementById('info-a').value = '';
        document.getElementById('info-b').value = '';
        document.querySelector('.message-erro').style.display = 'none'
    }
    else{
    const containerMensagemerro = document.querySelector('.message-erro')
    containerMensagemerro.innerHTML = MensagemErro;
    containerMensagemerro.style.display = 'block';
    
    }

})