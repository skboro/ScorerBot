
var request = require("request"),
cheerio = require("cheerio"),
goalUrl = "http://www.goal.com/en/match";
matchId = "/united-states-vs-colombia/2178783";
matchId = "/philadelphia-union-vs-whitecaps/2192570";

request(goalUrl + matchId, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
	  time = $("[class='vs']").html();
      home = $("[class='home-score']").html();
      away = $("[class='away-score']").html();
      hTeam = $("[class='home']").find('div > a > h2').html();
      aTeam = $("[class='away']").find('div > a > h2').html();
	  hScorers = $("[data-omniture-icid='HDH']").find('div > ul > li > a').text();
	  hScorers = hScorers.replace('\'+', '"');
	  hScorers = hScorers.replace(/'/g, '\' ');
	  hScorers = hScorers.replace(/"/g, '\'+ ');
	  aScorers = $("[data-omniture-icid='HDA']").find('div > ul > li > a').text();
	  aScorers = aScorers.replace('\'+', '"');
	  aScorers = aScorers.replace(/'/g, '\' ');
	  aScorers = aScorers.replace(/"/g, '\'+ ');
    console.log(hTeam + " " + home + " [" + time + "] " + away + " " + aTeam);
	if(hScorers) console.log("for " + hTeam + " " + hScorers);
	if(aScorers) console.log("for " + aTeam + " " + aScorers);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
