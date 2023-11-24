function Item ({image, name, price, rating}) {
    return (
        <div class='card'> 
        {/* Define div type as card */}
            <div className='card-body'>
            {/* Specify the information below belongs to the card-body */}
                <div className='text-center p-3'>
                {/* Centered text, padding 3 */}
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
