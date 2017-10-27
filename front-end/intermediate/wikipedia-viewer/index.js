const wikiArticles = () => {
  let search = $('input').val();
  let query = '';
  let API;

  for (let i = 0; i < search.length; i++) {
    if (search[i] === ' ') {
      query += '%20';
    } else {
      query += search[i];
    }
  }
  
  API = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json`;

  $('input').val('');
  $('input').blur();

  $.ajax({ 
   url: API,
   dataType: "jsonp",
   success: (data) => {
     console.log(data);
    let results = data.query.search;
    for (let i = 0; i < results.length; i++) {
      $('section')
        .append(`<a href="https://en.wikipedia.org/w/index.php?curid=${results[i].pageid}" target="_blank">
        <dl>
          <dt>${results[i].title}</dt>
          <dd>${results[i].snippet}</dd>
        </dl></a>`);
    } 
   }
  });
}

$(document).ready(() => {
  $('input').on('click', () => {
    $('input').val('');
    $('section').empty();
    $('p').show();
  });

  $('input').keypress((e) => {
    let key = e.which;

    if (key === 13) {
      $('p').hide();
      $('section').css('padding-top', '20px');
      wikiArticles();
    }
  });
});