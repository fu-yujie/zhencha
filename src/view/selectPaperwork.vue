<template>
    <div class="selectPaperwork">
        <div class="warning">
            <img src="../../static/img/safeWarning.png" alt="">
            <div>当前登录账号与待激活社保卡的申请/缴费账号不符，为保证社保卡账户安全，激活前需要您上传相关证件照片进行审核，感谢您的理解与配合！</div>
        </div>
        <div class="form">
            <div class="paperwork" >
                <div><label for="paperwork">证件类型</label></div>
                <div class="inputBox" @click="selectPaperwork"><input type="text" disabled style="background:white"  id="paperwork" placeholder="选择证件类型"  maxlength=""  v-model="paperwork" @keyup="change()"></div>
                <img src="../../static/img/Chevron.png" alt="" @click="selectPaperwork" class="right_arrow">
            </div>
               <div class="relation" >
                   <div><label for="relation">与参保人关系</label></div>
                   <div class="inputBox" @click="selectRelation"><input type="text" disabled style="background:white"  id="relation" placeholder="选择您与参保人的关系"  maxlength=""  v-model="relation" @keyup="change()"></div>
                    <img src="../../static/img/Chevron.png" alt="" @click="selectRelation" class="right_arrow">
               </div>
            <div class="phoneNum">
                 <div><label for="phoneNum">手机号码</label></div>
                 <input type="number" id="phoneNum" placeholder="填写参保人/监护人手机号码" onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();"  maxlength="11" v-model="phoneNum" @keyup="change()">
            </div>
            <div class="verificationCode">
                 <div><label for="verificationCode">验证码</label></div>
                 <input type="text" id="verificationCode" placeholder="输入验证码"  maxlength="" v-model="verificationCode" @keyup="change()">
                <div v-show="show" class="send" @click="send" >发送验证码</div>
                <div v-show="!show" class="send">{{count}}s</div>
            </div>
        </div>
        <div class="next" :class="{next1:isActive}" @click="next">下一步</div>
         <mt-actionsheet
                   :actions="actions1"
                   v-model="sheetVisible1">
               </mt-actionsheet>
           <mt-actionsheet
                     :actions="actions2"
                     v-model="sheetVisible2">
                 </mt-actionsheet>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import Bus from '../util/bus'
    import {getConfig,getinfoCode,checkCode} from '../api/index'
    export default {
        name: "select-paperwork",
        data(){
            return{
                show: true,
                count: '',
                timer: null,
                 sheetVisible1:false,
                sheetVisible2:false,
                paperwork:'',
                relation:'',
                phoneNum:'',
                  verificationCode:'',
                isActive:false,
                paperWorkType:'',
                relationType:'',
                //form:'',
                  actions1:[
                      {
                          name:'',type:'',method:this.paperwork1
                      },
                      {
                         name:'',type:'',method:this.paperwork2
                      }
                  ] ,
                actions2:[
                    {
                        name:'',type:'',method:this.relation1
                    },
                    {
                        name:'',type:'',method:this.relation2
                    },
                    {
                        name:'',type:'',method:this.relation3
                    },
                    {
                        name:'',type:'',method:this.relation4
                    }
                ]
            }
        },
        created:function(){
            this.actions1.forEach(function(item,index){
                console.log(item.name);
                getConfig().then(function(res){
                    var _this=this;
                    console.log(res);
                    console.log(111111)
                    item.name=res.data.Data.ConfigItems[1][index].ConfigName;
                    item.type=res.data.Data.ConfigItems[1][index].ConfigNumber;
                })
            })
            this.actions2.forEach(function(item,index){
                console.log(item.name);
                getConfig().then(function(res){
                    var _this=this;

                    item.name=res.data.Data.ConfigItems[3][index].ConfigName;
                    item.type=res.data.Data.ConfigItems[3][index].ConfigNumber;

                })
            })

              /*  Bus.$on('getTarget', function(res) {
                    console.log(11)
                    console.log(res);
                    var data={};
                    data=res;
                    console.log(33)
                    console.log(data)
                    Bus.$emit('upload', data);
                });*/

        },
        methods:{
            selectPaperwork:function(){
                this.sheetVisible1=true;
            },
            paperwork1:function(){
                this.paperwork=this.actions1[0].name
                this.paperWorkType=this.actions1[0].type
            } ,
            paperwork2:function(){
                 this.paperwork=this.actions1[1].name
                this.paperWorkType=this.actions1[1].type
            },
            selectRelation:function(){
               this.sheetVisible2=true
            },
             relation1: function(){
                    this.relation=this.actions2[0].name;
                 this.relationType=this.actions2[0].type
             },
             relation2: function(){
                    this.relation=this.actions2[1].name;
                 this.relationType=this.actions2[1].type
             },
            relation3: function(){
                   this.relation=this.actions2[2].name;
                this.relationType=this.actions2[2].type
            } ,
            relation4: function(){
                   this.relation=this.actions2[3].name;
                this.relationType=this.actions2[3].type
            } ,
            next:function(){
                var _this=this;
               console.log(5555);
               console.log(this.form);
                if(this.paperwork.length!==0&&this.relation.length!==0&&this.phoneNum.length!==0&&this.verificationCode.length!==0){

                }else{
                    return false
                }
               var data={};
                data.Mobile=this.phoneNum;
                data.InsuredRelation=this.relationType;
                data.CardType=this.paperWorkType;
                this.$parent.form1=data;
                console.log(44444);
                console.log(this.$parent.form1)
                checkCode({phone:this.phoneNum,validateContent:this.verificationCode}).then(function(res){
                    console.log('fff')
                    console.log(res);
                    if(res.data.Data){
                        if(_this.paperWorkType==1){
                            _this.$router.push('/uploadIdcard')
                        }else if(_this.paperWorkType==2){
                            _this.$router.push('/uploadAccount')
                        }
                    }else{
                        Toast({
                            message: '验证码输入错误',
                            position: 'bottom',
                            duration: 2000
                        });
                    }
                })
            },
            send:function(){
var _this=this
                getinfoCode({phone:this.phoneNum,templateCode:'VerificationCode'}).then(function(res){
                       console.log(res)
                    if(res.data.IsSuccess){
                        Toast({
                            iconClass: 'mintui mintui-success',
                            message: '验证码发送成功',
                            position: 'bottom',
                            duration: 2000
                        });
                        const TIME_COUNT = 60;
                        if (!_this.timer) {
                            _this.count = TIME_COUNT;
                            _this.show = false;
                            _this.timer = setInterval(() => {
                                if (_this.count > 0 && _this.count <= TIME_COUNT) {
                                    _this.count--;
                                } else {
                                    _this.show = true;
                                    clearInterval(_this.timer);
                                    _this.timer = null;
                                }
                            }, 1000)
                        }
                    }else{
                        Toast({
                            message: '验证码发送失败',
                            position: 'bottom',
                            duration: 2000
                        });
                    }

                })
            },
             change:function(){
                            if(this.paperwork.length!==0&&this.relation.length!==0&&this.phoneNum.length!==0&&this.verificationCode.length!==0){
                                this.isActive=true;
                            }else{
                                this.isActive=false
                            }

                            }


        }
    }
