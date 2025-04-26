const CartItem = (props) => {
    const { id, name, price, quantity } = props;

    return(
        <li className="collection-item">
            {name} x {quantity} = {price * quantity} $
            <span className="secondary-content">
                <i className="material-icons cart-delete">close</i>
            </span>
        </li>
    )
}

export { CartItem}