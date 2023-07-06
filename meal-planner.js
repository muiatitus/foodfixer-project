function nextPage(formId) {
    var form = document.getElementById(formId);
    var data = new FormData(form);
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "meal-plan.php");
    xhr.send(data);
  
    xhr.onload = function() {
      if (xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById(formId + 1).style.display = "block";
      }
    };
  }
  
  document.getElementById("next1").onclick = function() {
    nextPage("form1");
  };
  
  document.getElementById("next2").onclick = function() {
    nextPage("form2");
  };