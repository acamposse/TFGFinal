var curso = "Bienvenido al simulador de planes de emergencia";
alert(curso);
//Cambiar imagenes
/* CLASE DE ACTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.adhoc();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.bucle();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.bucle2();
        };
    }
    else if (element == 4) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.compensacion();
        };
    }
    else if (element == 5) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.instanciaMul();
        };
    }
    else if (element == 6) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.instanciaMul2();
        };
    }
    else if (element == 7) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.processColaps();
        };
    }
    else if (element == 8) {
        var button = document.getElementById('buttonAct');
        button.onclick = function () {
            obj.tarea();
        };
    }
}
/* CLASE DE CONECTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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
/* CLASE DE DECISION Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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
var obj3 = new decision;
function decidir(element) {
    if (element == 1) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.datos();
        };
    }
    else if (element == 2) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.eventos();
        };
    }
    else if (element == 3) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.secuencia();
        };
    }
    else if (element == 4) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.unionCompleja();
        };
    }
    else if (element == 5) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.unionParalela();
        };
    }
    else if (element == 6) {
        var button = document.getElementById('buttonDec');
        button.onclick = function () {
            obj3.combinacionInclusiva();
        };
    }
}
//# sourceMappingURL=visualizacionSimbolos.js.map