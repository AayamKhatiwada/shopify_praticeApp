import Noty from "noty";

console.log('hjvh')

function addWishList(customer, product) {
  new Noty({
    text: 'Some notification text',
    layout: 'topRight',
    type: 'success'
  }).show();
}

function removeWishList() {
  alert("Deleted to wish list")
}

var wishListButton = document.querySelector('.wish-list-btn')

wishListButton.addEventListener('click', () => {

  if (wishListButton.classList.contains('active')) {
    removeWishList();
    wishListButton.classList.remove('active');
  } else {

    wishListButton.classList.add('active');
    var customer = wishListButton.dataset.customer;
    var product = wishListButton.dataset.product;

    addWishList(customer, product);
  }

})