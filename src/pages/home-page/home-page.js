import React from 'react'
import './home-page.css'
import { CakeItem } from '../../components/cake-item'
const CAKES = [
    {
        image: '/img/pexels-dmitry-zvolskiy-1721932.jpg',
        title: 'WILDBERRY BAKED',
        genres: ['Eggless Cakes', 'Mudscakes', 'Party Cakes'],
        price: 23,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "A vanilla cheesecake, with swirls of berry compote baked on a graham biscuit base. Finished with fresh strawberries and blueberries and a wildberry flavoured mousse.",
    },
    {
        image: '/img/pexels-dmitry-zvolskiy-1721934.jpg',
        title: 'CARROT CAKE',
        genres: ['Eggless Cakes', 'Party Cakes'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 24,
        id: 2,
        description: 'A flourless cake with a mix of fresh carrots, sultanas & walnuts. Finished with cream cheese, topped with dried apricots, pepitas, walnuts, earl grey tea & lavender.'
    },
    {
        image: '/img/pexels-elli-1854652.jpg',
        title: 'FRUIT FLAN',
        genres: ['Everyday cakes', 'tortes'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 21,
        id: 3,
        description: 'A delicious vanilla sponge with smooth custard, fresh fruit, cream and a sweet glaze (Seasonal fruit is subject to availability).'
    },
    {
        image: '/img/pexels-jasmine-lew-140831.jpg',
        title: 'EGGLESS BLACK FOREST TORTE',
        genres: ['Party Cakes', 'tortes'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 12,
        id: 4,
        description: 'Eggless chocolate sponge layered with vegetarian vanilla cream and hand-crushed sour cherries. Finished with cream rosettes and maraschino cherries. May contain traces of egg'
    },
    {
        image: '/img/pexels-matheus-guimarães-1291712.jpg',
        title: 'GLUTEN FREE CARROT AND ORANGE CAKE',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Eggless Cakes', 'tortes'],
        price: 20,
        id: 5,
        description: 'A delicious gluten free carrot and orange cake, topped with pepitas, dried apricots and cranberries, that is baked, decorated and sealed off the premises.'
    },
    {
        image: '/img/pexels-pixabay-461431.jpg',
        title: 'GLUTEN FREE CHOCOLATE CAKE',
        genres: ['Party Cakes', 'Double Choc', 'tortes'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 28,
        id: 6,
        description: 'A gluten free version of our famous chocolate cake that is baked, decorated and sealed off the premises.'
    },
]

export const HomePage = () => {
  return (
    <div className='home-page'>
        {CAKES.map(cake => <CakeItem cake={cake} key={cake.id}/>)}
    </div>
  )
}
