const example = [
    {
        id: 1,
        title: "shop1",
        products: [
            {
                id: 1,
                title: "product1shop1",
                price: 1000
            },
            {
                id: 2,
                title: "product2shop1",
                price: 3000,
            }
        ],
    },
    {
        id: 2,
        title: "shop2",
        products: [
            {
                id: 1,
                title: "product1shop2",
                price: 1000
            },
            {
                id: 2,
                title: "product2shop2",
                price: 3000,
            }
        ],
    },
    {
        id: 3,
        title: "shop3",
        products: [
            {
                id: 1,
                title: "product1shop3",
                price: 1000
            },
            {
                id: 2,
                title: "product1shop5",
                price: 4000,
            },
            {
                id: 3,
                title: "product3shop3",
                price: 16500,
            }
        ],
    },
    {
        id: 4,
        title: "shop4",
        products: [
            {
                id: 1,
                title: "product1shop4",
                price: 4500
            },
            {
                id: 2,
                title: "product2shop4",
                price: 1200,
            },
            {
                id: 3,
                title: "product1shop3",
                price: 100,
            }
        ],
    },
    {
        id: 5,
        title: "shop5",
        products: [
            {
                id: 1,
                title: "product1shop5",
                price: 100
            },
            {
                id: 2,
                title: "product2shop5",
                price: 20000,
            }
        ],
    },
];

function findMax() {
    let mostExpensiveShop = 0;
    let max = 0;
    example.forEach((shop) => {
        const Shops = shop.products.map((_shop) => _shop);
        for (let i = 0; i < Shops.length; i++) {
            if (Shops[i].price > max) {
                max = Shops[i].price;
                mostExpensiveShop = shop;
            }
        }
    })
    return(JSON.parse(JSON.stringify(mostExpensiveShop)));
}
console.log(findMax());
function init() {
    const id = example.find((shop) => shop.id === 5).id - 1;
    example[id].products = example[id].products.map((product) => product.price * 0.8);
    console.log(example[id]);
}
init();
console.log(findMax());