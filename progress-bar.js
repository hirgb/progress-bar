const slog = require('single-line-log').stdout;

let progressBar = function(completed, total, description = 'Progress', bar_length = 40) {
    let cmdText = '';
    if (completed == total) {
        cmdText = description + ': 100% ' + completed + '/' + total;
        slog(cmdText);
        console.log('\n');
        return;
    } else {
      let percent = (completed / total).toFixed(4);
      let cell_num = Math.floor(percent * bar_length);
      let empty_num = bar_length - cell_num;

      let cell = '';
      while (cell_num--) {
        cell += '█';
      }

      let empty = '';
      while (empty_num--) {
        empty += '░';
      }
      cmdText = description + ': ' + (100 * percent).toFixed(2) + '%' + cell + empty + ' ' + completed + '/' + total;
      slog(cmdText);
      return;
    }
}

module.exports = progressBar;
