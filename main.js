console.log("yazan");

let arr = [
  {
    Name: "golf ball",
    price: 5,
    type: "history",
    decription:
      "Harry Brown explores the composition, history, kinetic life, and the long deterioration of golf balls",
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
      "Pause and look around: you will see that you are surrounded by glass. It reflects and refracts light through your windows",
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
let home = $("#home");
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
  h2.css({
    margin: "5px 0px ",
  });

  const price = $("<h3></h3>");
  price.text("price : " + element.price + "$");
  divbox.append(price);
  price.css({
    margin: "10px 10px ",
  });

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

  //   const discr = $("<p></p>");
  //   discr.text(element.decription);
  //   divbox.append(discr);

  divbox.css({
    width: "220px",
    height: "430px",
    background: "#595845",
    overflow: "hidden",
    color: "white",
    margin: "20px 100px",
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
  imgcard.on("click", (e) => {
    arrdiv.forEach((el, ind) => {
      console.log(e.target);
      el.hide();
      imgcard.css({
        width: "100px",
      });
      divbox.attr("id", "pressimgcss");
      const discr = $("<p></p>");
      discr.text(element.decription);
      divbox.append(discr);
      divbox.show();
    });
  });
});
//
// home.on("click", () => {
//   maindiv.show();
// });

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
      height: "400px",
      background: "#595845",
      overflow: "hidden",
      color: "white",
      margin: "20px 40px",
      padding: "10px 20px",
      display: "inline-block",
    });
    addtocourt.css({
      margin: "0px 5px",
      fontWeight: "700",
      height: "40px",
    });
    remove.css({
      background: "black",
      color: "white",
      fontWeight: "700",
      height: "40px",
      border: "2px solid black",
      width: "80px",
    });

    /////////////////////////////////////////////////

    //   console.log(e.target.parentElement);
    //   e.target.parentElement.hide();

    //   element.hide();

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
    remove.on("click", (e) => {
      console.log(ent);
      console.log("E: ", e.target);
      for (let i = 0; i < arrfav.length; i++) {
        if (i == 0) {
          arrfav.shift();
        } else {
          arrfav.splice(i, 1);
        }
        localStorage.setItem("fav", JSON.stringify(arrfav));
      }
      console.log(storge);

      divbox1.hide();
    });
  });
});
