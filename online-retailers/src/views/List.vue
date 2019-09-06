<template>
    <div>
        <div class="list">
            <ul class="order">
                <li v-for="(item,index) in orders" :key="index" @click="orderList(item.id)">
                    <span>{{item.text}}</span>
                    <span class="arrow"></span>
                </li>
            </ul>
        </div>
        <Product v-for="(item, index) in dealList" :key="index" :data="item"></Product>
        <div class="load-more" @click="showOther" v-show="other.length!=0" >
            <span>显示其余{{other.length}}条团购</span>
            <span class="arrow">
                <span class="arrow white">
                </span>
            </span>
        </div>
    </div>
</template>
<script>
import Product from '../components/Product';
export default {
    components:{
        Product,
    },
    data() {
        return {
            orders:[
                {text:'价格排序',id:'price'},
                {text:'销量排序',id:'sales'},
                {text:'优惠排序',id:'discount'},
                {text:'好评排序',id:'evaluate'},                
            ],
            list:[],
            other:[],
        }
    },
    methods: {
        orderList(id){
            if(id=='discount'){
                this.list.sort((a,b)=>{
                 return (b.originPrice-b.price)-(a.originPrice-a.price)
                })
                return 
            }
            this.list.sort((a,b)=>{
                return b[id]-a[id]
            })
         
        },
        showOther(){
            this.list=this.list.concat(this.other)
            this.other=[]
        }
    },
    computed: {
        dealList(){
            return this.list.filter((item)=>
                item.title.indexOf(this.$store.state.search)>=0
            )
        }
    },
    // 
    created() {
        this.$http
            .get('/data/list.json?id='+this.$route.params.id)
            .then(({data})=>{
                // const list=this.$route.params.id
                // console.log(data)
                this.list=data.slice(0,5)
                this.other=data.slice(5)
                // this.other=data
            })        
    },
    
}
</script>
<style  lang="scss" scoped>
    @import "../assets/base.scss";
    .list {
        background: #fff;
    }
    .order {
        display: flex;
        li {
            flex: 1;
            font-size: 12px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            &:last-child {
                border-right: none;
            }
            padding: 0 10px;
            color: #666;
            text-align: center;
            line-height: 30px;
            .arrow {
                position: relative;
                @include arrow(5px,#666);
                left: 5px;
                top: 0px;
            }
        }
    }
    .load-more {
        background: #fff;
        color: $navColor;
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
        .arrow {
            position: relative;
            @include arrow(8px,$navColor,top);
            left: 6px;
            top: 2px;
            .white {
                position: absolute;
                border-top-color: #fff;
                top: -11px;
                left: -8px;
            }
        }
    }
</style>