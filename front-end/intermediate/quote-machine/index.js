const quotes = [
  'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill',
  'Don\’t let yesterday take up too much of today. - Will Rogers',
  'It\’s not whether you get knocked down, It\’s whether you get up. – Vince Lombardi',
  'We may encounter many defeats but we must not be defeated. - Maya Angelou',
  'We generate fears while we sit. We overcome them by action. - Dr. Henry Link',
  'Whether you think you can or think you can\’t, you’re right. - Henry Ford',
  'Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller',
  'The man who has confidence in himself gains the confidence of others. - Hasidic Proverb',
  'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
  'Creativity is intelligence having fun. - Albert Einstein',
  'What you lack in talent can be made up with desire, hustle and giving 110% all the time. - Don Zimmer', 
  'You are never too old to set another goal or to dream a new dream. - C.S. Lewis',
  'Reading is to the mind, as exercise is to the body. - Brian Tracy', 
  'Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. - Brian Tracy'
];

const newQuote = () => {
  let randomIndex = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomIndex];
}