var counter = 0; 
$(".number-of-counter").html(counter);
function countPlus() { 
counter = counter + 1;
$(".number-of-counter").html(counter); 
} 
function countMinus() {
counter = counter - 1;
$(".number-of-counter").html(counter);
}
function countPlusTwo() {
counter = counter + 2;
$(".number-of-counter").html(counter);
}
function countMinusTwo() {
counter = counter - 2;
$(".number-of-counter").html(counter);
}
function countMultiplication() {
 counter = counter * 2;
$(".number-of-counter").html(counter);
}
