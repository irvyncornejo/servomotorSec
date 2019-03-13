document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  var instance = M.Carousel.init({
fullWidth: true,
indicators: true
  });
  var instance = M.Carousel.init({
    fullWidth: true
  });
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.materialboxed');
var instances = M.Materialbox.init(elems);
});
document.getElementById('codigo').addEventListener('change', selecSeccion);
  function selecSeccion(){
    if (document.getElementById('codigo').value === "ATC"){
      alert('Estás listo para construir');
      document.getElementById('guia').innerHTML =
      `<div class="col s2"></div>
      <div class="col s9">
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSx-QHxZCzDPL-amFKkNxMisS1lWMGWjAWGR5VIkM_ot0How0iVOPeNVC6gfbN7CvmqKlgb3ydHAeV3/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"</iframe>
      <div class="col s1"></div>
    </div>
`
    }
     if (document.getElementById('codigo').value != "ATC"){
      alert('Aún no cumples el reto' );
    }
      document.getElementById('codigo').value = "";
  }