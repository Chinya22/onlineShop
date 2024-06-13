const cardsInfoList = [
  {
    title: "Вертикальный велотренажер B37",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Вертикальный велотренажер B37",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Эллиптический тренажер",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'elliptical'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Велотренажер B37",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'bike'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Степпер",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'stepper'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Горнолыжный тренажер",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'ski'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Гребной тренажер",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'rowing'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
  {
    title: "Горнолыжный тренажер",
    img: "img/trainer.png",
    price: "1134900 ₽",
    oldPrice: "34900 ₽",
    categori: ['all', 'ski'],
    characteristics: [
      {
        name: "Тип дорожки:",
        value: "Домашняя",
      },
      {
        name: "Бег. полотно:",
        value: "1200 х 450 мм",
      },
      {
        name: "Мощность двигателя:",
        value: "2,0 л.с.",
      },
      {
        name: "Беговое полотно:",
        value: "2-х слойное",
      },
      {
        name: "Производитель:",
        value: "Cardio Power",
      },
    ],
  },
];

for (let i = 0; i < cardsInfoList.length; i++) {
    createCard(cardsInfoList[i], '.main_container_list')
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,
  
  });

function createCard(cardInfo, cardsWrapper) {
  const cardsList = document.querySelector(cardsWrapper);

  const card = document.createElement("div");
  card.classList.add("main_container_list_item");
  for (let i=0; i < cardInfo.categori.length; i++) {
    card.classList.add(cardInfo.categori[i]);
  }
  cardsList.append(card);

  const img = document.createElement("img");
  img.src = cardInfo.img;
  img.classList.add("main_container_list_item_img");
  card.prepend(img);

  const percentWrapper = document.createElement("div");
  percentWrapper.classList.add("main_container_list_item_percent");
  const percentImg = document.createElement("img");
  percentImg.src = "img/percent.svg";
  percentImg.classList.add("main_container_list_item_percent_img");
  percentWrapper.prepend(percentImg);
  card.prepend(percentWrapper);

  const likeWrapper = document.createElement("div");
  likeWrapper.classList.add("main_container_list_item_like");
  const likeImg = document.createElement("img");
  likeImg.src = "img/like.svg";
  likeImg.classList.add("main_container_list_item_like_img");
  likeWrapper.prepend(likeImg);
  card.prepend(likeWrapper);

  const newWrapper = document.createElement("div");
  newWrapper.classList.add("main_container_list_item_new");
  const newImg = document.createElement("img");
  newImg.src = "img/NEW.svg";
  newImg.classList.add("main_container_list_item_new_img");
  newWrapper.prepend(newImg);
  card.prepend(newWrapper);

  const stick = document.createElement("img");
  stick.src = "img/stick.svg";
  stick.classList.add("main_container_list_item_statistics");
  card.append(stick);

  const heart = document.createElement("img");
  heart.src = "img/heart_card.svg";
  heart.classList.add("main_container_list_item_heart");
  card.append(heart);

  const info = document.createElement("div");
  info.classList.add("main_container_list_item_info");
  card.append(info);

  const presence = document.createElement("div");
  presence.classList.add("main_container_list_item_info_presence");
  presence.innerText = "Есть в шоу-руме";
  info.prepend(presence);

  const presencePoints = document.createElement("img");
  presencePoints.src = "img/points.svg";
  presencePoints.classList.add("main_container_list_item_info_presence_points");
  presence.prepend(presencePoints);

  const presenceTextWrapper = document.createElement("span");
  presenceTextWrapper.innerText = "В наличии";
  presence.prepend(presenceTextWrapper);

  const titleCard = document.createElement("h3");
  titleCard.classList.add("main_container_list_item_info_title");
  titleCard.innerText = cardInfo.title;
  info.append(titleCard);

  for (let i = 0; i < cardInfo.characteristics.length; i++) {
    const type = document.createElement("div");
    type.classList.add("main_container_list_item_info_item");
    type.innerText = cardInfo.characteristics[i].value;
    info.append(type);

    const typeSpan = document.createElement("span");
    typeSpan.innerText = cardInfo.characteristics[i].name + " ";
    type.prepend(typeSpan);
  }

  const rating = document.createElement("div");
  rating.classList.add("main_container_list_item_info_rating");
  rating.innerText = "Рейтинг ";
  info.append(rating);

  const stars = document.createElement("img");
  stars.src = "img/stars.svg";
  stars.classList.add("main_container_list_item_info_rating_img");
  rating.append(stars);

  const buy = document.createElement("div");
  buy.classList.add("main_container_list_item_info_buy");
  info.append(buy);

  const buyPrice = document.createElement("div");
  buyPrice.classList.add("main_container_list_item_info_buy_price");
  buyPrice.innerText = "от " + cardInfo.price;
  buy.append(buyPrice);

  const buyPriceSpan = document.createElement("span");
  buyPriceSpan.innerText = cardInfo.oldPrice;
  buyPrice.append(buyPriceSpan);

  const buyBtn = document.createElement("button");
  buyBtn.classList.add("main_container_list_item_info_buy_btn");
  buyBtn.innerText = "Купить";
  buy.append(buyBtn);

  const buyBtnImg = document.createElement("img");
  buyBtnImg.src = "img/bag_card.svg";
  buyBtnImg.classList.add("main_container_list_item_info_buy_btn_img");
  buyBtn.prepend(buyBtnImg);
}


const openModal = document.querySelector('.header_mainInfo_call_btn');
const modal = document.getElementById('modalWindow');

const closeBtn = document.querySelector('.modal_content_close');

openModal.onclick = () => {
  modal.classList.add('modal_active');
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', hideModal);

  function closeModal() {
    modal.classList.remove('modal_active');
    closeBtn.removeEventListener('click', closeModal);
  }
  function hideModal(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
}

const filter = document.querySelectorAll ('.main_range_btn_item');
const cards = document.querySelectorAll ('.main_container_list_item');

for (i=0; i<filter.length; i++) {
  filter[i].onclick = function () {
    filterCards(this.dataset.filter)
  }
}

function filterCards(data) {
  for (i=0; i<cards.length; i++) {
    if (!cards[i].classList.contains(data)) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'flex';
    }
  }
  for (i=0; i<filter.length; i++) {
    if (filter[i].dataset.filter === data) {
      filter[i].classList.add('active');
    } else {
      filter[i].classList.remove('active');
    }
  }
}
