<template>
  <div id="app">
  <div class="header">
    <div class="go-back">
      <span class="arrow"  @click="goBack" v-show="$route.fullPath!=='/'">
        <span class="arrow pink">
        </span>
      </span>
    </div>
    <h1>吃货团购网</h1>
    <div class="login">登陆</div>
  </div>
  <div v-show="!$route.fullPath.includes('/detail/')" class="search"><input type="text" v-model="msg" @keyup.enter="showSearchResult" placeholder="请输入搜索关键字"></div>
   <keep-alive>
   <router-view></router-view>
   </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'',
    }
  },  
  methods: {
    showSearchResult(){
      this.$store.commit('updateSearch',this.msg)
      this.msg=''
    },
    goBack(){
      this.$router.go(-1)
    },
    
  },
  
   
}
</script>
<style lang="scss">
@import "./assets/base.scss";

* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html body {
  background: #efefef;
}
.header {
  background: $navColor;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color:#fff;
  display: flex;
  // flex: 1;
  .go-back,
  .login {
    width: 60px;
  };
  .go-back {
    position: relative;
    .arrow {
      @include arrow(10px,#fff,right);
      position: absolute;
      top: 22px;
      left: 10px;
      .pink {
        // @include arrow(10px,$navColor,right);
        border-right-color: $navColor;
        top:-10px;
        left: -7px;
      }
    }
  }
  .login {
    font-size: 14px;
  };
  h1 {
    flex:1;
    font-size: 25px;
  };
}
.search {
  background: #fff;
  padding: 10px 20px;
  display: flex;
  input {
    font-size: 14px;
    border: none;
    background: #efefef;
    outline: none;
    padding:  10px 20px;
    border-radius:18px;
    flex:1
  }
}
</style>
