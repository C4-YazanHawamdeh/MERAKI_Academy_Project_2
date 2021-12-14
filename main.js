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
  {
    Name: "Atomic Habits",
    type: "history",

    price: 10,
    decription:
      "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation",
    src: "AtomicHabits.jpg",
  },
  {
    Name: "It Ends with Us: A Novel",
    type: "comedy",

    price: 5,
    decription:
      "Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants",
    src: "itend.webp",
  },
  {
    Name: "life skilles",
    type: "drama",

    price: 10,
    decription:
      "The teenage years are an exciting yet ever-changing period of your life. New challenges and tasks seem to pop up almost daily—not to mention all the transitions your body is going through",
    src: "lifeskilles.jpg",
  },
  {
    Name: "Interesting Stories For Curious People",
    type: "comedy",

    price: 6,
    decription:
      "A Collection of Fascinating Stories About History, Science, Pop Culture and Just About Anything Else You Can Think of ",
    src: "Interesting.jpg",
  },
  {
    Name: "The Storyteller",
    type: "comedy",

    price: 20,
    decription:
      "Having entertained the idea for years, and even offered a few questionable opportunities (It's a piece of cake! Just do 4 hours of interviews, find someone else to write it,",
    src: "thestor.jpg",
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
const mainDivFav = $("<div class='mainDiv'></div>");
let burshacing = $("#burshacing");

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
    width: "220px",
    height: "430px",
    background: "#FFD930",
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
    home1.on("click", () => {
      mainDiv.show();
      divBoxFav.hide();
    });
  });

  ///////////////////////////////////////////////////////addtocart
});
////////////////////////////////ggggg
burshacing.on("click", () => {
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

    body.append(divBoxBur);
    divBoxBur.show();

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
