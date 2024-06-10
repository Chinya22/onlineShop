const cardsList = document.querySelector('.main_container_list');

const card = document.createElement('div');
card.classList.add('main_container_list_item');
cardsList.append(card);

const img = document.createElement('img');
img.src = 'img/trainer.png';
img.classList.add('main_container_list_item_img');
card.prepend(img);
 
const percentWrapper = document.createElement('div');
percentWrapper.classList.add ('main_container_list_item_percent');
const percentImg = document.createElement('img');
percentImg.src = 'img/percent.svg';
percentImg.classList.add('main_container_list_item_percent_img');
percentWrapper.prepend(percentImg);
card.prepend(percentWrapper);

const likeWrapper = document.createElement('div');
likeWrapper.classList.add ('main_container_list_item_like');
const likeImg = document.createElement('img');
likeImg.src = 'img/like.svg';
likeImg.classList.add('main_container_list_item_like_img');
likeWrapper.prepend(likeImg);
card.prepend(likeWrapper);

const newWrapper = document.createElement('div');
newWrapper.classList.add ('main_container_list_item_new');
const newImg = document.createElement('img');
newImg.src = 'img/NEW.svg';
newImg.classList.add('main_container_list_item_new_img');
newWrapper.prepend(newImg);
card.prepend(newWrapper);

const stick = document.createElement('img');
stick.src = 'img/stick.svg';
stick.classList.add('main_container_list_item_statistics');
card.append(stick); 

const heart = document.createElement('img');
heart.src = 'img/heart_card.svg';
heart.classList.add('main_container_list_item_heart');
card.append(heart);

const info = document.createElement('div');
info.classList.add ('main_container_list_item_info');
card.append(info);


const presence = document.createElement('div');
presence.classList.add ('main_container_list_item_info_presence');
presence.innerText = 'Есть в шоу-руме';
info.prepend(presence);

const presencePoints = document.createElement('img');
presencePoints.src = 'img/points.svg';
presencePoints.classList.add ('main_container_list_item_info_presence_points');
presence.prepend(presencePoints);

const presenceTextWrapper = document.createElement('span');
presenceTextWrapper.innerText = 'В наличии';
presence.prepend(presenceTextWrapper);

const titleCard = document.createElement('h3');
titleCard.classList.add ('main_container_list_item_info_title');
titleCard.innerText = 'Вертикальный велотренажер B37';
info.append(titleCard);

const type = document.createElement('div');
type.classList.add('main_container_list_item_info_type');
type.innerText = 'Домашняя';
info.append(type);

const typeSpan = document.createElement('span');
typeSpan.innerText = 'Тип дорожки: ';
type.prepend(typeSpan);


const size = document.createElement('div');
size.classList.add('main_container_list_item_info_size');
size.innerText = '1200 х 450 мм';
info.append(size);

const sizeSpan = document.createElement('span');
sizeSpan.innerText = 'Бег. полотно: ';
size.prepend(sizeSpan);


const power = document.createElement('div');
power.classList.add('main_container_list_item_info_power');
power.innerText = '2,0 л.с.';
info.append(power);

const powerSpan = document.createElement('span');
powerSpan.innerText = 'Мощность двигателя: ';
power.prepend(powerSpan);


const canvas = document.createElement('div');
canvas.classList.add('main_container_list_item_info_canvas');
canvas.innerText = '2-х слойное';
info.append(canvas);

const canvasSpan = document.createElement('span');
canvasSpan.innerText = 'Беговое полотно: ';
canvas.prepend(canvasSpan);


const manufacturer = document.createElement('div');
manufacturer.classList.add('main_container_list_item_info_manufacturer');
manufacturer.innerText = 'Cardio Power';
info.append(manufacturer);

const manufacturerSpan = document.createElement('span');
manufacturerSpan.innerText = 'Производитель ';
manufacturer.prepend(manufacturerSpan);


const rating = document.createElement('div');
rating.classList.add('main_container_list_item_info_rating');
rating.innerText = 'Рейтинг ';
info.append(rating);

const stars = document.createElement('img');
stars.src = 'img/stars.svg';
stars.classList.add('main_container_list_item_info_rating_img');
rating.append(stars);


const buy = document.createElement('div');
buy.classList.add('main_container_list_item_info_buy');
info.append(buy);

const buyPrice = document.createElement('div');
buyPrice.classList.add('main_container_list_item_info_buy_price');
buyPrice.innerText = 'от 1 134 900 ₽';
buy.append(buyPrice);

const buyPriceSpan = document.createElement('span');
buyPriceSpan.innerText = '34 900 ₽';
buyPrice.append(buyPriceSpan);


const buyBtn = document.createElement('button');
buyBtn.classList.add('main_container_list_item_info_buy_btn');
buyBtn.innerText = 'Купить';
buy.append(buyBtn);

const buyBtnImg = document.createElement('img');
buyBtnImg.src = 'img/bag_card.svg';
buyBtnImg.classList.add('main_container_list_item_info_buy_btn_img');
buyBtn.prepend(buyBtnImg);























