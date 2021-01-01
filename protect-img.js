document.write(unescape('%3Cscript src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"%3E%3C/script%3E'));
function logo(url, link_to){
  document.write(unescape('%3Ca href="' + link_to + '"%3E%3Cimg id="protected-logo" src="' + url + '"%3E%3E%3C/a%3E'));
  $('#protected-logo').mousedown(function (e) {
    if(e.button == 2) {
     alert('This Logo is protected');
    }
  }
}
