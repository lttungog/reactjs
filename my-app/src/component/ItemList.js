import Item from "./Item";

const items = [
    {
        id: 1,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 1",
        price: "25",
        rating: "3.8"
    },
    {
        id: 2,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 2",
        price: "23",
        rating: "1.1"
    },
    {
        id: 3,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 3",
        price: "26",
        rating: "2.6"
    },
    {
        id: 4,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 4",
        price: "40",
        rating: "4.8"
    },
    {
        id: 5,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 5",
        price: "51",
        rating: "4.6"
    },
    {
        id: 6,
        image: "https://fastly.picsum.photos/id/211/200/300.jpg?hmac=wrwgBoS1KPKiLCrxowMtMQ7NpVlzI1NvocRSpH6HSm0",
        name: "Item 6",
        price: "11",
        rating: "4"
    }
]

export default function ItemsList() {
    return (
        <div>
            <div className="container p-5">
            {/* Class container, padding 5 */}
                <div className='row'>
                {/* Introduce the grid */}
                    {items.map((item, index) => (
                        <div key={index} className='col-lg-4 col-md-12 mb-4'>
                                <Item {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
