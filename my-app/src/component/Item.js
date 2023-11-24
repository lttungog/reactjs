function Item ({image, name, price, rating}) {
    return (
        <div class='card'>
            <div className='card-body'>
                <div className='text-center p-3'>
                    <img src = {image} alt="name"/>
                    <h2 className="user-name">{name}</h2>
                    <h4>Price: ${price}</h4>
                    <h4>Rating: {rating}</h4>
                </div>
            </div>
        </div>
    )
}

export default Item;
