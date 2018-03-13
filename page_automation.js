var page = require('webpage').create();
//console.log('The default user agent is ' + page.settings.userAgent);
//page.settings.userAgent = 'SpecialAgent';
page.open('https://www.toofaced.com/i-dream-in-chocolate/526721.html?cgid=gifts#start=1', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {
    var ua = page.evaluate(function() {
      var res_array = [];
      res_array[0]= document.getElementById('add-to-cart').textContent;
      res_array[1] = document.getElementsByClassName('price-sales')[0].textContent;
     return res_array;      
    });
    for(var i = 0; i < ua.length; i++) {
      console.log(ua[i]);
    }
  }
  phantom.exit();
});
