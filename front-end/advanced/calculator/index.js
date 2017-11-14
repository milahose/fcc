let input = '';
let result = [];
let key;

const percent = () => {
  input = input.split('')
  input.splice(-2, 0, '.');
  input = input.join('');
  $('#newVal').text(input);
}

const floats = () => {
  input += '.';
  $('#newVal').text(input);
}

const negatives = () => {
  if (input.length > 0) {
    input = `-${input.slice()}`;
  } else {
    input = '-';
  } 
  $('#newVal').text(input);
}

const add = () => {
  if (input.length > 0) {
    result.push(input);
    if (result.length > 0) result.push('+');
  } else {
    $('#newVal').text('0');
  }
  input = '';
}

const subtract = () => {
  if (input.length > 0) {
    result.push(input);
    if (result.length > 0) result.push('-');
  } else {
    $('#newVal').text('0');
  }
  input = '';
}

const multiply = () => {
  if (input.length > 0) {
    result.push(input);
    if (result.length > 0) result.push('*');
  } else {
    $('#newVal').text('0');
  }
  input = '';
}

const divide = () => {
  if (input.length > 0) {
    result.push(input);
    if (result.length > 0) result.push('/');
  } else {
    $('#newVal').text('0');
  }
  input = '';
}

const showResult = () => {
  if (input.length > 0) {
    result.push(input);
  } else {
    $('#newVal').text(result[0]);
    return;
  }

  if (eval(result.join('')).toString().length < 15) {
    $('#newVal').text(eval(result.join('')));
  } else {
    $('#newVal').text(eval(result.join('')).toString().slice(0, 14));
  }
}


$(() => {
  $('body').on('click keydown', (e) => {
    let shifted = e.shiftKey;
    e.preventDefault();
    $('#ac').text('C');

    if (e.type === 'keydown') {
      key = String.fromCharCode(e.which);
    } else {
      key = $(e.target).val();
    }

    if (key.match('[0-9]') && !shifted) {
      input += key;
      $('#newVal').text(key);

      if (input.length < 15) {
        $('#newVal').text(input);
      } else {
        $('#newVal').text(input.slice(0, 14));
      }
    }

    if (e.which === 27 || key === 'clear') {
      $('#ac').text('AC');
      $('#newVal').text('0');
      input = '';
      result = [];
    }

    if (shifted && (e.which === 53) || e.target.id === 'percent') percent();
    if (e.which === 190 || e.target.id === 'float') floats();
    if (e.which === 187 || e.target.id === 'add') add();
    if (e.which === 189 || e.target.id === 'subtract') subtract();
    if ((e.which === 189 && result.length < 1) || e.target.id === 'negative') negatives();
    if ((e.which === 88 || shifted && e.which === 56) || e.target.id === 'multiply') multiply();
    if (e.which === 191 || e.target.id === 'divide') divide();

    $('.math').on('blur', (e) => {
      let target = e.target;
      $(target).css('transition', 'background-color .5s ease-out');
    })

    if (e.which === 13 || key === '=') {
      showResult();
    }
  });
});
