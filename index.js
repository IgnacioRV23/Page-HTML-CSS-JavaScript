var contador = 1;

const testimonio = () => {

    let flechaAdelante = document.getElementById("flechaAdelante");

    let flechaAtras = document.getElementById("flechaAtras");

    let testimonio1 = document.getElementById("testimonio1");

    let testimonio2 = document.getElementById("testimonio2");

    let testimonio3 = document.getElementById("testimonio3");

    flechaAtras.addEventListener("click", () => {
        switch (contador) {

            //Oculta testimonio1, Muestra testimonio3.
            case 1:
                testimonio1.classList.toggle("testimonio-oculto");
                testimonio3.classList.toggle("testimonio-oculto");

                contador = 3;
            break;

            //Oculta testimonio2, Muestra testimonio1.
            case 2:
                testimonio2.classList.toggle("testimonio-oculto");
                testimonio1.classList.toggle("testimonio-oculto");

                contador = 1;
            break;

            //Oculta testimonio3, Muestra testimonio2.
            case 3:
                testimonio3.classList.toggle("testimonio-oculto");
                testimonio2.classList.toggle("testimonio-oculto");

                contador = 2;
            break;
        }
    })

    flechaAdelante.addEventListener("click", () => {

        switch (contador) {

            //Oculta testimonio1, Muestra testimonio2.
            case 1:
                testimonio1.classList.toggle("testimonio-oculto");
                testimonio2.classList.toggle("testimonio-oculto");

                contador++;
            break;

            //Oculta testimonio2, Muestra testimonio3.
            case 2:
                testimonio2.classList.toggle("testimonio-oculto");
                testimonio3.classList.toggle("testimonio-oculto");
                
                contador++;
            break;

            //Oculta testimonio3, Muestra testimonio1.
            case 3:
                testimonio3.classList.toggle("testimonio-oculto");
                testimonio1.classList.toggle("testimonio-oculto");

                contador = 1;
            break;
        }
    });
}

const menu = () => {

    let containerNav = document.getElementById("containerNav");

    window.addEventListener("scroll", () => {
        containerNav.classList.toggle("despliegaMenu", window.scrollY > 0);
    });
}


menu();
testimonio();