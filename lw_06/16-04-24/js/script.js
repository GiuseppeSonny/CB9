const personPippo = {
  // proprietà
  name: "Pippo",
  surname: "Pluto",
  age: 50,
  speak: () => {
    // metodo
    console.log("Sono Pippo!");
  },
};

// person.speak();

const people = [
  {
    name: "Pippo",
    surname: "Pluto",
    age: 50,
  },
  {
    name: "Topolino",
    surname: "Tada",
    age: 45,
  },
  {
    name: "John",
    surname: "Wick",
    age: 40,
  },
];

// console.log(people);

const quotes = [
  {
    id: 1,
    quote: "Ex Nihilo Nihil Fit",
    author: "Giordano Bruno",
  },
  {
    id: 2,
    quote:
      "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
  {
    id: 3,
    quote:
      "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
  },
  {
    id: 4,
    quote: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote:
      "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
  },
  {
    id: 6,
    quote:
      "It is bad for a young man to sin; but it is worse for an old man to sin.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 7,
    quote:
      "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
    author: "Albert Einstein",
  },
  {
    id: 8,
    quote:
      "O man you are busy working for the world, and the world is busy trying to turn you out.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 9,
    quote:
      "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
    author: "Abdul Kalam",
  },
  {
    id: 10,
    quote:
      "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
    author: "Abraham Lincoln",
  },
  {
    id: 11,
    quote:
      "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
    author: "Oprah Winfrey",
  },
  {
    id: 12,
    quote:
      "Do not get elated at any victory, for all such victory is subject to the will of God.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 13,
    quote:
      "Wear gratitude like a cloak and it will feed every corner of your life.",
    author: "Rumi",
  },
  {
    id: 14,
    quote:
      "If you even dream of beating me you'd better wake up and apologize.",
    author: "Muhammad Ali",
  },
  {
    id: 15,
    quote: "I Will Praise Any Man That Will Praise Me.",
    author: "William Shakespeare",
  },
  {
    id: 16,
    quote: "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
    author: "Mother Teresa",
  },
  {
    id: 17,
    quote:
      "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
    author: "Muhammad Ali",
  },
  {
    id: 18,
    quote:
      "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
    author: "Nelson Mandela",
  },
  {
    id: 19,
    quote:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi",
  },
  {
    id: 20,
    quote: "The less of the World, the freer you live.",
    author: "Umar ibn Al-Khattāb (R.A)",
  },
  {
    id: 21,
    quote: "Respond to every call that excites your spirit.",
    author: "Rumi",
  },
  {
    id: 22,
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    id: 23,
    quote: "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
    author: "Mother Teresa",
  },
  {
    id: 24,
    quote:
      "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
    author: "Rumi",
  },
  {
    id: 25,
    quote: "Happiness comes towards those which believe in him.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 26,
    quote:
      "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 27,
    quote: "When I am silent, I have thunder hidden inside.",
    author: "Rumi",
  },
  {
    id: 28,
    quote:
      "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
    author: "Albert Einstein",
  },
  {
    id: 29,
    quote:
      "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
    author: "Aristotle",
  },
  {
    id: 30,
    quote:
      "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
    author: "Muhammad Ali",
  },
];

// crea un nuovo array composto dai soli nomi dell'autore + la stringa
const authorQuotes = quotes.map((quote) => "Autore: " + quote.author);

// console.log(authorQuotes);

const firstTenQuotes = quotes.filter((quote) => quote.id <= 10);

// console.log(firstTenQuotes);

const firstUmarQuote = quotes.find((quote) => quote.author.includes("Umar"));

// console.log(firstUmarQuote);

// console.log(quotes.reverse());

// const ourMap = (array, callback) => {
//   const finalArr = [];

//   for (let element of array) {
//     finalArr.push(callback(element));
//   }

//   return finalArr;
// };

// const newArray = ourMap(quotes, (quote) => quote.id);
// console.log(newArray);

const quoteItemGen = (content) => {
  const listItemEl = document.createElement("li");

  listItemEl.className = "quote-item";
  listItemEl.textContent = content;

  return listItemEl;
};

const todoListEl = document.querySelector(".quotes-list");

// const todoItemFruits = todoItemGen("Comprare Frutta");
// const todoItemMeats = todoItemGen("Comprare Carne");

// todoListEl.append(todoItemFruits, todoItemMeats);

quotes.map((quote) => todoListEl.append(quoteItemGen(quote.quote)));
