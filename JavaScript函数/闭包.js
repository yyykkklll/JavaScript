function outter() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let fn = outter();
fn();
fn();
fn();