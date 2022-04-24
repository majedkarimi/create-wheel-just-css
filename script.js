/*-------------------------------------------------------------
    # Work with strings part 1
---------------------------------------------------------------*/
'use strict';
// string
//[0] position
// length
// indexOF() and lastIndexOf()
// slice()

const airline = 'TAP Air Portugal';
const plane = 'A320';
// Here we can get any custom items
console.log(plane[0]); // A َ
console.log(plane[1]); // 3
console.log('B349'[0]); // B

console.log(airline.length); // 16
console.log(plane.length); // 4
console.log('B34967'.length); // 6

// Method of string :
// Shows where it is position (sort as begin)
console.log(airline.indexOf('r')); // at position 6
// Shows where it is position (sort as Last)
console.log(airline.lastIndexOf('r')); // at position  10
console.log(airline.indexOf('Portugal')); // 8

// slice methid :
// The string starts here (start,end)
console.log(airline.slice(4)); // start
console.log(airline.slice(4, 7)); // start , end
// if we are minus both of them so result is answer (7-4=3 => Air)

// we want index first word: خب مقدار اولی یه عدد عست مقدار دومی هم یک عدد هست
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.indexOf(' ')); // 3
//we want index last word :
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// anothe way :
console.log(airline.slice(1, -1)); // - از اخر به ما میدهد

// example  :
const checkMiddleSeat = function (seat) {
  // B and e are middle seats
  const s = seat.slice(-1);

  if (s === 'B' || s === 'E') {
    console.log('this is a middle seat😑');
  } else {
    console.log('oh this is a firs you are loucy🥂');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Why do we have so much method at string?
// when we call method for string, js coverted string to object  :  its name is boxing
// but olso string is a primitive type and not a refrence
// look at this :
console.log(new String('majed'));
console.log(typeof new String('majed')); // converted a object

/*-------------------------------------------------------------
    # Work with strings part 2
---------------------------------------------------------------*/
('use strict');

const airline = 'TAP Air 314';
//1. case-sensitive method :
console.log(airline.toLowerCase()); // all become lowercase
console.log(airline.toUpperCase()); // all become uppercase

// fix capitalization in name
const passenger = 'mAjed';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email (remove space and new line or ...)

const email = 'hello@majed.io';
const loginEmail = '  Hello@majed.io \n';
// old way
const lowerEmail = loginEmail.toLowerCase();
const trimmeEmail = lowerEmail.trim(); // this method use for remove space
console.log(trimmeEmail);
// new way
const normallEmail = loginEmail.toLowerCase().trim();
console.log(normallEmail);

console.log(email === normallEmail); // true

//2. replacing method :

const priceGB = '243,987£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door23. Boarding door 23!';

// this jus replace first word in the string
console.log(announcement.replace('door', 'gate'));
// maybe in the future : replaceAll method add in the js
// for all replace word :
console.log(announcement.replace(/door/g, 'gate'));

//3. boolean methods :
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // flase
console.log(plane.startsWith('Airb')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('oh my god its fucking crayzy !!🥂');
}

// practice more

const checkBaggage = function (item) {
  const baggage = item.toLowerCase(); // this is a very important beacuse we donn't no what is in the string type

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are Not allow in board');
  } else {
    console.log('welcome and good louck');
  }
};
checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun  for protection');

/*-------------------------------------------------------------
    # Work with strings part 3
---------------------------------------------------------------*/
('use strict');

//1. split and join :
//a. split : یگ ورودی دارد و مقدار وردی جدا کننده بین رشته ها میشود تا یک رایه را بسازد
console.log('21+years+of+silence'.split('+'));
console.log('majed karimi'.split(' '));

const [firstName, lastName] = 'majed karimi'.split(' ');
// console.log(lastName);

//b. join make a string : میتوانیم ارایه ساخته شده را به رشته تبدیک کینم
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// make  function do tha cap a first characters in name :
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // we have a two way:
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('majed leili fazel marjan mymom');
capitalizeName('majed karimi');

/*------------------------------------------------------------------------------------------------
2. padding : دو تا ارگومان میگیرد 
 ارگومان اولی طول رشته را تایین میکند 
ارگومان دومی در صورتی که طول رشته مقدار اولی نباشد بقیه را ارکومان دومی تایپ میکند
---------------------------------------------------------------------------------------------------*/
const message = 'go to gate 23!';
console.log(message.padStart(20, '+'));
console.log(message.padStart(25, '*').padEnd(35, '+'));
console.log('majed'.padStart(25, '*').padEnd(35, '*'));

// make a function hide last word creditcard:
const maskCreditcard = function (number) {
  const str = number + ''; // ورودی  اگر عدد باشد به رشته تبدیک میکند
  const last = str.slice(-4); // 4 مقدار اخر را میگیریم
  return last.padStart(str.length, '*'); // نمایش
};
console.log(maskCreditcard(99990000));
console.log(maskCreditcard('098765456785432345'));

//3. Repeat
const message2 = 'Bad weather... All airelide stop fly...';
console.log(message2.repeat('4')); // چهار بار تکرار شد

// mace a function :
const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(3);

