let arr = [
  {
    Name: "Golf Ball",
    price: "7.99 $",
    type: "history",
    decription:
      "Harry Brown explores the composition, history, kinetic life, and the long deterioration of golf balls",
    src: "./img/golf.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Driver's License",
    type: "drama",

    price: "8.99 $",
    decription:
      "A classic teenage fetish object, the American driver’s license has long symbolized freedom and mobility in a nation whose design assumes car travel and whose vastness rivals continents",
    src: "./img/drive.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Glass",
    type: "drama",

    price: "6.99 $",
    decription:
      "Pause and look around: you will see that you are surrounded by glass. It reflects and refracts light through your windows",
    src: "./img/glass.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Waste",
    type: "history",

    price: "4.99 $",
    decription:
      "Though we try to imagine otherwise, waste is every object, plus time. Whatever else an object is, it's also waste-or was, or will be",
    src: "./img/waste.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Hood",
    type: "drama",

    price: "3.99 $",
    decription:
      "We all wear hoods: the Grim Reaper, Red Riding Hood, torturers, executioners and the executed, athletes, laborers, anarchists,",
    src: "./img/hood.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Bread",
    type: "history",
    price: "5.99 $",
    decription:
      "Bread is an object that is always in process of becoming something else: flower to grain, grain to dough, dough to loaf, loaf to crumb",
    src: "./img/bread.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Hair",
    type: "comedy",

    price: "10.99 $",
    decription:
      "Hair, a primary marker of our mammalian nature, is an extraordinary indicator of economic and social standing, political orientation",
    src: "./img/hair.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Atomic Habits",
    type: "history",

    price: "9.99 $",
    decription:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation",
    src: "./img/AtomicHabits.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "It Ends with Us",
    type: "comedy",

    price: "4.99 $",
    decription:
      "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants",
    src: "./img/itend.webp",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Life Skilles",
    type: "drama",

    price: "5.99 $",
    decription:
      "The teenage years are an exciting yet ever-changing period of your life. New challenges and tasks seem to pop up almost daily—not to mention all the transitions your body is going through",
    src: "./img/lifeskilles.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "Interesting Stories",
    type: "comedy",

    price: "7.99 $",
    decription:
      "A Collection of Fascinating Stories About History, Science, Pop Culture and Just About Anything Else You Can Think of ",
    src: "./img/Interesting.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
  {
    Name: "The Storyteller",
    type: "comedy",

    price: "11.99 $",
    decription:
      "Having entertained the idea for years, and even offered a few questionable opportunities (It's a piece of cake! Just do 4 hours of interviews, find someone else to write it,",
    src: "./img/thestor.jpg",
    rate: $(
      "<div class=rate><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span><span class='fa fa-star checked'></span></div>"
    ),
  },
];
let users = [
  { username: "yazan", password: "123" },
  { username: "ahmad", password: "321" },
];
const body = $("body");

arrFav = [];
arrBurshacing = [];
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
const home1 = $("#home");
let tf = true;
const mainDivFav = $("<div class='mainDiv'></div>");
let burshacing = $("#burshacing");
const burDiv = $("<div class='burDiv'></div>");
const favDiv = $("<div class='favDiv'></div>");
const detailes = $("<div></div>");
body.append(favDiv);

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
const render = () => {
  arr.forEach((element) => {
    mainDiv.css({
      display: "grid",
    });

    const divBox = $("<div></div>");

    const imgCard = $(`<img/>`);
    imgCard.attr("src", element.src);
    divBox.append(imgCard);
    imgCard.attr("class", "imgCard");

    const h2Book = $("<h2></h2>");
    h2Book.text(element.Name);
    divBox.append(h2Book);
    h2Book.css({
      margin: "5px 0px ",
    });
    h2Book.attr("class", "nameBook");

    const price = $("<h3></h3>");
    price.text("price : " + element.price);
    divBox.append(price);
    price.css({
      margin: "10px 10px ",
      margin: "0px",
    });

    const addToCart = $("<button>add to cart</button>");
    addToCart.attr("id", "cart");
    const fav = $(
      "<button class='starr'><i class='fas fa-star star'></i></button>"
    );
    const inp = $("#tot");

    addToCart.css({
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
      inp.text(total);
    });
    fav.on("click", () => {
      tf = true;
      arrFav.push({
        img: element.src,
        name: element.Name,
        price: element.price,
        decription: element.decription,
      });
      localStorage.setItem("fav", JSON.stringify(arrFav));
    });

    addToCart.on("click", () => {
      arrBurshacing.push({
        img: element.src,
        name: element.Name,
        price: element.price,
        decription: element.decription,
      });
      localStorage.setItem("bur", JSON.stringify(arrBurshacing));
    });

    arrDiv.push(divBox);
    mainDiv.append(divBox);

    divBox.css({
      width: "230px",
      height: "430px",
      overflow: "hidden",
      color: "white",
      margin: "20px 50px",
      padding: "20px",
      display: "inline-block",
    });
    divBox.attr("id", "divBox");

    inputText = $("#username");
    inputPass = $("#password");
    userNameReg = $("#usernamereg");
    passwordReg = $("#passwordreg");
    loginButton = $("#logButton");
    signUpButton = $("#signUpButton");
    passwordConfirm = $("#passwordconfirm");

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

    // type.on("change", (e, ind) => {
    //   arrDiv.forEach((el, ind) => {
    //     if (e.target.value == "All") {
    //       el.show();
    //     } else if (e.target.value !== arr[ind]["type"]) {
    //       el.hide();
    //     }
    //   });
    // });

    imgCard.on("click", (e) => {
      const copyImg = $(`<img/>`);
      copyImg.attr("src", element.src);
      mainDiv.hide();
      arrDiv.forEach((el, ind) => {
        el.hide();
        copyImg.css({
          width: "450px",
          height: "650px",
        });
      });
      detailes.append(copyImg);
      const divH1Des = $("<div class=d></div>");
      const discription = $("<p></p>");
      const h1 = $("<h1></h1>");
      divH1Des.append(h1);
      divH1Des.append(element.rate);

      divH1Des.append(discription);
      detailes.append(divH1Des);
      detailes.attr("class", "detailes");
      discription.css({
        margin: "0px 20px",
        width: "300px",
      });
      h1.css({
        margin: "0px 20px",
      });
      discription.text(element.decription);
      h1.text(element.Name);
      body.append(detailes);
    });
  });

};
type.on("change", (e, ind) => {
  arrDiv.forEach((el, ind) => {
    if (e.target.value == "All") {
      el.show();
    } else if (e.target.value !== arr[ind]["type"]) {
      el.hide();
    }
    home1.on("click", () => {
      el.show();
    
      // detailes.html("");
      // mainDiv.html("");
      // render();
    });
  });
});

render();

/////foreach end
signUpButton.on("click", () => {
  userNameReg2 = userNameReg.val();
  passwordReg2 = passwordReg.val();
  console.log(userNameReg2);
  console.log(passwordReg2);
  if (passwordReg2 == passwordConfirm.val()) {
    users.push({ username: userNameReg2, password: passwordReg2 });
  } else {
    worningH1 = $("<h1 class='centerh1'>the password not match</h1>");
    reg.append(worningH1);
  }
});

favId.on("click", () => {
  favDiv.html("");
  detailes.html("");

  mainDiv.hide();

  storge = JSON.parse(localStorage.getItem("fav"));

  storge.forEach((ent) => {
    console.log(ent);
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
    divBoxFav.attr("id", "divBox");

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
    imgCard.attr("id", "imgCard");

    divBoxFav.append(imgCard);

    h2.text(ent.name);
    h2.appendTo(divBoxFav);
    price.text("price : " + ent.price);
    p.text(ent.decription);

    divBoxFav.append(addToCart);
    divBoxFav.append(remove);

    divBoxFav.append(price);
    divBoxFav.append(p);
    divStorage.push(divBoxFav);
    favDiv.append(divBoxFav);
    burDiv.hide();

    favDiv.attr("id", "favDiv");

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
    home1.on("click", () => {
      mainDiv.show();
      favDiv.hide();
    });
  });

  body.append(favDiv);
  favDiv.show();
  ///////////////////////////////////////////////////////addtocart
});

////////////////////////////////ggggg
burshacing.on("click", () => {
  burDiv.html("");
  detailes.html("");

  mainDiv.hide();
  storge1 = JSON.parse(localStorage.getItem("bur"));

  storge1.forEach((ele) => {
    const maintomain = $("<div class='mainDiv'></div>");
    const divBoxBur = $("<div></div>");
    const imgCardBur = $(`<img class="imgCard" src='${ele.img}'/>`);
    const h2Bur = $("<h2></h2>");
    const pBur = $("<p></p>");
    const removeBur = $("<button>remove</button>");
    const priceBur = $("<h3></h3>");

    divBoxBur.css({
      width: "220px",
      height: "600px",
      background: "#595845",
      overflow: "hidden",
      color: "white",
      margin: "20px 40px",
      padding: "10px 20px",
      display: "inline-block",
    });

    removeBur.css({
      background: "black",
      color: "white",
      fontWeight: "700",
      height: "40px",
      border: "2px solid black",
      width: "80px",
    });

    divBoxBur.append(imgCardBur);

    h2Bur.text(ele.name);
    h2Bur.appendTo(divBoxBur);
    priceBur.text("price : " + ele.price + "$");
    pBur.text(ele.decription);

    divBoxBur.append(removeBur);

    divBoxBur.append(priceBur);
    divBoxBur.append(pBur);
    divStorage.push(divBoxBur); ///

    burDiv.append(divBoxBur);
    body.append(burDiv);
    favDiv.hide();
    burDiv.show();
    burDiv.attr("id", "burDiv");

    removeBur.on("click", (e) => {
      for (let i = 0; i < arrBurshacing.length; i++) {
        if (i == 0) {
          arrBurshacing.shift();
        } else {
          arrBurshacing.splice(i, 1);
        }
        localStorage.setItem("bur", JSON.stringify(arrBurshacing));
      }

      divBoxBur.hide();
    });
    home1.on("click", () => {
      mainDiv.show();
      divBoxBur.hide();
    });
  });
});
