function isValidEmail(email) {
  if (!(/@{1}/).test(email)) return false;

  let separated = email.split('@');
  let local = separated[0];
  let domain = separated[1];

  return isValidLocal(local) && isValidDomain(domain);       
  
}

function isValidDomain(domain) {
  let separated = domain.split('.');

  return separated.length >= 2 &&
         separated.filter(part => /\w+/.test(part)).length === separated.length &&
         separated.every(part => !(/[^a-z]/i.test(part)));
         
}

function isValidLocal(local) {
  return (/\w+/).test(local) && /* 1 + alphanumeric characters */
         !(/[^a-z0-9]/i).test(local) /* no non alphanumeric characters */

}

// One line solution

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email)
}
console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
