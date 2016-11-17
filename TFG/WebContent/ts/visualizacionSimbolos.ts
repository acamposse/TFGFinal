var curso:String = "Bienvenido al simulador de planes de emergencia"
alert(curso);

//Cambiar imagenes
/* CLASE DE ACTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.adhoc();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.bucle();
      }
  } else if(element == 3){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.bucle2();
      }
  } else if(element == 4){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.compensacion();
      }
  } else if(element == 5){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.instanciaMul();
      }
  } else if(element == 6){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.instanciaMul2();
      }
  } else if(element == 7){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.processColaps();
      }
  } else if(element == 8){
      var button = document.getElementById('buttonAct');
      button.onclick = function(){
        obj.tarea();
      }
  }
}

/* CLASE DE CONECTIVIDADES Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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

/* CLASE DE DECISION Y REPRESENTACION DE ESTA EN EL CANVAS PEQUE�O */
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

var obj3 = new decision;
function decidir(element){
  if(element == 1){
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.datos();
      }
  } else if (element == 2){
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.eventos();
      }
  } else if(element == 3){ //AVERIGUAR CUAL ES Y DE QUE TIPO ES
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.secuencia();
      }
  } else if(element == 4){
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.unionCompleja();
      }
  } else if(element == 5){
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.unionParalela();
      }
  } else if(element == 6){
      var button = document.getElementById('buttonDec');
      button.onclick = function(){
        obj3.combinacionInclusiva();
      }
  }
}
