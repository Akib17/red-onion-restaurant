const FakeData = [
    {
        id: 1,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Bagel and cream cheese",
        subtitle: "How we dream about our future",
        price: 6.99,
        img: "https://img.techpowerup.org/200331/breakfast1.png"
    },
    {
        id: 2,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Sandwich",
        subtitle: "How we dream about our future",
        price: 4.99,
        img: "https://img.techpowerup.org/200331/breakfast2.png"
    },
    {
        id: 3,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Backed Chicken",
        subtitle: "How we dream about our future",
        price: 8.99,
        img: "https://img.techpowerup.org/200331/breakfast3.png"
    },
    {
        id: 4,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Eggs Benedict",
        subtitle: "How we dream about our future",
        price: 4.99,
        img: "https://img.techpowerup.org/200331/breakfast4.png"
    },
    {
        id: 5,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Toast Croissant Fried egg",
        subtitle: "How we dream about our future",
        price: 19.99,
        img: "https://img.techpowerup.org/200331/breakfast5.png"
    },
    {
        id: 6,
        category: 'breakfast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: "Full Breakfast Fried egg",
        subtitle: "How we dream about our future",
        price: 3.99,
        img: "https://img.techpowerup.org/200331/breakfast6.png"
    },
    {
        id: 21,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Healthy Meal Plan',
        subtitle: 'How we dream about our future',
        price: 23.99,
        img: 'https://img.techpowerup.org/200331/lunch1.png'
    },
    {
        id: 22,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Fried Chicken Bento',
        subtitle: 'How we dream about our future',
        price: 9.99,
        img: 'https://img.techpowerup.org/200331/lunch2.png'
    },
    {
        id: 23,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Vegetables',
        subtitle: 'How we dream about our future',
        price: 4.99,
        img: 'https://img.techpowerup.org/200331/lunch3.png'
    },
    {
        id: 24,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Indian Lunch',
        subtitle: 'How we dream about our future',
        price: '12.99',
        img: 'https://img.techpowerup.org/200331/lunch4.png'
    },
    {
        id: 25,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Beef Stack',
        subtitle: 'How we dream about our future',
        price: 15.99,
        img: 'https://img.techpowerup.org/200331/lunch5.png'
    },
    {
        id: 26,
        category: 'lunch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Honey Soy-Glazzed',
        subtitle: 'How we dream about our future',
        price: 7.99,
        img: 'https://img.techpowerup.org/200331/lunch6.png'
    },
    {
        id: 11,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Lenti Salad',
        subtitle: 'How we dream about our future',
        price: 9.99,
        img: 'https://img.techpowerup.org/200331/dinner1663.png'
    },
    {
        id: 12,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Lemony Salmon Piccata',
        subtitle: 'How we dream about our future',
        price: 10.99,
        img: 'https://img.techpowerup.org/200331/dinner2.png'
    },
    {
        id: 13,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Pork Tenderion',
        subtitle: 'How we dream about our future',
        price: 12.99,
        img: 'https://img.techpowerup.org/200331/dinner3.png'
    },
    {
        id: 14,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'French Fries with cheese',
        subtitle: 'How we dream about our future',
        price: 8.99,
        img: 'https://img.techpowerup.org/200331/dinner4.png'
    },
    {
        id: 15,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Garlic Butter Baked salmon',
        subtitle: 'How we dream about our future',
        price: 6.99,
        img: 'https://img.techpowerup.org/200331/dinner5.png'
    },
    {
        id: 16,
        category: 'dinner',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ipsum ut vehicula malesuada. Nunc convallis justo sit amet velit auctor, vel accumsan risus ultricies. Ut a odio imperdiet, mollis sapien eu, iaculis diam. Quisque sed rhoncus eros. Vestibulum id urna et felis pretium faucibus in at lectus. Nullam vitae cursus metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        name: 'Baked Chicken',
        subtitle: 'How we dream about our future',
        price: 13.99,
        img: 'https://img.techpowerup.org/200331/dinner6.png'
    }
]

export default FakeData;