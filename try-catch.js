try {
   //intento algo que puede producir un error
   funcion_que_no_existe()
} catch (mierror) {
   if (mierror.description) {
      alert("Error detectado: " + mierror.description)
   } else {
      alert("Error detectado: " + mierror)
   }
}