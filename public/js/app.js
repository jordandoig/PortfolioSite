var projects = [{
  title: "title",
  desc: "desc"
},
{
  title: "title2",
  desc: "desc2"
}];

$('document').ready(function(){
  addHover();
  addClick();
  hideAll();
  showPortfolio();
})

function addHover () {
  $(".button").hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  });
}

function addClick () {
  $(".button").click(function(){
    hideAll();
    switch (this.id) {
      case "Skills":
        showSkills();
        break;
      case "Contact":
        showContact();
        break;
      case "About":
        showAbout();
        break;
      default:
        showPortfolio();
    }
  })
}

function showPortfolio () {
  $("#portfolio").show();
}

function showAbout () {
  $("#about").show();
}

function showContact () {
  $("#contact").show();
}

function showSkills () {
  $("#skills").show();
}

function hideAll () {
  $("section").hide();
}
