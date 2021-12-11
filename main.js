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
const maindiv = $("<div class='mainDiv'></div>");
let test = [];
let divstor = [];
///////////////////////////////////////////////////////////

body.append(maindiv);
arr.forEach((element) => {
  maindiv.css({
    display: "grid",
  });

  const divbox = $("<div></div>");
  const imgcard = $(`<img/>`);

  imgcard.attr("src", element.src);
  imgcard.css({});
  divbox.append(imgcard);
  imgcard.attr("class", "imgg");

  const h2 = $("<h2></h2>");
  h2.text(element.Name);
  divbox.append(h2);

  const price = $("<h3></h3>");
  price.text("price : " + element.price + "$");
  divbox.append(price);

  const addtocourt = $("<button>add to cart</button>");
  addtocourt.attr("id", "test");
  //const remove = $("<button>remove</button>");
  const fav = $("<button><i class='fas fa-star'>favourite</i></button>");
  const inp = $("#tot");

  addtocourt.css({
    margin: "0px 5px",
    fontWeight: "700",
    height: "40px",
  });
  //   remove.css({
  //     background: "red",
  //     fontWeight: "700",
  //     height: "40px",
  //     border: "2px solid black",
  //   });
  fav.css({
    background: "blue",
    width: "80px",
    fontWeight: "700",
    height: "40px",
    border: "2px solid black",
    margin: "0px 5px",
  });
  divbox.append(addtocourt);
  //   divbox.append(remove);
  divbox.append(fav);

  addtocourt.on("click", () => {
    localStorage.setItem("totalprice", element.price);

    localStorage.setItem("bookname ", element.Name);
    localStorage.setItem("description ", element.decription);

    total = total + parseInt(localStorage.getItem("totalprice"));
    inp.val(total);
  });

  fav.on("click", () => {
    // localStorage.setItem("name", element.Name);
    // localStorage.setItem("price", element.price);
    // localStorage.setItem("decription", element.decription);
    arrfav.push({
      img: element.src,
      name: element.Name,
      price: element.price,
      decription: element.decription,
    });
    localStorage.setItem("fav", JSON.stringify(arrfav));
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
    padding: "20px",
    display: "inline-block",
  });

  body.append(divbox);

  maindiv.append(divbox);
  //});

  type.on("change", (e, ind) => {
    arrdiv.forEach((eshow, ind) => {
      eshow.show();
    });
    arrdiv.forEach((el, ind) => {
      // console.log(arr[ind]["type"]);
      if (e.target.value !== arr[ind]["type"]) {
        el.hide();
      }
    });
  });
  /////
});
//

favid.on("click", () => {
  maindiv.hide();

  storge = JSON.parse(localStorage.getItem("fav"));
  //test.push(storge);
  // console.log(storge);

  storge.forEach((ent) => {
    //   console.log(h33.text(ent.name));
    /////////////////////////////////////////////////
    const maintomain = $("<div class='mainDiv'></div>");
    const divbox1 = $("<div></div>");
    const imgcard = $(`<img class="imgg" src='${ent.img}'/>`);
    const h2 = $("<h2></h2>");
    const p = $("<p></p>");
    const addtocourt = $("<button>add to cart</button>");
    addtocourt.attr("id", "test");
    const remove = $("<button>remove</button>");
    const price = $("<h3></h3>");

    divbox1.css({
      width: "220px",
      height: "350px",
      background: "#595845",
      overflow: "hidden",
      color: "white",
      margin: "20px 40px",
      padding: "30px",
      display: "inline-block",
    });
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
      width: "80px",
    });

    /////////////////////////////////////////////////

    //   console.log(e.target.parentElement);
    //   e.target.parentElement.hide();
    divstor.forEach((ee) => {
      //   element.hide();
      remove.on("click", (e) => {
        if (e.target.parentElement) {
          ee.hide();
        }

        console.log(ee);
        console.log(e.target.parentElement);
      });

      // total = total - parseInt(localStorage.getItem("totalprice"));
      // inp.val(total);
      // localStorage.removeItem("totalprice", element.price);
      // localStorage.removeItem("bookname ", element.Name);
      // localStorage.removeItem("description ", element.decription);
    });

    divbox1.append(imgcard);

    h2.text(ent.name);
    h2.appendTo(divbox1);
    price.text("price : " + ent.price + "$");
    p.text(ent.decription);

    divbox1.append(addtocourt);
    divbox1.append(remove);

    divbox1.append(price);
    divbox1.append(p);
    divstor.push(divbox1); ////////

    body.append(divbox1);
    divbox1.show();

    console.log(ent.img);
  });
});
