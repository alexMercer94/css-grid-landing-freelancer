document.addEventListener('DOMContentLoaded', () => {
    loadPortafolio();
});

function loadPortafolio() {
    fetch('datos.json')
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let html = '';

            data.portafolio.forEach((element) => {
                html += `
                <div class="elemento">
                    <img src="img/${element.id}.jpg" />
                    <div class="contenido">
                        <h3>${element.nombre}</h3>
                        <p>${element.desc}</>
                    </div>
                </div>
            `;
            });

            document.querySelector('#listado').innerHTML = html;
        });
}
