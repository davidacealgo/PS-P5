import Ember from 'ember';

export default Ember.Controller.extend({

text: "",
textFilas: "",
division: null,
logaritmos: null,
promedio: null,
varianza: null,
desviacion:null,
logVeryShort:null,
logShort:null,
logMedium:null,
logLong:null,
logVeryLong:null,
veryShort:null,
short:null,
medium:null,
long:null,
veryLong:null,

actions:{
  metodo_leerArchivo: function(evt){
    var vector_archivos = evt.target.files[0];
    var texto_contenido = "";
    var esto = this;
    if (vector_archivos) {
      var objeto_lector = new FileReader();
      objeto_lector.onload = function(objeto_evento){
        texto_contenido = objeto_evento.target.result;
        document.getElementById("texto").innerHTML = texto_contenido;
        esto.set('text', texto_contenido);
        document.getElementById('dividirInput').hidden = false;
      };
      objeto_lector.readAsText(vector_archivos);
      }else {
       alert("Failed to load file");
      }
   },

   metodo_dividirLOCMetodos: function() {
     var texto = this.get('text');
     var texto_sin_enter = texto.replace(/\n/g, '¬');
     var texto_filas = texto_sin_enter.split("¬");
     var texto_numeros = 0;
     var div = [];
     for (var i = 0; i < texto_filas.length; i++) {
       texto_numeros=texto_filas[i].split(",");
       for (var j = 0; j < texto_numeros.length; j++) {
         if(texto_numeros[j]!=""){
           if(Number.isInteger(parseInt(texto_numeros[j]))){
             div[i] = texto_numeros[1]/texto_numeros[2];
             div[i] = Math.round(div[i]*10000)/10000;
           }else{
              alert('El texto ingresado tiene caracteres no permitidos');
           }
         }
       }
     }

     this.set('division',div);
     document.getElementById('dividirInput').disabled = true;
     document.getElementById('dividirInput').hidden = true;
     document.getElementById('logInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Lineas de codigo / Metodos: " + (div);
   },

   metodo_calcularLog: function() {
     var div = this.get('division');
     var log = [];
     for (var i = 0; i < div.length; i++) {
       log[i] = Math.round(Math.log(div[i])*10000)/10000;
     }
     this.set('logaritmos',log);
     document.getElementById('logInput').disabled = true;
     document.getElementById('logInput').hidden = true;
     document.getElementById('promInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Logaritmos ln(x): " + (log);
   },

   metodo_calcularProm: function() {
     var log = this.get('logaritmos');
     var prom = 0;
     var suma = 0;
     var size = log.length;
     for (var i = 0; i < log.length; i++) {
       suma = suma + log[i];
     }
     prom = suma / size;
     prom = Math.round(prom*10000)/10000;
     this.set('promedio',prom);
     document.getElementById('promInput').disabled = true;
     document.getElementById('promInput').hidden = true;
     document.getElementById('variInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Promedio de logaritmos: " + (prom);
   },

   metodo_calcularVarianza: function() {
     var prom = this.get('promedio');
     var log = this.get('logaritmos');
     var suma = 0;
     var vari = 0;
     var num = 0;
     var denom = log.length - 1;
     for (var i = 0; i < log.length; i++) {
       num = log[i]-prom;
       num = Math.pow(num,2);
       suma = suma + num;
     }
     vari = suma / denom;
     vari = Math.round(vari*10000)/10000;
     this.set('varianza',vari);
     document.getElementById('variInput').disabled = true;
     document.getElementById('variInput').hidden = true;
     document.getElementById('desviInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Varianza: " + (vari);
   },

   metodo_calcularDesviacion: function(){
     var vari = this.get('varianza');
     var desvi = 0;
     desvi = Math.sqrt(vari);
     desvi = Math.round(desvi*10000)/10000;
     this.set('desviacion',desvi);
     document.getElementById('desviInput').disabled = true;
     document.getElementById('desviInput').hidden = true;
     document.getElementById('logRangInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Desviacion Estandar: " + (desvi);
   },

   metodo_cacularRangos: function(){
     var logvs = 0;
     var logs = 0;
     var logm = 0;
     var logl = 0;
     var logvl = 0;
     var prom = this.get('promedio');
     var desvi = this.get('desviacion');
     var dif = 2*desvi;
     logvs = prom - dif;
     logs = prom - desvi;
     logm = prom;
     logl = prom + desvi;
     logvl = prom + dif;
     logvs = Math.round(logvs*10000)/10000;
     logs = Math.round(logs*10000)/10000;
     logm = Math.round(logm*10000)/10000;
     logl = Math.round(logl*10000)/10000;
     logvl = Math.round(logvl*10000)/10000;
     this.set('logVeryShort',logvs);
     this.set('logShort',logs);
     this.set('logMedium',logm);
     this.set('logLong',logl);
     this.set('logVeryLong',logvl);
     document.getElementById('logRangInput').disabled = true;
     document.getElementById('logRangInput').hidden = true;
     document.getElementById('expRangInput').hidden = false;
     document.getElementById("resultado0").innerHTML = "Rangos Logaritmicos";
     document.getElementById("resultado1").innerHTML = "Very Short: " + (logvs);
     document.getElementById("resultado2").innerHTML = "Short: " + (logs);
     document.getElementById("resultado3").innerHTML = "Medium: " + (logm);
     document.getElementById("resultado4").innerHTML = "Long: " + (logl);
     document.getElementById("resultado5").innerHTML = "Very Long: " + (logvl);
   },

   metodo_calcularExpRangos: function() {
     var logvs = this.get('logVeryShort');
     var logs = this.get('logShort');
     var logm = this.get('logMedium');
     var logl = this.get('logLong');
     var logvl = this.get('logVeryLong');
     var vs = Math.exp(logvs);
     var s = Math.exp(logs);
     var m = Math.exp(logm);
     var l = Math.exp(logl);
     var vl = Math.exp(logvl);
     vs = Math.round(vs*10000)/10000;
     s = Math.round(s*10000)/10000;
     m = Math.round(m*10000)/10000;
     l = Math.round(l*10000)/10000;
     vl = Math.round(vl*10000)/10000;
     this.set('veryShort',vs);
     this.set('short',s);
     this.set('medium',m);
     this.set('long',l);
     this.set('veryLong',vl);
     document.getElementById('expRangInput').disabled = true;
     document.getElementById('expRangInput').hidden = true;
     document.getElementById("resultado0").innerHTML = "Rangos Exponenciales";
     document.getElementById("resultado1").innerHTML = "Very Short: " + (vs);
     document.getElementById("resultado2").innerHTML = "Short: " + (s);
     document.getElementById("resultado3").innerHTML = "Medium: " + (m);
     document.getElementById("resultado4").innerHTML = "Long: " + (l);
     document.getElementById("resultado5").innerHTML = "Very Long: " + (vl);
   }
}
});
