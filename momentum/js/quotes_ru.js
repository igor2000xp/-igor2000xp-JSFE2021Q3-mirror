const quoteDoc = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
let numQuote = 1;


async function getQuotes() {  
  const quotes = 'quotes_ru.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  const num1 = '1';

  quoteDoc.textContent = "\"" + data[1].text + "\"";
  quoteAuthor.textContent = data[1].author;
}


getQuotes();


