<template>
  <div class="home">
      <!--<my-header></my-header>-->
      <mt-navbar v-model="selected">
          <mt-tab-item  id="1">社保卡激活</mt-tab-item>
          <mt-tab-item  id="2">历史激活记录</mt-tab-item>
      </mt-navbar>


      <!-- tab-container -->
      <mt-tab-container v-model="selected" swipeable>
          <mt-tab-container-item id="1">
<div class="warning">
    <img src="../../static/img/warning.png" alt="">
    <div>为快速激活，减少审核步骤，推荐您使用待激活社保卡的申请或缴费账户进行激活</div>
</div>
                  <!--<div class="form"><mt-field label="姓名" placeholder="请输入姓名"   v-model="userName"  @keyup="change()"></mt-field>
                      <mt-field label="身份证号" placeholder="请输入身份证号" type="text" v-model="idCard"  @keyup="change()"></mt-field>
                      <mt-field label="社保卡号" placeholder="请输入社保卡号" type="text" v-model="cardNum" @keyup="change()"><div class="example" @click="example1" >示例</div></mt-field>
                      <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="password"  :class="{pwd_invisible:isActive1}" v-model="pwd_invisible" @keyup="change()"><img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt="" @click="input_visible"></mt-field>
                      <mt-field label="社保卡密码" placeholder="请输入社保卡密码" type="text" :class="{pwd_visible:isActive2}" v-model="pwd_visible"><img class="visibility_off" src="../../static/img/ic_visibility.png" alt="" @click="input_invisible"></mt-field>
                      <mt-field label="社保卡SID" placeholder="请输入社保卡SID" type="text"  v-model="sid" @keyup="change()"><div class="example" @click="example2">示例</div></mt-field>
                  </div>-->
<div class="form">
    <div class="userName">
        <div><label for="userName">姓名</label></div>
        <input type="text" placeholder="请输入姓名"  id="userName"  v-model="userName"  @keyup="change()" class="required">
    </div>
    <div class="idCard">
        <div><label for="idCard">身份证号</label></div>
        <input type="text" id="idCard" placeholder="请输入身份证号" class="required"  maxlength="18" v-model="idCard"  @keyup="change()">
    </div>
    <div class="card">
        <div><label for="cardNum">社保卡号</label></div>
        <input type="text" id="cardNum" placeholder="请输入社保卡号" class="required"  maxlength="" v-model="cardNum" @keyup="change()">
        <div class="example" @click="example1" >示例</div>
    </div>
    <div class="password" :class="{pwd_invisible:isActive1}">
        <div><label for="pwd_invisible">社保卡密码</label></div>
        <input type="password" id="pwd_invisible" placeholder="请输入社保卡密码" class="required"  maxlength="11"   v-model="pwd_invisible" @keyup="change()">
        <img class="visibility_off" src="../../static/img/ic_visibility_off.png" alt="" @click="input_visible">
    </div>
    <div :class="{pwd_visible:isActive2}" class="password">
        <div><label for="pwd_visible">社保卡密码</label></div>
        <input type="text" id="pwd_visible" placeholder="请输入社保卡密码" class="required"  maxlength="11"  v-model="pwd_visible">
        <img class="visibility_off" src="../../static/img/ic_visibility.png" alt="" @click="input_invisible">
    </div>
    <div class="sid">
        <div><label for="sid">社保卡SID</label></div>
        <input type="text" id="sid" placeholder="请输入社保卡SID" class="required"  maxlength=""  v-model="sid" @keyup="change()">
        <div class="example" @click="example2">示例</div>
    </div>
    <div class="" style="height:15px;background:#E5E5E5;margin:0"></div>
    <div class="bank">
        <div><label for="bank">开户行</label></div>
        <input type="text" disabled="disabled" style="background:white"  @click="" id="bank" placeholder="请选择社保卡金融账户开户行" class="required"  maxlength=""  v-model="bank" @keyup="change()">
        <img src="../../static/img/Chevron.png" alt="" @click="selectBank" class="right_arrow">
    </div>
    <div class="account">
        <div><label for="account">收款账户</label></div>
        <input type="text" id="account" placeholder="请输入社保卡金融账户卡号" class="required"  maxlength=""  v-model="account" @keyup="change()">
        <div class="example" @click="example3">示例</div>
    </div>

