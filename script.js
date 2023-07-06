function generateMealPlan() {
    var desiredOutcomes = document.querySelectorAll("input[name='desired_outcomes[]']");
    var dietaryRestrictions = document.querySelectorAll("input[name='dietary_restrictions[]']");
    var cuisinePreferences = document.querySelectorAll("input[name='cuisine_preferences[]']");
  
    var mealPlan = [];
  
    for (var i = 0; i < desiredOutcomes.length; i++) {
      if (desiredOutcomes[i].checked) {
        mealPlan.push(desiredOutcomes[i].value);
      }
    }
  
    for (var i = 0; i < dietaryRestrictions.length; i++) {
      if (dietaryRestrictions[i].checked) {
        mealPlan.push(dietaryRestrictions[i].value);
      }
    }
  
    for (var i = 0; i < cuisinePreferences.length; i++) {
      if (cuisinePreferences[i].checked) {
        mealPlan.push(cuisinePreferences[i].value);
      }
    }
  }