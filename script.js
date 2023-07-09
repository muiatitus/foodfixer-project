var preferences = document.getElementsByClassName("form1");
var restrictions = document.getElementsByClassName("form2");
var outcomes = document.getElementsByClassName("form3");

for (var i = 0; i < restrictions.length; i++) {
  restrictions[i].style.display="none";   
}  

for (var i = 0; i < outcomes.length; i++) {
  outcomes[i].style.display="none";   
}   

document.getElementById("cuisineBtn").onclick = function() {
  
  for (var i = 0; i < preferences.length; i++) {
    preferences[i].style.display="none";   
  }  

  for (var i = 0; i < restrictions.length; i++) {
    restrictions[i].style.display="block";   
  }  

  for (var i = 0; i < outcomes.length; i++) {
    outcomes[i].style.display="none";   
  }   
};
  
document.getElementById("dietaryBtn").onclick = function() {
  for (var i = 0; i < preferences.length; i++) {
    preferences[i].style.display="none";   
  }  

  for (var i = 0; i < restrictions.length; i++) {
    restrictions[i].style.display="none";   
  }  

  for (var i = 0; i < outcomes.length; i++) {
    outcomes[i].style.display="block";   
  }  
};

function generateMealPlan() {    
    
  var desiredOutcomes = document.querySelectorAll("input[name='desired_outcomes[]']");
  var dietaryRestrictions = document.querySelectorAll("input[name='dietary_restrictions[]']");
  var cuisinePreferences = document.querySelectorAll("input[name='cuisine_preferences[]']");  

  var mealPlan = [];
    
  for (var i = 0; i < cuisinePreferences.length; i++) {
    if (cuisinePreferences[i].checked) {
      mealPlan.push(cuisinePreferences[i].value);
    }
  }
      
  for (var i = 0; i < dietaryRestrictions.length; i++) {
    if (dietaryRestrictions[i].checked) {
      mealPlan.push(dietaryRestrictions[i].value);
    }
  }

  for (var i = 0; i < desiredOutcomes.length; i++) {
    if (desiredOutcomes[i].checked) {
      mealPlan.push(desiredOutcomes[i].value);
    }
  }
   
  // Store the generated meal plan in localStorage
  localStorage.setItem('mealPlan', JSON.stringify(mealPlan));

  window.location.href = 'generate.html';
}