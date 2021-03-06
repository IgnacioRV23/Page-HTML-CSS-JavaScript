var contadorTestimonio = 1;

var contadorBanner = 1;

var contadorTestimonio = 1;

//Se crea de manera global estas constantes para ser utilizadas en dos funciones distintas.
const btn1 = document.getElementById("btn1");
        
const btn2 = document.getElementById("btn2");
        
const btn3 = document.getElementById("btn3");


//Variables globales para el apartado de testimonio.
const testimonio1 = document.getElementById("testimonio1");

const testimonio2 = document.getElementById("testimonio2");

const testimonio3 = document.getElementById("testimonio3");

const testimonio = () => {

    let flechaAdelante = document.getElementById("flechaAdelante");

    let flechaAtras = document.getElementById("flechaAtras");


    flechaAtras.addEventListener("click", () => {
        switch (contadorTestimonio) {

            //Oculta testimonio1, Muestra testimonio3.
            case 2:
                testimonio1.classList.add("testimonio-oculto");
                testimonio2.classList.add("testimonio-oculto");
                testimonio3.classList.remove("testimonio-oculto");

                contadorTestimonio = 1;
            break;

            //Oculta testimonio3, Muestra testimonio2.
            case 1:
                testimonio1.classList.add("testimonio-oculto");
                testimonio2.classList.remove("testimonio-oculto");
                testimonio3.classList.add("testimonio-oculto");

                contadorTestimonio = 3;
            break;

            //Oculta testimonio2, Muestra testimonio1.
            case 3:
                testimonio1.classList.remove("testimonio-oculto");
                testimonio2.classList.add("testimonio-oculto");
                testimonio3.classList.add("testimonio-oculto");

                contadorTestimonio = 2;
            break;
        }
    })

    flechaAdelante.addEventListener("click", () => {

        switch (contadorTestimonio) {

            //Oculta testimonio1, Muestra testimonio2.
            case 2:
                testimonio1.classList.add("testimonio-oculto");
                testimonio2.classList.remove("testimonio-oculto");
                testimonio3.classList.add("testimonio-oculto");

                contadorTestimonio = 3;
            break;

            //Oculta testimonio2, Muestra testimonio3.
            case 3:
                testimonio1.classList.add("testimonio-oculto");
                testimonio2.classList.add("testimonio-oculto");
                testimonio3.classList.remove("testimonio-oculto");
                
                contadorTestimonio = 1;
            break;

            //Oculta testimonio3, Muestra testimonio1.
            case 1:
                testimonio1.classList.remove("testimonio-oculto");
                testimonio2.classList.add("testimonio-oculto");
                testimonio3.classList.add("testimonio-oculto");
                
                contadorTestimonio = 1;
            break;
        }
    });
}

const testimonioBanner = () => {
    switch (contadorTestimonio) {
        case 1:
            testimonio1.classList.remove("testimonio-oculto");
            testimonio2.classList.add("testimonio-oculto");
            testimonio3.classList.add("testimonio-oculto");
            contadorTestimonio = 2; //Vale 2 cuando el banner est?? en 1.
        break;

        case 2:
            testimonio1.classList.add("testimonio-oculto");
            testimonio2.classList.remove("testimonio-oculto");
            testimonio3.classList.add("testimonio-oculto");
            contadorTestimonio = 3; //Vale 3 cuando el banner est?? en 2.
        break;

        case 3:
            testimonio1.classList.add("testimonio-oculto");
            testimonio2.classList.add("testimonio-oculto");
            testimonio3.classList.remove("testimonio-oculto");
            contadorTestimonio = 1; //Vale 1 cuando el banner est?? en 3.
        break;
    }
}

const menu = () => {

    let containerNav = document.getElementById("containerNav");

    window.addEventListener("scroll", () => {
        containerNav.classList.toggle("despliegaMenu", window.scrollY > 0);
    });
}

const heroBanner = () => {
    
    const imgBanner = document.getElementById("imgBanner");

    switch (contadorBanner) {
        case 1:
            imgBanner.src = "./img/banner1.jpg";
            btn3.classList.replace("bi-circle-fill", "bi-circle");
            btn1.classList.replace("bi-circle", "bi-circle-fill");
            contadorBanner = 2;
        break;

        case 2:
            imgBanner.src = "./img/banner2.jpg";
            btn1.classList.replace("bi-circle-fill", "bi-circle");
            btn2.classList.replace("bi-circle", "bi-circle-fill");
            contadorBanner = 3;
        break;

        case 3:
            imgBanner.src = "./img/banner3.jpg";
            btn2.classList.replace("bi-circle-fill", "bi-circle");
            btn3.classList.replace("bi-circle", "bi-circle-fill");
            contadorBanner = 1;
        break;
    }
}

const btnBanner = () => {
    btn1.addEventListener("click", () => {
        imgBanner.src = "./img/banner1.jpg";
        btn1.classList.replace("bi-circle", "bi-circle-fill");
        btn2.classList.replace("bi-circle-fill", "bi-circle");
        btn3.classList.replace("bi-circle-fill", "bi-circle");
        contadorBanner = 1;
    });

    btn2.addEventListener("click", () => {
        imgBanner.src = "./img/banner2.jpg";
        btn2.classList.replace("bi-circle", "bi-circle-fill");
        btn1.classList.replace("bi-circle-fill", "bi-circle");
        btn3.classList.replace("bi-circle-fill", "bi-circle");
        contadorBanner = 2;
    });

    btn3.addEventListener("click", () => {
        imgBanner.src = "./img/banner3.jpg";
        btn3.classList.replace("bi-circle", "bi-circle-fill");
        btn1.classList.replace("bi-circle-fill", "bi-circle");
        btn2.classList.replace("bi-circle-fill", "bi-circle");
        contadorBanner = 1;
    });
}

const mostrarDatos = () => {
    const datoEmpresa1 = document.getElementById("datoEmpresa1");
    const datoEmpresa2 = document.getElementById("datoEmpresa2");
    const datoEmpresa3 = document.getElementById("datoEmpresa3");


    window.addEventListener("scroll", () => {
        datoEmpresa1.classList.remove("linea_oculta", window.onpageshow);
        datoEmpresa2.classList.remove("linea_oculta", window.onpageshow);
        datoEmpresa3.classList.remove("linea_oculta", window.onpageshow);
    })
}

const mostrarServicios = () => {
    const containerTarjetas = document.getElementById("containerTarjetas");

    window.addEventListener("scroll", () => {
        containerTarjetas.classList.remove("tarjetas_ocultas", window.onpageshow);
    });
}

const ponerColor = (elemento, empresa) => {
    switch (empresa) {
        case 1:
            elemento.style.color= "#1B80E4";
        break;

        case 2:
            elemento.style.color= "#5865F2";
        break;

        case 3:
            elemento.style.color= "#C51F61";
        break;

        case 4:
            elemento.style.color= "#F34F29";
        break;

        case 5:
            elemento.style.color= "#20C92F";
        break;

        case 6:
            elemento.style.color= "#1FD561";
        break;

        case 7:
            elemento.style.color= "#0274B3";
        break;

        case 8:
            elemento.style.color= "#E60023";
        break;

        case 9:
            elemento.style.color= "#603FAA";
        break;

        case 10:
            elemento.style.color= "#1B80E4";
        break;
    }
}

const quitarColor = (elemento) => {
    if (elemento.style.color != "#000") {
        elemento.style.color = "#000";
    }
}

menu();
testimonio();
setInterval(testimonioBanner, 4000);
setInterval(heroBanner, 2000);
btnBanner();
mostrarDatos();
mostrarServicios();