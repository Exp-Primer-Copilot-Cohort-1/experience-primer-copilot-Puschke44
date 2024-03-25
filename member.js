function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var skills = document.getElementById("skills");
  var skillsValue = skills.options[skills.selectedIndex].value;
  var skillsText = skills.options[skills.selectedIndex].text;
  var skillsMember = document.getElementById("skillsMember");
  skillsMember.innerHTML = memberText + " " + skillsText;
}