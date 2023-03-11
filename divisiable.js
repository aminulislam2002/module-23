/**
 * Show output: 1-50
 * 1. If the number is divisiable by 3 then insted of the number, show "foo"
 * 2. If the number is divisiable by 5 then insted of the number, show "bar"
 * 3. If the number is divisiable by 3 and 5 both insted of the number, show "foobar"
 */

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
