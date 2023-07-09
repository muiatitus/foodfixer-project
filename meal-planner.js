// function nextPage(formId) {
//   var form = document.getElementById(formId);
//   var data = new FormData(form);
  
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "meal-plan.php");
//   xhr.send(data);
  
//   xhr.onload = function() {
//     if (xhr.status == 200) {
//       var response = JSON.parse(xhr.responseText);
//       document.getElementById(formId + 1).style.display = "block";
//     }
//   };
// }
  
// document.getElementById("desiredBtn").onclick = function() {
//   document.getElementById("form1").style("display:none;")
//   document.getElementById("form2").style("display:none;")
//   document.getElementById("form3").style("display:block;")
// };

// Retrieve the mealPlan from localStorage
const mealPlan = JSON.parse(localStorage.getItem('mealPlan'));
console.log(mealPlan);

function getDayOfWeek(index) {
  // Return the corresponding day of the week based on the index
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfWeek[index];
}

//Fetch the meal.json data
fetch('meal.json')
  .then(response => response.json())
  .then(data => {
    //Retrieve the table rows
    const rows = document.querySelectorAll("tbody tr");

    rows.forEach((row, index) => {
      const day = row.querySelector("td:first-child");
      const breakfast = row.querySelector("td:nth-child(2)");
      const lunch = row.querySelector("td:nth-child(3)");
      const supper = row.querySelector("td:nth-child(4)");

      day.textContent = getDayOfWeek(index);
      breakfast.textContent = data.breakfast[mealPlan[0]][mealPlan[1]][mealPlan[2]];
      lunch.textContent = data.lunch[mealPlan[0]][mealPlan[1]][mealPlan[2]];
      supper.textContent = data.dinner[mealPlan[0]][mealPlan[1]][mealPlan[2]];      
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error('Error:', error);
  });

  