<template>
    <div class="alreadyBind">
    <!--<my-header></my-header>-->
    <div class="success">
        <img src="../../static/img/success.png" alt="" class="successImg">
        <div class="successText">激活成功</div>
        <div class="successPrompt">社保卡已激活成功，请您在定点医疗机构
            就医时尽快修改社保卡密码</div>
        <div class="return" @click="back">返回医保大厅</div>
    </div>
    </div>
</template>

<script>
    import Bus from '../util/bus'
    /*import header from '../../src/components/header'*/
    export default {
        name: "success",
        /*components:{
            'myHeader':header
        },*/
        data(){
            return{

            }
        },
        methods:{
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
    .alreadyBind{
        height:100%;
        background:white
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
        width:90%;
        color:#666666;
        opacity: 0.77;
        font-size:14px;
        margin:0 auto;
        margin-top:8px;
    }
    .return{
        height:47px;
        width:90%;
        background: #00AE66;
        border: 2px solid rgba(5,5,5,0.08);
        border-radius: 5px;
        color:white;
        line-height:47px;
        margin:0 auto;
        margin-top:25px;
    }
</style>
