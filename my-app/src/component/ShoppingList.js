const products = [
    { title: 'Locusts', isFruit: false, id: 1},
    { title: 'Garlic', isFruit: true, id: 2},
    { title: 'Apple', isFruit: true, id: 3},
];

export default function ShoppingList() {
    const listItems = products.map(product => 
        <li
        key = {product.id}
            style = {{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}>
            {product.title}
        </li>);

        return (
            <ul>{listItems}</ul>
        );
}