</script>

<style scoped>
    .selectPaperwork{
        height:100%;
         background:#E5E5E5;
    }
    .warning{
       background:white;
        margin-bottom:15px;
        padding:32px 33px 22px;
    }
    .warning img{
        height:100px;
        width:100px;
        margin-bottom:19px;
    }
    .warning div{
        width:100%;
        margin:0 auto;
        text-align:left;
        font-size:14px;
        color:#333333
    }
    .form{
        background:white;
    }
    .form input{
          border:0;
         height:43px;
         font-size:14px;
         width:70%;
        color:#333333
    }
     .form>div{
         border-bottom:1px solid #E5E5E5;
         margin-left:15px;
         text-align:left;
         font-size:0
     }
    .form div div{
        color:#333333;
       display:inline-block;
        width:30%;
        position:relative;
        font-size:14px;
    }
   #app .inputBox{
        width:70%
    }
    #app .inputBox input{
        width:100%
    }
    #app .verificationCode{
        margin-left:0;
        padding-left:15px;
    }
    .paperwork,.relation{
          position:relative;
    }
    .send{
        padding:0 2px;
           position:absolute!important;
            width:105px !important;
           right:0;
            text-align:center ;
             border-left:1px solid #E5E5E5;
             height:44px;
             line-height:44px;
             color:#00AE66!important;
    }
     .right_arrow{
          height:13px;
        width:8px;
        position: absolute;
        right: 15px;
        top: 50%;
         margin-top: -6px;
          }

    .next{
         width:90%;
        height:47px;
        color:white;
        background:#00AE66;
        line-height:47px;
        border-radius:5px;
         margin:0 auto;
         margin-top:25px;
        margin-bottom:15px;
         opacity: 0.4;
        }
    .next1{
        opacity:1
    }
  </style>
