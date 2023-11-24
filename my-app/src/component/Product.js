import {FaStar} from 'react-icons/fa';

const Product = ({name, price, discount, image, rating, sale}) => {
    const stars = Array.from ({length: 5}, (_, index) => (
        <FaStar key={index} color={rating > index ? '#ffc107' : '#e4e5e9'}/>
    ));

    return (
        <div>
            <h1>{stars}</h1>
        </div>
    );
}

export default Product

