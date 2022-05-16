function insert(num) {
    var numero = document.getElementById("expression").innerHTML;
    document.getElementById("expression").innerHTML = numero + num;
}
function clean() {
    document.getElementById("expression").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}
function back() {
    var expression = document.getElementById("expression").innerHTML;
    document.getElementById("expression").innerHTML = expression.substring(
        0,
        expression.length - 1
    );
}
function calcular() {
    var resultado = document.getElementById("expression").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        document.getElementById("resultado").innerHTML = "0";
    }
}

async function salvar() {
    //    debugger;
    const user = document.getElementById("nome").value;
    const expression = document.getElementById("expression").innerText;
    const total = document.getElementById("resultado").innerText;
    const value = total;

    const data = {
        user,
        expression,
        value,
    };
    const api = "http://localhost:8080/cadastrar";

    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(data),
    };
    //  await fetch(api, options).then(response => {response.json()}).then(json =>{

    await fetch(api, options).then((response) => {
        response.json();
    });
    //.then(json =>{
    // if(json.erro()){
    // alert(json.mensagem);
    alert("Registro salvo");
    // }else{
    //  alert(json.mensagem)
    //  }

    //      });
}

async function listar() {
    // debugger;
    const api = "http://localhost:8080/listar";

    //await fetch(api).then((resposta)=>
    // {resposta.json()}).then((data)=>
    // {console.log(data)});

    // comunicação com a API
    const response = await fetch(api);
    const dados = await response.json();
    dados.forEach((item) => {
        const containerDadosElement = document.getElementById("container-calculos");

        //conectar no elemento template

        const template = document.getElementById("calculos-template");

        // clonar template

        const calculosElement = document.importNode(template.content, true);

        //preencher dados

        const itens_calculos = calculosElement.querySelectorAll("span");

        itens_calculos[0].innerText = item.id;
        itens_calculos[1].innerText = item.user;
        itens_calculos[2].innerText = item.expression;
        itens_calculos[3].innerText = item.value;

        //adiciona o elemento filme ao container de dados

        containerDadosElement.append(calculosElement);
    });
}
