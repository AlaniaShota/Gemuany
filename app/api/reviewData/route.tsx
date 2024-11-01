export async function GET(){
    const data = 
    [
        {id:1,
        name:'-Mariam .K',
        about:'“I visited Gemuany for the first time, and the Megruli Magic burger blew me away! The combination of the juicy beef and the sulguni cheese is perfect, and the ajika sauce adds the right kick. I also appreciate how fresh the ingredients were. Definitely one of the best burgers I’ve had in a long time!”',
        title:'Delicious and Unique Flavors',
        img:'/review/image 3.png'
        },
        {id:2,
        name:'-Levan G.',
        about:'"As a vegetarian, I was thrilled to see a plant-based burger on the menu, and the Spicy Megrelian Delight did not disappoint! I love how Gemuany caters to both meat lovers and vegetarians with high-quality options. Highly recommend!"',
        title:'Amazing Plant-Based Options!',
        img:'/review/image 4.png'
        },
        {id:3,
        name:'-Ana B.',
        about:'"Stopped by Gemuany for a quick lunch, and the Suliko Special hit the spot. The beef patties were cooked perfectly, and the sulguni cheese added a delicious, savory touch. The garlic aioli sauce was a great addition. Service was fast and friendly, making it a great experience overall. Will be back!"',
        title:'Perfect for a Quick, Tasty Meal',
        img:'/review/image (10).png'
        },
        {id:4,
        name:'-Mariam .K',
        about:'“I visited Gemuany for the first time, and the Megruli Magic burger blew me away! The combination of the juicy beef and the sulguni cheese is perfect, and the ajika sauce adds the right kick. I also appreciate how fresh the ingredients were. Definitely one of the best burgers I’ve had in a long time!”',
        title:'Delicious and Unique Flavors',
        img:'/review/image 3.png'
        },
        {id:5,
        name:'-Levan G.',
        about:'"As a vegetarian, I was thrilled to see a plant-based burger on the menu, and the Spicy Megrelian Delight did not disappoint! I love how Gemuany caters to both meat lovers and vegetarians with high-quality options. Highly recommend!"',
        title:'Amazing Plant-Based Options!',
        img:'/review/image 4.png'
        },
        {id:6,
        name:'-Ana B.',
        about:'"Stopped by Gemuany for a quick lunch, and the Suliko Special hit the spot. The beef patties were cooked perfectly, and the sulguni cheese added a delicious, savory touch. The garlic aioli sauce was a great addition. Service was fast and friendly, making it a great experience overall. Will be back!"',
        title:'Perfect for a Quick, Tasty Meal',
        img:'/review/image (10).png'
        },
    ]
    return new Response(JSON.stringify(data))
}