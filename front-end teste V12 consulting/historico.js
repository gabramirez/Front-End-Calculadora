async function listar() { 

    // debugger;
    const api = 'http://localhost:8080/listar';

    //await fetch(api).then((resposta)=> 
    // {resposta.json()}).then((data)=> 
    // {console.log(data)});


    // comunicação com a API
    const response = await fetch(api)
    const dados = await response.json()
    dados.forEach(item => {
        const containerDadosElement = document.getElementById('container-calculos');

        //conectar no elemento template

        const template = document.getElementById('calculos-template');

        // clonar template

        const calculosElement = document.importNode(template.content, true)

        //preencher dados

        const itens_calculos = calculosElement.querySelectorAll('td')

        itens_calculos[0].innerText = item.id
        itens_calculos[1].innerText = item.user
        itens_calculos[2].innerText = item.expression
        itens_calculos[3].innerText = item.value

        //adiciona o elemento filme ao container de dados

        containerDadosElement.append(calculosElement)
    });
}