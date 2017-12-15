<script src="../../static/js/hammer.min.js"></script>npm<template>
  <div class="home">
      <my-header></my-header>
      <mt-navbar v-model="selected">
          <mt-tab-item  id="1">社保卡激活</mt-tab-item>
          <mt-tab-item  id="2">历史激活记录</mt-tab-item>
      </mt-navbar>


      <!-- tab-container -->
      <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="1">

                  <div class="form"><mt-field label="姓名" placeholder="请输入姓名"  v-model="userName"></mt-field>
                      <mt-field label="身份证号" placeholder="请输入身份证号" type="text" v-model="idCard"></mt-field>
                      <mt-field label="社保卡号" placeholder="请输入社保卡号" type="text" v-model="cardNum"><div class="example" @click="example1">示例</div></mt-field>
                      <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="password"  :class="{pwd_invisible:isActive1}" v-model="pwd_invisible"><img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt="" @click="input_visible"></mt-field>
                      <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="text" :class="{pwd_visible:isActive2}" v-model="pwd_visible"><img class="visibility_off" src="../../static/img/ic_visibility.png" alt="" @click="input_invisible"></mt-field>
                      <mt-field label="社保卡SID" placeholder="请输入社保卡SID" type="text"  v-model="sid"><div class="example" @click="example2">示例</div></mt-field>
                     </div>
              <div class="activation" @click="">立即激活</div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
             <ul class="historyCell" v-if="list.length">
                 <li v-for="item in list">
                     <div class="top">
                         <div class="num">{{item.num}}</div>
                         <div class="status">{{item.status}}</div>
                     </div>
                     <div class="under">
                         <div class="name"><span>参保人</span>{{item.name}}</div>
                         <div class="idCard"><span>身份证号</span>{{item.id}}</div>
                         <div class="data"><span>激活日期</span>{{item.data}}</div>
                     </div>

                 </li>
             </ul>
              <div v-if="!list.length" class="historyNone">
                  <img src="../../static/img/history_none.png" alt="">
                  <div>未找到历史激活记录</div>
              </div>
          </mt-tab-container-item>
      </mt-tab-container>

      <mt-popup
          v-model="popupVisible1">
          <img src="../../static/img/cardNum.png" alt="" class="cardNum">
      </mt-popup>
      <mt-popup
          v-model="popupVisible2">
          <img src="../../static/img/SID.png" alt="" class="cardNum">
      </mt-popup>

  </div>
</template>

<script>
    import header from '../../src/components/header'
    export default{
        components:{
            'myHeader':header
        },
        data(){
            return{
                selected:'1',
                active:'tab-container1',
                popupVisible1:false,
                popupVisible2:false,
                isActive1:false,
                isActive2:true,
                pwd_invisible:'',
                pwd_visible:'',
                userName:'',
                idCard:'',
                cardNum:'',
                sid:'',
                list:[
                    {
                       num:1,
                        status:'已激活',
                        name:'付',
                        id:1234,
                        data:2017
                    },{
                        num:1,
                        status:'已激活',
                        name:'付',
                        id:1234,
                        data:2017
                    }
                ]
            }
        },

        methods:{

            example1:function(){
                this. popupVisible1=true
            },
            example2:function(){
                this. popupVisible2=true
            },
            input_visible:function(){
                this.isActive1=true;
                this.isActive2=false;
                this.pwd_visible=this.pwd_invisible
            },
            input_invisible:function(){
                this.isActive1=false;
                this.isActive2=true;
                this.pwd_invisible=this.pwd_visible
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    *{
        box-sizing:border-box;
    }
    /*.item {
        display: inline-block;
    }

    .nav {
       !* padding: 10px;*!
        height:48px;
    }

    .link {
        color: inherit;
        padding: 20px;
        display: block;
    }*/
    .home{
        background:#E5E5E5;
        height:100%
    }
    .pwd_visible,.pwd_invisible{
display:none;
    }
    .historyNone{
        height:100%;
        background:white;
    }
    .historyNone div{
        color:#999999;
        font-size:18px;
        margin-top:26px;
    }
    .historyNone img{
        margin-top:85px;
        height:123px;
        width:105px;
    }
    .historyCell li{
        height:176px;
        margin-bottom:20px;
        background:white;
    }
    .historyCell li .top{
        height:59px;
        margin-left:15px;
        border-bottom:1px solid #E5E5E5;
        line-height:59px;
        display:flex;
        justify-content: space-between;
        margin-top:-18px;
    }
   .historyCell .top .status{
       /* display:inline-block;*/
       margin-right:15px;
       font-size:21px;
       font-family: PingFangSC-Regular;
    }
    .historyCell .under{
        margin-left:15px;
        text-align:left;
         margin-top:15px;
        line-height:28px;
    }
    .historyCell .under{
        color:#888888;
        font-size:14px;
        font-family:PingFangSC-Regular;
        padding-right:15px;
    }
    .historyCell .under .name,.historyCell .under .idCard,.historyCell .under .data{
        display:flex;
        justify-content: space-between;
    }
    .form{
        height:220px;
    }
    .form .visibility_off{
        height:13px;
        width:15px;
        margin-right:29px;
    }
    .example{
        padding:0 20px;
        border-left:1px solid #E5E5E5;
        height:44px;
        line-height:44px;
        color:#00AE66
    }
    .cardNum{
        width:272px;
        height:173px;
    }
    .activation{
        width:335px;
        height:47px;
        color:white;
        background:#00AE66;
        line-height:47px;
        border-radius:10px;
        margin:0 auto;
        margin-top:25px;
        opacity: 0.4;
    }

    .mint-navbar{
        margin-bottom:15px;
    }
    .mint-popup{
        height:173px;
        border-radius:10px;
    }
    .mint-cell{
        min-height:44px;
    }
    .mint-navbar .mint-tab-item.is-selected{
        color:#00AE66;
border-bottom:2px solid #00AE66
    }
    .mint-tab-item-label{
        font-size:14px !important;
       display:inline-block;

    }
    .mint-navbar .mint-tab-item{
        padding:14px 0 !important;
    }
    .mint-cell-wrapper{
        padding:0 !important;
        margin-left:15px;
        border-bottom:1px solid #E5E5E5
    }
    .mint-cell-title{
        text-align:left;
        flex:none;
    }
    .mint-cell-text{
        font-size:16px;
        color:#333333
    }
</style>
