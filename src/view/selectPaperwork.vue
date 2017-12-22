<template>
    <div class="selectPaperwork">
        <div class="warning">
            <img src="../../static/img/safeWarning.png" alt="">
            <div>当前登录账号与待激活社保卡的申领账号/缴费账号不符，为保证社保卡账户安全，激活前需要您上传相关证件照片进行审核，感谢您的理解与配合！</div>
        </div>
        <div class="form">
            <div class="paperwork">
                <div><label for="paperwork">证件类型</label></div>
                <input type="text" @click="selectPaperwork" id="paperwork" placeholder="选择证件类型"  maxlength=""  v-model="paperwork" @keyup="change()">
                <img src="../../static/img/Chevron.png" alt="" @click="selectPaperwork" class="right_arrow">
            </div>
               <div class="relation">
                   <div><label for="relation">与参保人关系</label></div>
                   <input type="text" @click="selectRelation" id="relation" placeholder="选择您与参保人的关系"  maxlength=""  v-model="relation" @keyup="change()">
                    <img src="../../static/img/Chevron.png" alt="" @click="selectRelation" class="right_arrow">
               </div>
            <div class="phoneNum">
                 <div><label for="phoneNum">手机号码</label></div>
                 <input type="text" id="phoneNum" placeholder="填写参保人/监护人手机号码"  maxlength="11" v-model="phoneNum" @keyup="change()">
            </div>
            <div class="verificationCode">
                 <div><label for="verificationCode">验证码</label></div>
                 <input type="text" id="verificationCode" placeholder="输入验证码"  maxlength="" v-model="verificationCode" @keyup="change()">
                <div class="send" @click="example1" >发送验证码</div>
            </div>
        </div>
        <div class="next" :class="{next1:isActive}">下一步</div>
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
    export default {
        name: "select-paperwork",
        data(){
            return{
                 sheetVisible1:false,
                sheetVisible2:false,
                paperwork:'',
                relation:'',
                phoneNum:'',
                  verificationCode:'',
                isActive:false,
                  actions1:[
                      {
                          name:'身份证',method:this.paperwork1
                      },
                      {
                         name:'户口本',method:this.paperwork2
                      }
                  ] ,
                actions2:[
                    {
                        name:'本人',method:this.relation1
                    },
                    {
                        name:'亲属',method:this.relation2
                    },
                    {
                        name:'朋友',method:this.relation3
                    },
                    {
                        name:'其他',method:this.relation4
                    }
                ]
            }
        },
        methods:{
            selectPaperwork:function(){
                this.sheetVisible1=true
            },
            paperwork1:function(){
                this.paperwork=this.actions1[0].name
            } ,
            paperwork2:function(){
                 this.paperwork=this.actions1[1].name
            },
            selectRelation:function(){
               this.sheetVisible2=true
            },
             relation1: function(){
                    this.relation=this.actions2[0].name
             },
             relation2: function(){
                    this.relation=this.actions2[1].name
             },
            relation3: function(){
                   this.relation=this.actions2[2].name
            } ,
            relation4: function(){
                   this.relation=this.actions2[3].name
            } ,
             change:function(){
                            if(this.paperwork.length!==0&&this.relation.length!==0&&this.phoneNum.length!==0&&this.verificationCode.length!==0){
                                this.isActive=true;
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
        width:309px;
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
         font-size:16px;
         width:220px;
    }
     .form>div{
         border-bottom:1px solid #E5E5E5;
         margin-left:15px;
         text-align:left;
     }
    .form div div{
          display:inline-block;
        width:100px;
    }
    .paperwork,.relation{
          position:relative;
    }
    .send{
        padding:0 2px;
           position:absolute;
            width:62px;
           right:0;
            text-align:center ;
             border-left:1px solid #E5E5E5;
             height:44px;
             line-height:44px;
             color:#00AE66
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
    .next1{
        opacity:1
    }
  </style>
