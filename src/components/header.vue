<template>
    <div>
        <mt-header title="居民社保卡激活">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
           <!-- <mt-button icon="more" slot="right"></mt-button>-->
        </mt-header>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style >
    .mint-header{
        background:black !important;

    }
    .mint-header-title{
        font-size:18px;
        font-family: PingFangSC-Medium;
    }
    .mint-button-text{
        font-size:16px;
    }
</style>
