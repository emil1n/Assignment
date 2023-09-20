//fromuser
let monthNo = prompt("Enter the month number : ");
//get as string

//assign variables
let season;
let seasoncolor;


//conditional check
switch (monthNo) {
    case "1":
    case "2":
    case "3":
        season = "Spring";
        seasoncolor = "lightgreen";
        break;
    case "4":
    case "5":
    case "6":
        season = "Summer";
        seasoncolor = "indianred";
        break;
    case "7":
    case "8":
    case "9":
        season = "Autum";
        seasoncolor = "lightyellow";
        break;
    case "10":
    case "11":
    case "12":
        season = "Winter";
        seasoncolor = "lightblue";
        break;
}
//display output
document.write(season);
document.body.style.backgroundColor=seasoncolor;