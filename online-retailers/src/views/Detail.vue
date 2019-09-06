<template>
    <div class="detail">
        <div class="img-part">
            <img :src="'/image/list/'+data.src" alt="">
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
        <div class="price-part">
            <span class="price"><em>{{data.price}}</em> 元</span>
            <span class="origin-price">原价: {{data.originPrice}}元</span>
            <span class="btn-buy">立即购买</span>
        </div>
        <ul class="sales-part">
            <li>支持立即退货</li>
            <li>支持随时退货</li>
            <li>销量{{data.sales}}</li>
        </ul>
        <div class="module store-part">
            <div class="module-header">商家信息</div>
            <div class="module-body">
                <p>{{data.storeName}}</p>
                <p>{{data.storeAddress}}</p>
            </div>
            <div class="module-footer">共{{data.storeNum}}家分店</div>
        </div>
        <div class="module buy-part">
            <div class="module-header">购买须知</div>
            <div class="module-body">
                <h3>有效日期</h3>
                <p>{{data.validateTime}}</p>
                <h3>可使用时间段</h3>
                <p>{{data.useTime}}</p>
                <h3>有效规则</h3>
                <p v-for="(item,index) in data.rules" :key="index">{{item}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data:{}
        }
    },
    methods: {
        updateData(){
            const params=this.$route.params;
            this.$http
               .get('/data/detail.json',{params})
               .then(({data})=>{
                   this.data=data
                //    console.log(params)
               })
        }
    },
    created() {
        this.updateData()

    },
    /* beforeRouteUpdate(to, from, next){
           this.updateData()
           console.log(to)
           next()
    }*/

     watch:{
         $route:{
             handler(to,from){
            //  console.log(to,from);
               this.updateData()
            //    console.log('change')
            },
               deep: true
           },
    },
    
}
</script>
<style lang="scss" scoped>
@import '../assets/base.scss';
    .img-part {
        position: relative;
        img {
            display: block;
            width: 100%;
        }
        h1,
        p {
            color: #fff;
            position: absolute;
            bottom: 15px;
            right: 20px;
        }
        h1 {
            bottom: 40px;
        }

    }
    .price-part {
       background: #fff;
       color: #666;
       border-bottom: 1px solid #ccc;
       padding:  10px 10px; 
       .price {
           color: $navColor;
           margin-right: 10px;
           em {
               font: {
                   size:30px;
                   style: normal;
                   }
           }
       }
       .btn-buy {
           float: right;
           color:#fff;
           font-size: 14px;
           margin-top: 5px;
           padding: 5px 10px;
           background: $navColor;

       }
    }
    .sales-part {
        @include clearfix;
        background: #fff;
        padding: 10px 10px;
        li {
            float: left;
            line-height: 30px;
            width: 50%;
            color: skyblue;
            &:last-child {color:#666;}
        }
    }
    .module {
        background: #fff;
        margin-top: 10px;
        padding: 10px;
        .module-header {
            font-size: 20px;
            color: $navColor;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc; 
        }
        .module-body {
            line-height: 30px;
            padding: 10px;
        }
        .module-footer {
            color: skyblue;
            padding: 10px 0;
            border-top: 2px solid #ccc;
        }
    }
    .buy-part {
        h3 {
            color: skyblue;
        }
    }
    
</style>