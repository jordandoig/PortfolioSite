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

addHover = () => {
  $(".button").hover(function(){
    $(this).addClass("hover");
  }, function(){
    $(this).removeClass("hover");
  });
}

addClick = () => {
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

showAbout = () => {
  $("#about").show();
}

showContact = () => {
  $("#contact").show();
}

showSkills = () => {
  $("#skills").show();
}

showPortfolio = () => {
  $("#portfolio").show();
  addImgHover();
}

addImgHover = () => {
  $(".ManCan-Map").hover(() => {
    $(".ManCan-Map").attr('src', './images/portfolio/ManCan-Map-Hover.png')
  }, () => {
    $(".ManCan-Map").attr('src', './images/portfolio/ManCan-Map.png')
  })
}

hideAll = () => {
  $("section").hide();
}
