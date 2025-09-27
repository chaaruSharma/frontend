import AddToCartIcon from "../assets/icons/add_cart.png";

const ListItem = () => (
    <div>
    <div>
        <img src="https://m.media-amazon.com/images/I/61jL2GCuKLL._SX679_.jpg" alt="product image"/>
    </div>
    <div>
        <span>320</span>
        <small><strike>450</strike></small>
    </div>
    <div>
        <h3>Product Title</h3>
    </div>
    <button>
        <span>Add to cart</span>
        <img src={AddToCartIcon} alt="add to cart icon"/>
    </button>
    </div>
);
export default ListItem;