</div>
              <div class="activation" @click="activation($event)" :class="{activation1:isActive3}">立即激活</div>
              <div class="prompt">
                  <div class="title">温馨提示</div>
                  <ul>
                      <li>
                          <img src="../../static/img/Group1.png" alt="">
                          <div>社保卡线上激活功能目前只支持<strong style="color:#333333">城乡居民</strong>医保参保用户，<strong style="color:#333333">城镇职工</strong>参保用户请持卡至医保定点医疗机构、定点药店进行激活。

                          </div>
                      </li>
                      <li>
                          <img src="../../static/img/Group2.png" alt="">
                          <div>社保卡初始密码为：123456，为了您的账户安全，请您在医保定点医疗机构就诊时修改密码。</div>
                      </li>
                      <li>
                          <img src="../../static/img/Group3.png" alt="">
                          <div>社保卡金融账户是您后期医疗费用报销时的收款账户，请您在填写时仔细核对。</div>
                      </li>
                      <li>
                          <img src="../../static/img/Group4.png" alt="">
                          <div>如您在社保卡激活过程中有任何疑问或问题，请及时联系客服人员，客服电话：0316-5900201。</div>
                      </li>
                  </ul>
              </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2" >
             <ul class="historyCell" v-if="list.length">
                 <li v-for="item in list">
                     <div class="top">
                         <div class="num">处理进度</div>
                         <div class="status">{{item.StatusName}}</div>
                     </div>
                     <div class="under">
                         <div class="name"><span>参保人</span>{{item.RealName}}</div>
                         <div class="idCard"><span>社保卡号</span>{{item.SINCardId}}</div>
                         <div class="data"><span>社会保障卡</span>{{item.IdentityCard}}</div>
                     </div>
                     <div class="detail" @click.prevent="detail(item.ID,item.StatusValue)">查看详情</div>

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
      <mt-popup
          v-model="popupVisible3">
          <img src="../../static/img/account.png" alt="" class="cardNum">
      </mt-popup>

      <mt-actionsheet
          :actions="actions"
          v-model="sheetVisible">
      </mt-actionsheet>

  </div>
</template>

<script>
    import Bus from '../util/bus'
    import {Toast} from 'mint-ui'
    /*import header from '../../src/components/header'*/
