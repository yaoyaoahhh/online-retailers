<template>
    <div class="product">
        <routerLink class="pro-inner" :to="'/detail/'+data.id" tag="div">
            <img :src="'/image/list/'+data.img" alt="">
            <div class="content">
                <h3>{{data.title}}</h3>
                <p>
                    <span class="price">{{data.price}}元</span>
                    <span class="origin-price">原价：{{data.originPrice}}元</span>
                    <span class="sales">月销：{{data.sales}}</span>
                </p>
            </div>
        </routerLink>
    </div>
</template>
<script>
// console.log()
export default {
    name:"Product",
    props:['data'],
    methods: {
        
    },
}

</script>
<style lang="scss" scoped>
@import  '../assets/base.scss';

    .product {
        background: #fff;
       
        .pro-inner {
            display: flex;
            margin: 0 10px; 
            border-bottom: 1px solid #ccc;
            padding: 10px 0;
        }
        img {
            // 
            width: 40%;
            // height: 50%;
        }
        .content {
            flex: 1;
            padding-left: 10px; 
            h3 {
                font-size: 14px;
                color: $navColor;
                min-height: 70%;
            }
            p {
                color: #666;
                font-size: 12px;
                bottom: 0px;
                .price {
                    color: $navColor;
                    margin-right: 8px;
                }
                .sales {
                    float: right;
                }
            }
        }
        
    }
</style>