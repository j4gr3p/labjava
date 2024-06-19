const boton = document.querySelector("#cons");
const endpoint = "https://jsonplaceholder.typicode.com/posts";

boton.addEventListener("click", function () {
    console.log("Log de eventos")
    Consultaext(endpoint);
})

async function Consultaext(endpoint) {
    try {
        const OkRespuesta = await fetch(endpoint)
        if (OkRespuesta.ok) {
            console.log(OkRespuesta);
        }
        else {
            throw new Error('Red error: ' + OkRespuesta.status);
        }
        const renderJSON = await OkRespuesta.json();
        Writting(renderJSON.slice(0, 10));
    } catch (error) {
        console.log("Error: ", error);
    }
}

function Writting(DatosExp) {
    const posts = document.querySelector('.post');

    posts.innerHTML = DatosExp.map(function (item) {
        return `<div class="post">
                    <p>Usuario: ${item.userId}</p>
                    <p>Id: ${item.id}</p>
                    <h4>${item.title}</h4>
                    <p>${item.body}</p>
                    <hr>
                </div>`
    }).join('');

}