// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film.

// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);


var movie1 = new Movie("The Lion King", "Disney", "PG");

var movie2 = new Movie("Jaws", "Universal Pictures", "PG-13");

var movie3 = new Movie("Frozen", "Disney", "PG");

var movie4 = new Movie("The Godfather", "Paramount Pictures", "R");

const movies = [movie1, movie2, movie3, movie4];
const pgMovies = Movie.getPG(movies);
pgMovies.forEach(movie => console.log(movie.title));

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
    constructor(rradius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return `${this.radius}`
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return `${this.color}`
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return `${Math.PI * Math.pow(this.radius, 2)}`
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

}



// 3. Write a “person” class to hold all the details.

class Person {
    constructor(name, age, gender, number, address, email, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.number = number;
        this.address = address;
        this.email = email;
        this.occupation = occupation;
    }

    toString() {
        return `Name: ${this.name},
        Age: ${this.age},
        Gender: ${this.gender},
        Contact number: ${this.number},
        address: ${this.address},
        email id: ${this.email},
        Occupation: ${this.occupation}`;
    }
}
const person1 = new Person("Kumar", 23, "Male", 5487258349, "chennai", "kumar@gmail.com", "Software Engineer");
console.log(person1.toString());

// 4. write a class to calculate the Uber price.

class UberPricer {
    constructor(Fare, costPerKm, costPerMinute) {
      this.Fare = Fare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time) {
      const fare = this.Fare + (distance * this.costPerKm) + (time * this.costPerMinute);
      return fare;
    }
  }
  
  const pricer = new UberPricer(10, 1.5, 5);
  const distance = 10; 
  const time = 20; 
  const price = pricer.calculatePrice(distance, time);
  console.log(`the Uber ride price is Rs. ${price}`);



      
