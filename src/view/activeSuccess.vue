<template>
    <div class="noBind">
        <!--<my-header></my-header>-->
        <div class="success">
            <img src="../../static/img/success.png" alt="" class="successImg">
            <div class="successText">激活申请提交成功</div>
            <div class="successPrompt">您的社保卡申请已提交成功，审核结果会在1-3个工作日内短信发送给您，请耐心等待</div>
            <div class="bind" @click="history">查看历史激活记录</div>
            <div class="return" @click="back">返回医保大厅</div>
        </div>
    </div>
</template>

<script>
    /*import header from '../../src/components/header'*/
    export default {
        /* components:{
             'myHeader':header
         },*/
        data(){
            return{

            }
        },

        methods:{
            history:function(){
                this.$router.push('/'+'?tab=2')
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
    .successText{
        font-size:20px;
        margin-top:14px;
        color: #333333;

    }
    .successPrompt{
        width:266px;
        color:#666666;
        opacity: 0.77;
        font-size:14px;
        margin:0 auto;
        margin-top:8px;
    }
    .bind,.return{
        height:47px;
        width:335px;
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
