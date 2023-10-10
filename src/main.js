document.getElementById("FormProbasimp").addEventListener('submit', Calcularsimple)

function Calcularsimple(e) {
    /*OBTENEMOS LOS DATOS MEDIANTE LA ID */
    const resultadofavorablesA = document.getElementById("probabi1").value
    const resultadofavorablesB = document.getElementById("probabi2").value
    const resultado = resultadofavorablesA / resultadofavorablesB;

    /*DICCIONARIO DE DATOS O OBJETO */
    const print = {
        CasosfavorablesB: resultadofavorablesB,
        CasosFavorablesA: resultadofavorablesA,
        Probabilidad: resultado
    }

    /* Obtenemos datos del dicionario de datos o el objeto llamado print*/
    let probabilidadA = print.CasosFavorablesA;
    let probabilidadB = print.CasosfavorablesB;
    let Probasimple = print.Probabilidad;

    /*IMPRIMIMOS LA DATOS*/
    const verprobability = document.getElementById("print");
    verprobability.innerHTML = " ";
    verprobability.innerHTML += `<div class="row">
        <div class="col-md-8 col-12">
        <div class="card">
        <div class="card-body">
        <h4><em>Probabilidad Simple<em></h4>
        <p>Probabilidad-A: ${probabilidadA} <br>
        Probabilidad-B: ${probabilidadB} <br>
        La probabilidad es: ${Probasimple}</p>
        <a class ="btn btn-danger"></a>
        <a class ="btn btn-primary"></a>
        <a class ="btn btn-dark"></a>
        <a class ="btn btn-success"></a>
        <a class ="btn btn-warning"></a>
        <a class ="btn btn-info"></a>
        </div></div></div></div>`;
    e.preventDefault();
}

document.getElementById("FormProbacond").addEventListener('submit',CalcularCondicional )
function CalcularCondicional(e) {
    /*OBTENEMOS LOS DATOS MEDIANTE LA ID */
    const probabilidaA = document.getElementById("proba1").value
    const probabilidaB = document.getElementById("proba2").value
    const probabilidaAnB = probabilidaA * probabilidaB;
    const resultado = probabilidaAnB / probabilidaB;

    /*DICCIONARIO DE DATOS O OBJETO */
    const print = {
        probabilidadB: probabilidaB,
        probabilidadA: probabilidaA,
        probabilidadAnB: probabilidaAnB,
        Probabilidad: resultado
    }

    /* Obtenemos datos del dicionario de datos o el objeto llamado print*/
    let ProbabilidadA = print.probabilidadA;
    let ProbabilidadB = print.probabilidadB;
    let ProbabilidadAnB = print.probabilidadAnB
    let ProbaCondicional = print.Probabilidad;

    /*IMPRIMIMOS LA DATOS*/
    const verprobability = document.getElementById("print-condicional");
    verprobability.innerHTML = " ";
    verprobability.innerHTML += `<div class="row">
        <div class="col-md-8 col-12">
        <div class="card">
        <div class="card-body">
        <h4><em>Probabilidad Condicional<em></h4>
        <p>Probabilidad-A: ${ProbabilidadA} 
        <br>
        Probabilidad-B: ${ProbabilidadB} 
        <br>
        Probabilidad-AnB: ${ProbabilidadAnB}
        <br>
        La probabilidad es: ${ProbaCondicional}</p>
        <a class ="btn btn-danger"></a>
        <a class ="btn btn-primary"></a>
        <a class ="btn btn-dark"></a>
        <a class ="btn btn-success"></a>
        <a class ="btn btn-warning"></a>
        <a class ="btn btn-info"></a>
        </div></div></div></div>`;
    e.preventDefault();
}