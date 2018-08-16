// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function powerN(base, exp) {
  if (exp < 1) {
    return 1;
  } else {
    return base * (powerN(base, exp - 1))
  }
}

console.log(powerN(2, 10));