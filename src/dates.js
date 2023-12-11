// Date du jour
var d = new Date();
var todayd = d.getDate();
var todaym = d.getMonth() + 1;
var todayy = d.getFullYear();
const today = "" + todayd + "/" + todaym + "/" + todayy;
const hebcalUrlforToday = "https://www.hebcal.com/converter?cfg=json&gy=" + todayy + "&gm=" + todaym + "&gd=" + todayd + "&g2h=1";

// Hier
d.setDate(d.getDate() - 1);
var yesterdayd = d.getDate();
var yesterdaym = d.getMonth() + 1;
var yesterdayy = d.getFullYear();
const yesterday = "" + yesterdayd + "/" + yesterdaym + "/" + yesterdayy;
const hebcalUrlforYesterday = "https://www.hebcal.com/converter?cfg=json&gy=" + yesterdayy + "&gm=" + yesterdaym + "&gd=" + yesterdayd + "&g2h=1";

// Demain
d.setDate(d.getDate() + 2);
var tomorrowd = d.getDate();
var tomorrowm = d.getMonth() + 1;
var tomorrowy = d.getFullYear();
const tomorrow = "" + tomorrowd + "/" + tomorrowm + "/" + tomorrowy;
const hebcalUrlforTomorrow = "https://www.hebcal.com/converter?cfg=json&gy=" + tomorrowy + "&gm=" + tomorrowm + "&gd=" + tomorrowd + "&g2h=1";

export {
    today,
    hebcalUrlforToday,
    yesterday,
    hebcalUrlforYesterday,
    tomorrow,
    hebcalUrlforTomorrow
};