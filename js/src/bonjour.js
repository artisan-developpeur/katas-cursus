class Bonjour {
  constructor(_clock) {
    this.clock = _clock;
  }

  greet(firstName){
      const clean = firstName.trim();
      const value = clean.charAt(0).toUpperCase() + clean.slice(1);

      const hour = this.clock.getHours();
      let salutation = "Bonjour"
      if (hour >= 18)
        salutation =  "Bonsoir";
      return salutation + " " + value;
  }
}

module.exports = Bonjour;