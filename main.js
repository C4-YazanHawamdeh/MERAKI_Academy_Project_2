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
let users = [
  { username: "yazan", password: "123" },
  { username: "ahmad", password: "321" },
];
const body = $("body");
arrFav = [];
let total = 0;
let favId = $("#favid");
let home = $("#home");
let type = $("#type");
let arrDiv = [];
const mainDiv = $("<div class='mainDiv'></div>");
let cart = [];
let divStorage = [];
let test = $("#test");
const login = $("#login");
const signupLink = $("#signUpNow");
const loginLink = $("#loginNow");
const reg = $("#register");

test.hide();
reg.hide();
signupLink.on("click", () => {
  login.hide();
  reg.show();
});
loginLink.on("click", () => {
  reg.hide();
  login.show();
});
// body.append(mainDiv);
arr.forEach((element) => {
  mainDiv.css({
    display: "grid",
  });

  const divBox = $("<div></div>");

  const imgCard = $(`<img/>`);

  imgCard.attr("src", element.src);
  imgCard.css({});
  divBox.append(imgCard);
  imgCard.attr("class", "imgCard");

  const h2 = $("<h2></h2>");
  h2.text(element.Name);
  divBox.append(h2);
  h2.css({
    margin: "5px 0px ",
  });

  const price = $("<h3></h3>");
  price.text("price : " + element.price + "$");
  divBox.append(price);
  price.css({
    margin: "10px 10px ",
  });

  const addToCart = $("<button>add to cart</button>");
  addToCart.attr("id", "cart");
  const fav = $(
    "<button class='starr'><i class='fas fa-star star'></i></button>"
  );
  const inp = $("#tot");

  addToCart.css({
    margin: "0px 5px",
    fontWeight: "700",
    height: "40px",
  });

  fav.css({
    background: "black",
    width: "80px",
    fontWeight: "700",
    height: "40px",
    border: "2px solid black",
    margin: "0px 5px",
  });
  divBox.append(addToCart);
  divBox.append(fav);

  addToCart.on("click", () => {
    localStorage.setItem("totalprice", element.price);

    localStorage.setItem("bookname ", element.Name);
    localStorage.setItem("description ", element.decription);

    total = total + parseInt(localStorage.getItem("totalprice"));
    inp.val(total);
  });

  fav.on("click", () => {
    arrFav.push({
      img: element.src,
      name: element.Name,
      price: element.price,
      decription: element.decription,
    });
    localStorage.setItem("fav", JSON.stringify(arrFav));
  });

  arrDiv.push(divBox);
  mainDiv.append(divBox);

  divBox.css({
    width: "220px",
    height: "430px",
    background: "#595845",
    overflow: "hidden",
    color: "white",
    margin: "20px 100px",
    padding: "20px",
    display: "inline-block",
  });

  inputText = $("#username");
  inputPass = $("#password");
  loginButton = $("#logButton");

  loginButton.on("click", () => {
    users.forEach((element) => {
      if (
        inputText.val() == element.username &&
        inputPass.val() == element.password
      ) {
        login.hide();

        test.show();
        body.append(mainDiv);
      } else {
        console.log("enter a valid username or password");
      }
    });
  });

  type.on("change", (e, ind) => {
    arrDiv.forEach((eShow, ind) => {
      eShow.show();
    });
    arrDiv.forEach((el, ind) => {
      if (e.target.value !== arr[ind]["type"]) {
        el.hide();
      }
    });
  });

  imgCard.on("click", (e) => {
    arrDiv.forEach((el, ind) => {
      el.hide();
      imgCard.css({
        width: "400px",
      });
    });
    mainDiv.append(imgCard);
    const newdiv = $("<div></div>");

    const discription = $("<p></p>");
    const h1 = $("<h1></h1>");
    newdiv.append(h1);

    newdiv.append(discription);

    discription.css({
      margin: "0px 20px",
      width: "300px",
    });
    h1.css({
      margin: "0px 20px",
    });
    discription.text(element.decription);
    h1.text(element.Name);
    mainDiv.append(newdiv);
  });
});
//

favId.on("click", () => {
  mainDiv.hide();

  storge = JSON.parse(localStorage.getItem("fav"));

  storge.forEach((ent) => {
    const maintomain = $("<div class='mainDiv'></div>");
    const divBoxFav = $("<div></div>");
    const imgCard = $(`<img class="imgCard" src='${ent.img}'/>`);
    const h2 = $("<h2></h2>");
    const p = $("<p></p>");
    const addToCart = $("<button>add to cart</button>");
    addToCart.attr("id", "cart");
    const remove = $("<button>remove</button>");
    const price = $("<h3></h3>");

    divBoxFav.css({
      width: "220px",
      height: "600px",
      background: "#595845",
      overflow: "hidden",
      color: "white",
      margin: "20px 40px",
      padding: "10px 20px",
      display: "inline-block",
    });
    addToCart.css({
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

    divBoxFav.append(imgCard);

    h2.text(ent.name);
    h2.appendTo(divBoxFav);
    price.text("price : " + ent.price + "$");
    p.text(ent.decription);

    divBoxFav.append(addToCart);
    divBoxFav.append(remove);

    divBoxFav.append(price);
    divBoxFav.append(p);
    divStorage.push(divBoxFav);

    body.append(divBoxFav);
    divBoxFav.show();

    remove.on("click", (e) => {
      for (let i = 0; i < arrFav.length; i++) {
        if (i == 0) {
          arrFav.shift();
        } else {
          arrFav.splice(i, 1);
        }
        localStorage.setItem("fav", JSON.stringify(arrFav));
      }

      divBoxFav.hide();
    });
  });
});
