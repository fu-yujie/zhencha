<template>
    <div class="noBind">
        <!--<my-header></my-header>-->
        <div class="success">
            <img src="../../static/img/success.png" alt="" class="successImg">
            <div class="successText">激活成功</div>
            <div class="successPrompt">社保卡已激活成功，请您在定点医疗机构就医时尽快修改社保卡密码</div>
            <div class="bind" @click="bind" :class="{grey:isActive} ">绑定社保卡</div>
            <div class="return" @click="back">返回医保大厅</div>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import {Indicator} from 'mint-ui'
    import {cardBind} from '../api/index'
    /*import header from '../../src/components/header'*/
    export default {
       /* components:{
            'myHeader':header
        },*/
        data(){
            return{
                isActive:false
            }
        },
        created:function(){
            /*this.$parent.backRouter='/'*/
        },
        methods:{
            bind:function(){
                var _this=this;
                Indicator.open({
                    text:'绑卡中，请稍等...',
                    spinnerType:'fading-circle'
                });
                var obj={};
                obj.RealName=this.$parent.form.RealName;
                obj.IdentityCard=this.$parent.form.IdentityCard;
                obj.SinCardId=this.$parent.form.SinCard;
                obj.SinCardPwd=this.$parent.form.SinPwd;
                obj.SinCardSid=this.$parent.form.SinSid;
                obj.Account=0;
                cardBind(obj).then(function(res){
                    console.log(2222)
                    console.log(res)
                    Indicator.close();
                    if(res.data.IsSuccess){
                        _this.isActive=true;

                        Toast({
                            message: res.data.Message,
                            position: 'bottom',
                            duration: 2000
                        });
                    }else{
                        Toast({
                            message: res.data.Message,
                            position: 'bottom',
                            duration: 2000
                        });
                    }

                })
            },
            back:function(){
                window.location='http://testlfybwx.zhiscity.com/Basic/Special/Index'
            }
        }
    }
</script>

<style scoped>
    *{
        font-family: PingFangSC-Regular;
    }
    .noBind{
        height:100%;
        background:white;
    }
    .successImg{
        height:125px;
        width:85px;
        margin-top:43px;
    }
    .grey{
        opacity:0.4;
        pointer-events: none;
        cursor: default;
    }
    .successText{
        font-size:20px;
        margin-top:14px;
        color: #333333;

    }
    .successPrompt{
        width:90%;
        color:#666666;
        opacity: 0.77;
        font-size:14px;
        margin:0 auto;
        margin-top:8px;
    }
    .bind,.return{
        height:47px;
        width:90%;
        background: #00AE66;
        border: 1px solid rgba(5,5,5,0.08);
        border-radius: 5px;
        color:white;
        line-height:47px;
        margin:0 auto;
        margin-top:25px;
    }
    .return{
        background: #F8F8F8;
        border: 1px solid rgba(5,5,5,0.10);
        color:#333333;
        margin-top:16px;
    }
</style>
