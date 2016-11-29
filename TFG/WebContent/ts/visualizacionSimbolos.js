//var curso:String = "Bienvenido al simulador de planes de emergencia"
//alert(curso);
/* CLASE DE ACTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
var actividad = (function () {
    function actividad() {
    }
    actividad.prototype.adhoc = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.bucle = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.bucle2 = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.compensacion = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.instanciaMul = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.instanciaMul2 = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.processColaps = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    actividad.prototype.tarea = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    return actividad;
}());
var obj = new actividad;
function actividades(element) {
    if (element == 1) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.adhoc();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.bucle();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.bucle2();
        };
    }
    else if (element == 4) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.compensacion();
        };
    }
    else if (element == 5) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.instanciaMul();
        };
    }
    else if (element == 6) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.instanciaMul2();
        };
    }
    else if (element == 7) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.processColaps();
        };
    }
    else if (element == 8) {
        var button = document.getElementById('buttonActividad');
        button.onclick = function () {
            obj.tarea();
        };
    }
}
/* CLASE DE CONECTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
var conectividad = (function () {
    function conectividad() {
    }
    conectividad.prototype.secuencia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    };
    conectividad.prototype.mensaje = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoMensaje.png';
    };
    conectividad.prototype.asociacion = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoAsociacion.png';
    };
    return conectividad;
}());
var obj2 = new conectividad;
function conectar(element) {
    if (element == 1) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj2.asociacion();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj2.mensaje();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonConect');
        button.onclick = function () {
            obj2.secuencia();
        };
    }
}
/* CLASE DE EVENTOS Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
var eventos = (function () {
    function eventos() {
    }
    eventos.prototype.inicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.intermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.finalizacion = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.mensajeInicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.mensajeIntermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.mensajeFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.errorIntermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.errorFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.cancelacionIntermedia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.cancelacionFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.tiempoInicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.tiempoIntermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.compensacionIntermedia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.compensacionFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.vinculoInicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.vinculoIntermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.vinculoFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.reglaInicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.reglaIntermedia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.multipleInicio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.multipleIntermedio = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    eventos.prototype.multipleFinal = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    return eventos;
}());
var obj3 = new eventos;
function evento(element) {
    if (element == 1) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.inicio();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.intermedio();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.finalizacion();
        };
    }
    else if (element == 4) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.mensajeInicio();
        };
    }
    else if (element == 5) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.mensajeIntermedio();
        };
    }
    else if (element == 6) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.mensajeFinal();
        };
    }
    else if (element == 7) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.errorIntermedio();
        };
    }
    else if (element == 8) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.errorFinal();
        };
    }
    else if (element == 9) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.cancelacionIntermedia();
        };
    }
    else if (element == 10) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.cancelacionFinal();
        };
    }
    else if (element == 11) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.tiempoInicio();
        };
    }
    else if (element == 12) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.tiempoIntermedio();
        };
    }
    else if (element == 13) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.compensacionIntermedia();
        };
    }
    else if (element == 14) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.compensacionFinal();
        };
    }
    else if (element == 15) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.vinculoInicio();
        };
    }
    else if (element == 16) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.vinculoIntermedio();
        };
    }
    else if (element == 17) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.vinculoFinal();
        };
    }
    else if (element == 18) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.reglaInicio();
        };
    }
    else if (element == 19) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.reglaIntermedia();
        };
    }
    else if (element == 20) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.multipleInicio();
        };
    }
    else if (element == 21) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.multipleIntermedio();
        };
    }
    else if (element == 22) {
        var button = document.getElementById('buttonEvento');
        button.onclick = function () {
            obj3.multipleFinal();
        };
    }
}
/* CLASE DE DECISION Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
var decision = (function () {
    function decision() {
    }
    decision.prototype.datos = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    decision.prototype.eventos = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnEventos.png';
    };
    //AVERIGUAR IMAGEN Y DE QUE TIPO
    decision.prototype.secuencia = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    };
    decision.prototype.unionCompleja = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/Decision-unionCompleja.png';
    };
    decision.prototype.unionParalela = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/Decision-unionParalela.png';
    };
    decision.prototype.combinacionInclusiva = function () {
        var can = document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        };
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/DecisionoCombinacionInclusiva.png';
    };
    return decision;
}());
var obj4 = new decision;
function decidir(element) {
    if (element == 1) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.datos();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.eventos();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.secuencia();
        };
    }
    else if (element == 4) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.unionCompleja();
        };
    }
    else if (element == 5) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.unionParalela();
        };
    }
    else if (element == 6) {
        var button = document.getElementById('buttonDecision');
        button.onclick = function () {
            obj4.combinacionInclusiva();
        };
    }
}
//# sourceMappingURL=visualizacionSimbolos.js.map