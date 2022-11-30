const yearcolor = document.getElementById("year");

setInterval(() => {
var randomColor = Math.floor(Math.random() * 16777215).toString(16);
yearcolor.style.color = '#' + randomColor;
}, 1000);
document.getElementById("date");
setInterval(() => {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  date.style.backgroundColor = '#' + randomColor;
  }, 1000);
  const done = document.getElementById("done");
  const ongoing = document.getElementById("ongoing");
  const coming = document.querySelectorAll("#coming");

done.style.backgroundColor = "green";
ongoing.style.backgroundColor = "yellow";
for (let i=0; i<coming.length; i++)
{
coming[i].style.backgroundColor = "red";
}
