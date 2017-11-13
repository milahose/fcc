$(() => {
  // keep operator button highlighted until new number is clicked
  // have numbers sort of fade on click not just on hover
  // Add key press functionality w/ backspace functionality
  // Get back to this shortly

  // $('.operator').on('click', (e) => {  
  //   let target = e.target;
  //   console.log('target', $(target).val());
  // });
  
  let input = '';
  let result = [];

  $('.num').on('click', (e) => {
    let target = e.target;
    console.log('target', $(target).val());
    input += $(target).val();
  });

  $('.operator').focus((e) => {
    let target = e.target;
    console.log('im in focus', $(target));

    $(target).animate({backgroundColor: '#fff'});
  });

  $('button').on('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if ($(target).val() !== 'clear' && $(target).val() !== '%') {
      $('#newVal').text(`${$(target).val()}`);
      console.log('input', input)
      if (input.length < 15) {
        $('#newVal').text(`${input}`);
      } else {
        $('#newVal').text(`${input.slice(0, 14)}`);
      }
    }    

    $('#ac').text('C');
    $('#ac').on('click', () => {
      $('#ac').text('AC');
      $('#newVal').text('0');
      input = '';
      result = [];
    })
  });

  $('#percent').on('click', (e) => {
    input = input.split('')
    input.splice(-2, 0, '.');
    input = input.join('');
  });

  $('#float').on('click', (e) => {
    input += '.';
  });

  $('#negative').on('click', (e) => {
    if (input.length > 0) {
      input = `-${input.slice()}`;
    } else {
      input = '-';
    } 
  });

  $('#add').on('click', () => {
    result.push(input);
    if (result.length > 0) result.push('+');
    input = '';
  });

  $('#subtract').on('click', () => {
    result.push(input);
    if (result.length > 0) result.push('-');
    input = '';
  });

  $('#multiply').on('click', () => {
    result.push(input);
    if (result.length > 0) result.push('*');
    input = '';
  });

  $('#divide').on('click', () => {
    result.push(input);
    if (result.length > 0) result.push('/');
    input = '';
  });

  $('#equals').on('click', () => {
    if (input.length > 0) {
      result.push(input);
      console.log('the result is ', eval(result.join('')));
    }
    $('#newVal').text(`${eval(result.join(''))}`);
  });
});