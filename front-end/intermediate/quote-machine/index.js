const quotes = [
  '<p>The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. <span>- Winston Churchill</span></p>',
  '<p>Don\’t let yesterday take up too much of today. <span>- Will Rogers</span></p>',
  '<p>It\’s not whether you get knocked down, It\’s whether you get up. <span>– Vince Lombardi</span></p>',
  '<p>We may encounter many defeats but we must not be defeated. <span>- Maya Angelou</span></p>',
  '<p>We generate fears while we sit. We overcome them by action. <span>- Dr. Henry Link</span></p>',
  '<p>Whether you think you can or think you can\’t, you’re right. <span>- Henry Ford</span></p>',
  '<p>Security is mostly a superstition. Life is either a daring adventure or nothing. <span>- Helen Keller</span></p>',
  '<p>The man who has confidence in himself gains the confidence of others. <span>- Hasidic Proverb</span></p>',
  '<p>The only limit to our realization of tomorrow will be our doubts of today. <span>- Franklin D. Roosevelt</span></p>',
  '<p>Creativity is intelligence having fun. <span>- Albert Einstein</span></p>',
  '<p>What you lack in talent can be made up with desire, hustle and giving 110% all the time. <span>- Don Zimmer</span></p>', 
  '<p>You are never too old to set another goal or to dream a new dream. <span>- C.S. Lewis</span></p>',
  '<p>Reading is to the mind, as exercise is to the body. <span>- Brian Tracy</span></p>', 
  '<p>Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. <span>- Brian Tracy<span></p>'
];

const colors = [
  '"red"',
  '"blue"',
  '"green"',
  '"aquamarine"',
  '"dimgrey"',
  '"lightcoral"',
  '"lightgreen"',
  '"lightslategrey"',
  '"magenta"',
  '"mediumvioletred"',
  '"powderblue"',
  '"seagreen"',
  '"springgreen"',
  '"deeppink"'
];

const newQuote = () => {
  let randomIndex = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomIndex];
}

const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  $('p').css('color', color);
  return color;
}

function setColor() {
  $('body, #new-quote, button').css('background-color', getRandomColor());
}