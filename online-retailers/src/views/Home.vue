<template>
    <div class="home">
        <!-- home page{{$store.state.search}} -->
            <ul class="home-types">
                <router-link :to="'/list/'+item.id" tag="li" v-for="(item,index) in types" :key="index"> 
                    <img :src="'/image/icons/'+item.path" alt="">
                    <p class="type-text">{{item.name}}</p>    
                </router-link>
            </ul>
            <ul class="ads">
                <router-link :to="'/detail/'+item.id" tag="li" v-for="(item,index) in ad" :key="index">
                    <h3 :class="'color-'+index">{{item.title}}</h3>
                    <p>{{item.description}}</p>
                    <img :src="'/image/ads/'+item.url" alt="">
                </router-link>
            </ul>
            <div class="home-list">
                <div class="guess-title">猜你喜欢</div>
                <Product v-for="(item,index) in list" :key=index :data="item"></Product>
            </div>
    </div>
</template>
<script>
import Product from "../components/Product"
export default {
    components:{
        Product
    },
    data() {
        return {
            types:[
                {id:'food', name:'美食',path:'food.svg'},
                {id:'movie', name:'电影',path:'movie.svg'},
                {id:'hotel', name:'酒店',path:'hotel.svg'},
                {id:'arder', name:'休闲',path:'arder.svg'},
                {id:'takeOut', name:'外卖',path:'takeOut.svg'},
                {id:'KTV', name:'KTV',path:'KTV.svg'},
                {id:'tour', name:'周边游',path:'tour.svg'},
                {id:'beauty', name:'丽人',path:'beauty.svg'},
                {id:'snack', name:'小吃',path:'snack.svg'},
                {id:'trainTicket',name:'火车票',path:'trainTicket.svg'},

            ],
            ad:[],
            list:[]
        }
    },
    created() {
        this.$http
            .get('/data/home.json')
            .then(({data})=>{
                // console.log(data)
                this.ad=data.ad
                this.list=data.list
                // console.log(this.ad)
            })
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/base.scss';
.home-types {
    background: #fff;
     @include clearfix();
    li {
        width:(100%/5);
        text-align: center;
        float: left;
        img {
            width: 60%;
        };
        p {
            font-size: 12px;
            padding: 5px 0 12px; 
            color: #666;
        }
    };
}
.ads {
    margin-top: 10px;
    display: flex;
    background: #fff;
    li {
        flex:1;
        text-align: center;
        border-right: 1px solid #ccc;
        padding:10px 0;
        &:last-child{
            border-right: none;
        }
        h3 {
            font-size: 16px;
            }
        };
        p {
            color: #666;
            padding: 10px 0;
            font-size: 12px;
        }
        img {
            width: 60%;
        };
        $i:0;
            @each $item in (#8666B8, #FD6B83, #53B78E) {
                .color-#{$i} {
                    color: $item;
                }
                 $i: $i + 1;
    }
}
.home-list {
    margin-top: 10px;
    background: #fff;
    .guess-title {
        font-size: 18px;
        // font-weight:normal;
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px solid #ccc; 
        color: $navColor;
    }
}
</style>