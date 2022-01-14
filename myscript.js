let miapp = new Vue({
    el:`#container`,
    data:{
        items: [{
            image: "img/01.jpg",
            title: "Svezia",
            text: "Lorem Ipsum"
        },
        {
            image: "img/02.jpg",
            title: "Svizzera",
            text: "Lorem Ipsum"
        },
        {
            image: "img/03.jpg",
            title: "Svezia",
            text: "Lorem Ipsum"
        },
        {
            image: "img/04.jpg",
            title: "Gran Bretagna",
            text: "Lorem Ipsum"
        },
        {
            image: "img/05.jpg",
            title: "Paradise",
            text: "Lorem Ipsum"
        }],
        current: 0,
        leftclass: "image-container",
        rightclass: "slider-img"
    },
    methods:{
        upcurrent: function(){
            this.current ++;
            if (this.current == 5){
                this.current = 0;
            }
        } ,
        downcurrent:function(){
            this.current --;
            if (this.current < 0){
                this.current = 4;
            }
        },
        iscurrent: function(index){
            if (index==this.current){
                return "current";
            } else {
                return "";
            }
        },
        setcurrent: function(index){
            this.current = index;
        }
    }
})
