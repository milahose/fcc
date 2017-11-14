let input = '';
let result = [];

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

  console.log('result', eval(result.join('')));
}


$(() => {
  $(document).on('click keydown', (e) => {
    e.preventDefault();
    $('#ac').text('C');

    let key = $(e.target).val() || String.fromCharCode(e.which);
    let shifted = e.shiftKey;

    if (key.match('[0-9]')) {
      console.log(key);
      input += key;
      $('#newVal').text(key);

      if (input.length < 15) {
        $('#newVal').text(input);
      } else {
        $('#newVal').text(input.slice(0, 14));
      }
    }

    if (e.which === 27 || key === $('#ac')) {
      
    }

    // $('#ac').on('click', () => {
    //   $('#ac').text('AC');
    //   $('#newVal').text('0');
    //   input = '';
    //   result = [];
    // });

    // 187 is +/=
    // 189 is -
    // 27 is esc
    // 13 is enter

    // if ((key.match('[0-9]') && !shifted) || $('button')) {
    //   console.log(key);
    //   $('#newVal').text(key);

    //   //if (key !== 'clear' && key !== '%') {
    //     //$('#newVal').text(key);
    //     // if (input.length < 15) {
    //     //   $('#newVal').text(`${input}`);
    //     // } else {
    //     //   $('#newVal').text(`${input.slice(0, 14)}`);
    //     // }
    //   //}
    // }
  });


  // $(document).on('keydown', (e) => {
  //   let key = String.fromCharCode(e.which);
  //   let shifted = e.shiftKey;

  //   if (e.which === 13) {
  //     showResult();
  //   }
    
  //   if (shifted) {
  //     if (key === '5') {
  //       percent();
  //     } else if (key === '8') {
  //       multiply();
  //     } else if (e.which === 187 && input.length > 0) {
  //       showResult();
  //     }
  //   }

  //   if (key.match('[0-9]') && !shifted) {
  //     $('#ac').text('C');
  //     input += key;
  //     $('#newVal').text(key);
  //     if (result.length < 15) {
  //       $('#newVal').text(`${input}`);
  //     } else {
  //       $('#newVal').text(`${input.slice(0, 14)}`);
  //     }
  //   } 
    
  //   if (e.which === 187) {
  //     add();
  //   } else if (e.which === 189) {
  //     subtract();
  //   } else if (e.which === 88) {
  //     multiply();
  //   } else if (e.which === 191) {
  //     divide();
  //   } else if (e.which === 190) {
  //     floats();
  //   } else if (e.which === 27) {
  //     $('#newVal').text('0');
  //     $('#ac').text('AC');
  //     input = '';
  //     result = [];
  //   }
  // });

  // $('.num').on('click', (e) => {
  //   let target = e.target;
  //   if ($(target).val() !== "") {
  //     input += $(target).val();
  //   }
  // });

  // $('button').on('click', (e) => {
  //   e.preventDefault();
  //   let target = e.target;

  //   if ($(target).val() !== 'clear' && $(target).val() !== '%') {
  //     $('#newVal').text(`${$(target).val()}`);
  //     if (input.length < 15) {
  //       $('#newVal').text(`${input}`);
  //     } else {
  //       $('#newVal').text(`${input.slice(0, 14)}`);
  //     }
  //   }    

  //   $('#ac').text('C');
  //   $('#ac').on('click', () => {
  //     $('#ac').text('AC');
  //     $('#newVal').text('0');
  //     input = '';
  //     result = [];
  //   })
  // });

  // $('.math').on('blur', (e) => {
  //   let target = e.target;
  //   $(target).css('transition', 'background-color .5s ease-out');
  // })

  // $('#percent').on('click', percent);
  // $('#float').on('click', floats);
  // $('#negative').on('click', negatives);
  // $('#add').on('click', add);
  // $('#subtract').on('click', subtract);
  // $('#multiply').on('click', multiply);
  // $('#divide').on('click', divide);
  // $('#equals').on('click', showResult);
});
