function salvarCarro() {

    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const carro = {
        marca: marca,
        modelo: modelo
    };

    localStorage.setItem('carro', JSON.stringify(carro));

    alert('Carro salvo com sucesso!');

    console.log(carro);
}


