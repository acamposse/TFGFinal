//var curso:String = "Bienvenido al simulador de planes de emergencia"
//alert(curso);


/* CLASE DE ACTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
class actividad {
    adhoc(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    bucle(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    bucle2(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    compensacion(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    instanciaMul(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    instanciaMul2(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    processColaps(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
    tarea(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        ctx.fillStyle = 'white';
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
    }
}

var obj = new actividad;
function actividades(element){
  if(element == 1){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.adhoc();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.bucle();
      }
  } else if(element == 3){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.bucle2();
      }
  } else if(element == 4){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.compensacion();
      }
  } else if(element == 5){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.instanciaMul();
      }
  } else if(element == 6){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.instanciaMul2();
      }
  } else if(element == 7){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.processColaps();
      }
  } else if(element == 8){
      var button = document.getElementById('buttonActividad');
      button.onclick = function(){
        obj.tarea();
      }
  }
}

/* CLASE DE CONECTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
class conectividad {
  secuencia(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoSecuencia.png';
  }
  mensaje(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoMensaje.png';
  }
  asociacion(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    ctx.fillStyle = 'white';
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/Conectividad/FlujoAsociacion.png';
  }
}

var obj2 = new conectividad;
function conectar(element){
  if(element == 1){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj2.asociacion();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj2.mensaje();
      }
  } else if(element == 3){
      var button = document.getElementById('buttonConect');
      button.onclick = function(){
        obj2.secuencia();
      }
  }
}

/* CLASE DE EVENTOS Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
class eventos {
    inicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    intermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    finalizacion(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    mensajeInicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    mensajeIntermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    mensajeFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    errorIntermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    errorFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    cancelacionIntermedia(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    cancelacionFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    tiempoInicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    tiempoIntermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    compensacionIntermedia(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    compensacionFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    vinculoInicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    vinculoIntermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    vinculoFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    reglaInicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    reglaIntermedia(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    multipleInicio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    multipleIntermedio(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
    multipleFinal(){
        var can = <HTMLCanvasElement> document.getElementById('canvas2');
        var ctx = can.getContext("2d");
        var img = new Image();
        img.onload = () =>{
          ctx.drawImage(img,0,0);
        }
        img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
}

var obj3 = new eventos;
function evento(element){
   if(element == 1){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.inicio();
      }
   } else if (element == 2){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.intermedio();
      }
   } else if (element == 3){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.finalizacion();
      }
   } else if (element == 4){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.mensajeInicio();
      }
   } else if (element == 5){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.mensajeIntermedio();
      }
   } else if (element == 6){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.mensajeFinal();
      }
   } else if (element == 7){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.errorIntermedio();
      }
   } else if (element == 8){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.errorFinal();
      }
   } else if (element == 9){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.cancelacionIntermedia();
      }
   } else if (element == 10){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.cancelacionFinal();
      }
   } else if (element == 11){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.tiempoInicio();
      }
   } else if (element == 12){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.tiempoIntermedio();
      }
   } else if (element == 13){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.compensacionIntermedia();
      }
   } else if (element == 14){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.compensacionFinal();
      }
   } else if (element == 15){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.vinculoInicio();
      }
   } else if (element == 16){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.vinculoIntermedio();
      }
   } else if (element == 17){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.vinculoFinal();
      }
   } else if (element == 18){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.reglaInicio();
      }
   } else if (element == 19){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.reglaIntermedia();
      }
   } else if (element == 20){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.multipleInicio();
      }
   } else if (element == 21){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.multipleIntermedio();
      }
   } else if (element == 22){
      var button = document.getElementById('buttonEvento');
      button.onclick = function(){
        obj3.multipleFinal();
      }
   }
}
/* CLASE DE DECISION Y REPRESENTACION DE ESTA EN EL CANVAS PEQUEÑO */
class decision {
  datos(){
    var can = <HTMLCanvasElement> document.getElementById('canvas2');
    var ctx = can.getContext("2d");
    var img = new Image();
    img.onload = () =>{
      ctx.drawImage(img,0,0);
    }
    img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
  }
  eventos(){
      var can = <HTMLCanvasElement> document.getElementById('canvas2');
      var ctx = can.getContext("2d");
      var img = new Image();
      img.onload = () =>{
        ctx.drawImage(img,0,0);
      }
      img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnEventos.png';
    }
  //AVERIGUAR IMAGEN Y DE QUE TIPO
  secuencia(){
      var can = <HTMLCanvasElement> document.getElementById('canvas2');
      var ctx = can.getContext("2d");
      var img = new Image();
      img.onload = () =>{
        ctx.drawImage(img,0,0);
      }
      img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/BasadaEnDatos.png';
    }
  unionCompleja(){
      var can = <HTMLCanvasElement> document.getElementById('canvas2');
      var ctx = can.getContext("2d");
      var img = new Image();
      img.onload = () =>{
        ctx.drawImage(img,0,0);
      }
      img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/Decision-unionCompleja.png';
    }
  unionParalela(){
      var can = <HTMLCanvasElement> document.getElementById('canvas2');
      var ctx = can.getContext("2d");
      var img = new Image();
      img.onload = () =>{
        ctx.drawImage(img,0,0);
      }
      img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/Decision-unionParalela.png';
    }
  combinacionInclusiva(){
      var can = <HTMLCanvasElement> document.getElementById('canvas2');
      var ctx = can.getContext("2d");
      var img = new Image();
      img.onload = () =>{
        ctx.drawImage(img,0,0);
      }
      img.src = '/TFG/img/SimbolosBPMN/NodosDeDecision/DecisionoCombinacionInclusiva.png';
    }
}

var obj4 = new decision;
function decidir(element){
  if(element == 1){
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.datos();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.eventos();
      }
  } else if(element == 3){ //AVERIGUAR CUAL ES Y DE QUE TIPO ES
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.secuencia();
      }
  } else if(element == 4){
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.unionCompleja();
      }
  } else if(element == 5){
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.unionParalela();
      }
  } else if(element == 6){
      var button = document.getElementById('buttonDecision');
      button.onclick = function(){
        obj4.combinacionInclusiva();
      }
  }
}
