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
    Name: "Driver's License",
    type: "drama",

    price: 8,
    decription:
      "A classic teenage fetish object, the American driver’s license has long symbolized freedom and mobility in a nation whose design assumes car travel and whose vastness rivals continents",
    src: "drive.jpg",
  },
  {
    Name: "Glass",
    type: "drama",

    price: 5,
    decription:
      "Pause and look around: you will see that you are surrounded by glass. It reflects and refracts light through your windows; it encircles a glowing filament above you; it's in a mirror hanging on the wall",
    src: "glass.jpg",
  },
  {
    Name: "waste",
    type: "history",

    price: 9,
    decription:
      "Though we try to imagine otherwise, waste is every object, plus time. Whatever else an object is, it's also waste-or was, or will be",
    src: "waste.jpg",
  },
  {
    Name: "hood",
    type: "drama",

    price: 2,
    decription:
      "We all wear hoods: the Grim Reaper, Red Riding Hood, torturers, executioners and the executed, athletes, laborers, anarchists,",
    src: "hood.jpg",
  },
  {
    Name: "bread",
    type: "history",
    price: 3,
    decription:
      "Bread is an object that is always in process of becoming something else: flower to grain, grain to dough, dough to loaf, loaf to crumb",
    src: "bread.jpg",
  },
  {
    Name: "hair",
    type: "comedy",

    price: 10,
    decription:
      "Hair, a primary marker of our mammalian nature, is an extraordinary indicator of economic and social standing, political orientation",
    src: "hair.jpg",
  },
];
const body = $("body");
arrfav = [];
let total = 0;
let favid = $("#favid");
let type = $("#type");
let arrdiv = [];
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

  const addtocourt = $("<button>add to cart</button>");
  addtocourt.attr("id", "test");
  const remove = $("<button>remove</button>");
  const fav = $("<button>fav</button>");
  const p = $("<p>yazan</p>");
  const inp = $("#tot");

  addtocourt.css({
    margin: "0px 5px",
    fontWeight: "700",
    height: "40px",
  });
  remove.css({
    background: "red",
    fontWeight: "700",
    height: "40px",
    border: "2px solid black",
  });
  fav.css({
    background: "blue",
    fontWeight: "700",
    height: "40px",
    border: "2px solid black",
    margin: "0px 5px",
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
      localStorage.getItem("name", ee.Name);
     localStorage.getItem("price", ee.price);
     localStorage.getItem("decription", ee.decription);
    });
   
  arrdiv.push(divbox);

  const discr = $("<p></p>");
  discr.text(element.decription);
  divbox.append(discr);

  divbox.css({
    width: "220px",
    height: "350px",
    background: "#595845",
    overflow: "hidden",
    color: "white",
    margin: "20px 40px",
    padding: "30px",
    display: "inline-block",
  });

  body.append(divbox);

  favid.on("click", () => {
    divbox.hide();
    // console.log();
    p.show();
  });
});

type.on("change", (e, ind) => {
  arrdiv.forEach((eshow, ind) => {
    eshow.show();
  });
  arrdiv.forEach((el, ind) => {
    console.log(arr[ind]["type"]);
    if (e.target.value !== arr[ind]["type"]) {
      el.hide();
    }
  });
});
