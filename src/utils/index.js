
var utils = {
  plural: function (number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
  },
  ru_date: function (date) {

    var date = date.split('.').reverse();
    return new Date(date[0], date[1]-1, date[2], 12,0,0 ).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  }
}


export default utils;
