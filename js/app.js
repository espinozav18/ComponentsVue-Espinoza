Vue.component("a-titulo", {
    props: { titulo: { type: String }, src: { type: String }, estilo: { type: Array } },
    template: `<a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img :src="src" alt="" :style="estilo">
        <span class="fs-4 text-primary">{{titulo}}</span>
    </a>`
})

Vue.component("table-list",{
    props:["heads","lists","styles","dimg"],
    template:`
        <table :class="styles.table+' '+styles.colortext">
        <thead>
            <tr :class="styles.head">
                <th scope="col" v-for="(head,i) in heads" :key="i">{{head}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(list,i) in lists" :key="i" :class="i%2==0?styles.row.color1:styles.row.color2">
                <td>{{list.id}}</td>
                <td>{{list.name}}</td>
                <td class="price">{{list.price}}</td>
                <td><img :src="list.image+'?h='+dimg.h+'&w='+dimg.w"
                        class="img-fluid img-thumbnail" alt=""></td>
                <td>{{list.description}}</td>
            </tr>
        </tbody>
    </table>
    `
})

var components = new Vue({
    el: "#component",
    data: {
        dimg:{
            h:150,w:150  
        },
        fruits: [{
            id: 1,
            name: 'Papaya',
            price: 1.00,
            image: 'https://images.pexels.com/photos/701969/pexels-photo-701969.jpeg',
            description:''
        },
        {
            id: 2,
            name: 'Uva',
            price: 1.20,
            image: 'https://images.pexels.com/photos/5529558/pexels-photo-5529558.jpeg',
            description:''
        },
        {
            id: 3,
            name: 'Melón',
            price: 2.10,
            image: 'https://images.pexels.com/photos/1100419/pexels-photo-1100419.jpeg',
            description:''
        },],
        cereals: [{
            id: 1,
            name: 'Arroz',
            price: 10,
            image: 'https://images.pexels.com/photos/7421207/pexels-photo-7421207.jpeg',
            description:'Es de consumo diario'
        },
        {
            id: 2,
            name: 'Trigo',
            price: 22.50,
            image: 'https://images.pexels.com/photos/6412600/pexels-photo-6412600.jpeg',
            description:'Es un super alimento'
        },
        {
            id: 3,
            name: 'Maiz',
            price: 50.10,
            image: 'https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg',
            description:''
        },],
        literarys: [{
            id: 1,
            name: 'Historia UNiversal',
            price: 100,
            image: 'https://images.pexels.com/photos/1005324/literature-book-open-pages-1005324.jpeg',
            description:''
        },
        {
            id: 2,
            name: 'Literatura Universal',
            price: 220.50,
            image: 'https://images.pexels.com/photos/34627/pexels-photo.jpg',
            description:''
        },
        {
            id: 3,
            name: 'Desarrollo Humano',
            price: 250.10,
            image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg',
            description:''
        },],
    },
    methods: {


    },
    computed: {
      
    }
})