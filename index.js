let progressBar = require('./progress-bar');

let num = 0, total = 100;
function downloading() {
  if (num <= total) {
    progressBar(num, total);
    num++;
    setTimeout(function(){
      downloading();
    }, 100);
  }
}
downloading();
