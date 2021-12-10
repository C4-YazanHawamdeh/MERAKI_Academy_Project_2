console.log("yazan");

let arr = [
  {
    Name: "golf ball",
    price: 5,
    type: "history",
    decription:
      "Harry Brown explores the composition, history, kinetic life, and the long deterioration of golf balls, which as it turns out may outlive their hitters by a thousand years, in places far beyond our reach. Golf balls embody our efforts to impose our will on the land",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "drama",

    price: 8,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "drama",

    price: 5,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "history",

    price: 9,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "drama",

    price: 2,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "history",
    price: 3,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
  {
    Name: "Drone",
    type: "comedy",

    price: 10,
    decription:
      "Drones are in the newspaper, on the TV screen, swarming through the networks, and soon, we're told, they'll be delivering our shopping",
    src: "golf.jpg",
  },
];
const body = $("body");
arrfav = [];
let total = 0;
let favid = $("#favid");
let type = $("#type");
const maindiv = $("<div></div>");

arr.forEach((element) => {
  maindiv.css({
    display: "grid",
  });
  const divbox = $("<div></div>");
  maindiv.append(divbox);
  body.append(maindiv);
  const imgcard = $(`<img/>`);

  imgcard.attr("src", element.src);
  imgcard.css({});
  divbox.append(imgcard);
  imgcard.attr("id", "imgg");

  const h2 = $("<h2></h2>");
  h2.text(element.Name);
  divbox.append(h2);

  const price = $("<h3></h3>");
  price.text("price : " + element.price + "$");
  divbox.append(price);

  const addtocourt = $("<button>add to court</button>");
  addtocourt.attr("id", "test");
  const remove = $("<button>remove</button>");
  const fav = $("<button>fav</button>");
  const p = $("<p>yazan</p>");
  const inp = $("#tot");

  addtocourt.css({
    margin: "0px 5px",
    fontWeight: "700",
  });
  remove.css({
    background: "red",
    fontWeight: "700",
  });
  divbox.append(addtocourt);
  divbox.append(remove);
  divbox.append(fav);

  addtocourt.on("click", () => {
    localStorage.setItem("totalprice", element.price);

    localStorage.setItem("bookname ", element.Name);
    localStorage.setItem("description ", element.decription);

    total = total + parseInt(localStorage.getItem("totalprice"));
    inp.val(total);
  });
  remove.on("click", () => {
    total = total - parseInt(localStorage.getItem("totalprice"));
    inp.val(total);
    localStorage.removeItem("totalprice", element.price);
    localStorage.removeItem("bookname ", element.Name);
    localStorage.removeItem("description ", element.decription);
  });
  fav.on("click", () => {
    // localStorage.setItem("name", element);
    localStorage.setItem("price", element.price);
    localStorage.setItem("decription", element.decription);
    // arrfav.push({
    //   name: localStorage.getItem("name"),
    //   price: localStorage.getItem("price"),
    //   des: localStorage.getItem("decription"),
    // });
  });
  type.on("click", () => {});
  const discr = $("<p></p>");
  discr.text(element.decription);
  divbox.append(discr);

  divbox.css({
    width: "220px",
    height: "350px",
    background: "#595845",
    overflow: "hidden",
    color: "white",
    margin: "10px 10px",
    padding: "10px",
    display: "inline-block",
  });

  body.append(divbox);

  favid.on("click", () => {
    divbox.hide();
    // console.log();
    p.show();
  });
});
