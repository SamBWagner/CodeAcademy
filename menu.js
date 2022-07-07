/* menu.js is an object exersize from CodeAcademy.
*/





const menu = {
    _meal: '',
    _price: 0,
    set meal (mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Please enter a valid string for meal');
      }
    },
    set price (priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('Please enter a valid number for price');
      }
    },
    get todaysSpecial () {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for \$${this._price}`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  menu.meal = 'Thai Green Curry';
  menu.price = 13;
  
  console.log(menu);
  console.log(menu.todaysSpecial);
  