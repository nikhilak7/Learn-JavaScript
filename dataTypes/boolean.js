function checkBooleanValue(value) {
  console .log("____________________________________________");
  console.log("Type of element : " + typeof value);
  console.log("Converted into " + typeof Boolean(value));
  console.log("Boolean value " + Boolean(value));
}

checkBooleanValue(6);
checkBooleanValue("");
checkBooleanValue(" ");
checkBooleanValue("nk");
checkBooleanValue(9.99);
checkBooleanValue(-8.456);
checkBooleanValue(null);

