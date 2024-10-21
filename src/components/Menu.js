import React from "react";
import recipes from "../recipes";
import Swa1 from "sweetalert2";

const Menu = () => {
// console.log(recipes[0]);
const handleOrder = (id) => {
console.log(id);

const swa1WithBoostrapButtons = Swa1.mixin({
customClass: {
confirmButton: 'btn btn-success',
cancelButton: 'btn btn-danger',
},
buttonsStyling: false,
})

swa1WithBoostrapButtons.fire({
title: "Confirm order?",
text: "You will not be able to revert this!",
icon: "warning",
showCancelButton: false,
confirmButtonText: "Yes, order it!",
}).then((result) => {
if (result.isConfirmed) {
swa1WithBoostrapButtons.fire(
"Ordered!", 
"Your order has been placed.", 
"success")
}
})
}

return (
<div className="menu-container">
<div className="menu-header">
<h2>Our Specials!</h2>
<button>Online Menu</button>
</div>
<div className="cards">
{recipes.map((recipe) => (
<div key={recipe.id} className="menu-items">
<img src={recipe.image} alt="" />
<div className="menu-content">
<div className="heading">
<h5>{recipe.title}</h5>
<p>${recipe.price}</p>
</div>
<p>{recipe.description}</p>
<button className="oderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
</div>
</div>
))}
</div>
</div>
);
};

export default Menu;