import {activation,getHistoryList,getCardInfo,getConfig} from '../api/index'
    import config from '../api/config'

    export default{
        /*components:{
            'myHeader':header
        },*/
        data(){
            return{
                list:[],
                actions:[
                    /*{name:'请选择金融账户开户行'},*/
                    {name:'',CashAccountCode:'',method:this.bank1},
                    {name:'',CashAccountCode:'',method:this.bank2},
                    {name:'',CashAccountCode:'',method:this.bank3},
                    {name:'',CashAccountCode:'',method:this.bank4},
                    {name:'',CashAccountCode:'',method:this.bank5},
                    {name:'',CashAccountCode:'',method:this.bank6},
                    {name:'',CashAccountCode:'',method:this.bank7},

                ],
                sheetVisible:false,
                selected:this.$route.query.tab || '1',
                active:'tab-container1',
                popupVisible1:false,
                popupVisible2:false,
                popupVisible3:false,
                isActive1:false,
                isActive2:true,
                isActive3:false,
                pwd_invisible:'',
                pwd_visible:'',
                userName:'',
                idCard:'',
                cardNum:'',
                sid:'',
                bank:'',
                account:'',
                AccountCode:'',
                isBinding:'',
                showMsgbox1:'',

            }
        },
mounted:function(){
   /* alert(this.$parent.a)*/
},
        created:function(){

            var _this=this;
            getHistoryList({passwordId:0}).then(function(res){
                //var _this=this;
                console.log(111)
                console.log(res)
                console.log(res.data.Data.SINCardActiveRecordList)
                _this.list=res.data.Data.SINCardActiveRecordList
            })
            getCardInfo({passwordId:0}).then(function(res){
                console.log(333);
                console.log(res);
                _this.isBinding=res.data.Data.SINCardIsBinding
                if(res.data.IsSuccess){
                if(res.data.Data.SINCardIsBinding){
                    _this.userName=res.data.Data.RealName;
                    _this.idCard=res.data.Data.IdentityCard;
                    _this.cardNum=res.data.Data.SINCardId;
                    _this.sid=res.data.Data.SINCardSid;
                }
                }
            })

            this.actions.forEach(function(item,index){
                console.log(item.name);
                getConfig().then(function(res){
                    var _this=this;
                    console.log(res);
                    console.log(res.data.Data.ConfigItems[2][index].ConfigName)
                    item.name=res.data.Data.ConfigItems[2][index].ConfigName;
                    item.CashAccountCode=res.data.Data.ConfigItems[2][index].ConfigNumber
                })
            })



           if(!window.localStorage.getItem('box')){
               window.localStorage.setItem('box',111)
               this.showMsgbox()
           }


        },

        methods:{
            showMsgbox() {
              var _this=this;
              _this.$messagebox.alert('社保卡线上激活功能目前只支持城乡居民医保参保用户，城镇职工参保用户请持卡到医保定点医疗机构、定点药店进行激活','温馨提示')

            },
            bank1:function(){
                this.bank=this.actions[0].name;
                this.AccountCode=this.actions[0].CashAccountCode;
            },
            bank2:function(){
                this.bank=this.actions[1].name;
               this.AccountCode=this.actions[1].CashAccountCode
            },
            bank3:function(){
                this.bank=this.actions[2].name
                this.AccountCode=this.actions[2].CashAccountCode
            },
            bank4:function(){
                this.bank=this.actions[3].name
                this.AccountCode=this.actions[3].CashAccountCode

            },
            bank5:function(){
                this.bank=this.actions[4].name
                this.AccountCode=this.actions[4].CashAccountCode

            },
            bank6:function(){
                this.bank=this.actions[5].name
                this.AccountCode=this.actions[5].CashAccountCode

            },
            bank7:function(){
                this.bank=this.actions[6].name
                this.AccountCode=this.actions[6].CashAccountCode

            },
            example1:function(){
                this. popupVisible1=true;
            },
            example2:function(){
                this. popupVisible2=true
            },
            example3:function(){
                this.popupVisible3=true;
            },
            example4:function(){

            },
            selectBank:function(){
               this.sheetVisible=true
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
            },
            detail:function(id,value){

                this.$router.push({name:'success',params:{ID:id}})

            },
            activation:function(event){
                var _this=this;

                if(this.userName.length!==0&&this.idCard.length!==0&&this.cardNum.length!==0&&this.pwd_invisible.length!==0&&this.sid.length!==0&&this.bank.length!==0&&this.account.length!==0){

                }else if(this.userName.length!==0&&this.idCard.length!==0&&this.cardNum.length!==0&&this.pwd_visible.length!==0&&this.sid.length!==0&&this.bank.length!==0&&this.account.length!==0){

                }else{
                    return false
                }
                //身份证验证
                var c=this.idCard;
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                if(reg.test(c) === false)
                {
                    Toast({
                        message: '身份证输入不合法',
                        position: 'bottom',
                        duration: 2000
                    });
                    return  false;
                }


                var data={};
                data.RealName=_this.userName;
                data.IdentityCard=_this.idCard;
                data.SinCard=_this.cardNum;
                data.SinPwd=_this.pwd_invisible||_this.pwd_visible;
                data.SinSid=_this.sid;
                data.CashAccount=_this.account;
                data.CashAccountName=_this.bank;
                data.CashAccountCode=_this.AccountCode;
                data.PasswordId=0;
                this.$parent.form=data;
                console.log(444444);
                console.log(this.$parent.form);

               //console.log(_this.userName)
                activation(data).then(function(res){
                    /*console.log(2222)*/
                    console.log(res);

                    Toast({
                        message: res.data.Message,
                        position: 'bottom',
                        duration: 2000
                    });
                    if(res.data.Code==-1008){
                        _this.$router.push('/selectPaperwork')
                    }
                    if(res.data.IsSuccess){
                        if(_this.isBinding){
                            _this.$router.push('/alreadyBind')
                        }else{
                            _this.$router.push('/noBind')
                        }
                    }


                });
                Bus.$emit('getTarget', data);


            },
           change:function(){
                if(this.userName.length!==0&&this.idCard.length!==0&&this.cardNum.length!==0&&this.pwd_invisible.length!==0&&this.sid.length!==0&&this.bank.length!==0&&this.account.length!==0){
                    this.isActive3=true;
                }else if(this.userName.length!==0&&this.idCard.length!==0&&this.cardNum.length!==0&&this.pwd_visible.length!==0&&this.sid.length!==0&&this.bank.length!==0&&this.account.length!==0){
                    this.isActive3=true;
                }
                else{
                    this.isActive3=false
                }
           }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    *{
        box-sizing:border-box;
    }
    body{
       /* background:#E5E5E5;*/
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
   /* body{
        background:#E5E5E5;
    }*/
    #2{
        height:100%
    }
    .warning{
        background:#FFF7EB;
        height:53px;
        padding:10px 10px 10px 15px;
        text-align:left;
        display:flex;
    }
    .warning img{
        height:13px;
        width:13px;
        vertical-align: top;
        margin-top:4px;
    }
    .warning div{
        display:inline-block;
        font-size:12px;
        margin-left:6px;
        text-align:left;
        color:#FBB640
    }
  //form表单
    .form{
        height:323px;
        background:white;
    }
    .form input{
        border:0;
        height:43px;
        font-size:16px;
        width:75%;
    }
    .form>div{
        border-bottom:1px solid #E5E5E5;
        margin-left:15px;
        text-align:left;
        font-size:0;
    }
    .form div div{
        display:inline-block;
        width:25%;
        font-size:16px;
    }
    .form .card,.form .sid,.form .account{
position:relative;
    }
    .form .example{
        position:absolute;
        width:62px;
        right:0;
        text-align:center
    }
    .form .password{
        position:relative;
    }
    .form .password img{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        margin-right:28px;
    }











.prompt{
    background: #E5E5E5;
    text-align:left;
    padding:20px
}
.prompt .title{
    color:#333333;
    font-size:16px;
}
    .prompt img{
        height:14px;
        width:14px;
        margin-right:9px;
        margin-top:4px;
    }
    .prompt li{
        list-style: none;
        margin-top:15px;
        display:flex;
    }
    .prompt li div{
        display:inline-block;
        color:#666666;
        font-size:14px;
    }
    .home{
        background:#E5E5E5;
        height:100%
    }
    .pwd_visible,.pwd_invisible{
display:none;
    }
    .historyNone{
        height:100%;
        /*background:white;*/
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
    .historyCell{
        background: #E5E5E5;
        height:100%;
    }

    .historyCell li{
        margin-top:35px;
       /* height:176px;*/
        list-style:none;
        /*margin-bottom:20px;*/
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
        /*line-height:28px;*/

    }
    .historyCell .under{
        color:#888888;
        font-size:14px;
        font-family:PingFangSC-Regular;
        padding-right:15px;
        padding-bottom:10px;

    }
    .historyCell .under .name,.historyCell .under .idCard,.historyCell .under .data{
        display:flex;
        justify-content: space-between;
        margin-bottom:11px;
    }
    .detail{
        border-top:1px solid #E5E5E5;
        height:47px;
        line-height:47px;
        color:#00AE66;
        font-size:15px;
    }
    .bank{
        position:relative;
    }
    .right_arrow{
        height:13px;
        width:8px;
        position: absolute;
        right: 15px;
        top: 50%;
        margin-top: -6px;
    }
    .form{
        height:323px;
    }
    .form .visibility_off{
        height:13px;
        width:15px;
        margin-right:29px;
    }
    .example{
        /*padding:0 20px;*/
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
    .activation1{
        opacity: 1;
    }


</style>
