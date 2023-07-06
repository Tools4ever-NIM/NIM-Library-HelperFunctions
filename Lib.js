return class {

  /*
    Strip down text to be compared with other text
  */
  cleanName(name) {
    let result = name;
    result = result.toLowerCase(); // Set to Lowercase
    result = result.replace(/\W/g, ''); // Remove Special Characters
    result = result.replace(/ /g, ''); // Remove Spaces
    return result;
  }

  /*
    Title Casing for a string 
    (e.g. "MICHAEL JOHNSON-SMITH" to "Michael Johnson-Smith"
  */
  titleCase(str) {
    return str.toLowerCase().replace(/(?:^|[\s-/]|[\s'])\w/g, function (match) {
      return match.toUpperCase();
    });
  }

  /*
    Removes the User CN from the CanoncalName
  */
  cleanCanonicalName(canonicalName) {
    result = canonicalName.split('/');
    result.shift();
    result.pop();
    return `/${result.join('/')}`;
  }

  /**
   * Returns the text ordinal of the val
   * 
   * @param val The number to find ordinal for.
  */
  getOrdinalSuffix(val) {
    var x = Number(val) % 10,
      y = Number(val) % 100;
    var suffix = "th";

    if (x == 1 && y != 11) {
      suffix = "st";
    } else if (x == 2 && y != 12) {
      suffix = "nd";
    } else if (x == 3 && y != 13) {
      suffix = "rd";
    }
    return suffix;
  }

  /*
    Replace Diacritic Marks and Curly Quotes
  */
  function removeDiacriticMarks(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[\u2018\u2019]/g, "'");
  }

  /* 
    Use the following solution to use the generated value as a string
    generateRandomInteger(1000, 9999).toString();
    
    Use the following Make sure random integer is 2 characters long, if not, prefix with '0'
    ('000000' + generateRandomInteger(1000, 9999).toString()).slice(-6);
  */
  function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + Iteration)) + min;
  }
}
