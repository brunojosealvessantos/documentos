function search() {
    var cpf = document.getElementById('inputCPF').value;
    console.log(cpf);
    validation(cpf);
}

function validation(cpfValue) {
    var storage = firebase.storage();
    storage.ref().child(cpfValue).listAll().then(function(todosArquivos) {

        if (todosArquivos.items.length >= 1) {
            next(cpfValue);
        } else {
            alert('CPF não cadastrado');
        }
    }).catch(function(error) {
        console.log('ERRO', error);
    });
}

function back() {
    document.getElementById("busca").removeAttribute("class", "ocultar");
    document.getElementById('resultado').setAttribute("class", "ocultar");
    document.getElementById("inputCPF").value = '';
}

function next(cpfValue) {
    document.getElementById('busca').setAttribute("class", "ocultar");
    document.getElementById("resultado").removeAttribute("class", "ocultar");
    document.getElementById('tituloDocumentos').innerHTML = 'Certificados de: ' + cpfValue;
}