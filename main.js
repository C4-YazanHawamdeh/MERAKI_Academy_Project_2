console.log("yazan");
let arr = [
  {
    Name: "golf ball",
    decription:
      "Harry Brown explores the composition, history, kinetic life, and the long deterioration of golf balls, which as it turns out may outlive their hitters by a thousand years, in places far beyond our reach. Golf balls embody our efforts to impose our will on the land",
    //img: (img.src = "./golf.jpg"),
  },
  {
    Name: "Drone",
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    // img: (img.src = "./Drone.jpg"),
  },
];
const divbox = $("<div></div>");

// const imgcard = $("<img></img>");
// imgcard.img.src = "./golf.jpg";
// divbox.append(imgcard);

const h2 = $("<h2></h2>");
h2.text(arr[0].Name);
divbox.append(h2);

const addtocourt = $("<button>add to court</button>");
divbox.append(addtocourt);

const discr = $("<p></p>");
discr.text(arr[0].decription);
divbox.append(discr);

divbox.css({
  width: "180px",
  height: "250px",
  background: "red",
});
const body = $("body");
body.append(divbox);
// divbox.append(arr[0].img);
