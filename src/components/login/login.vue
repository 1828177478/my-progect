<template>
<div class="login-wrap">
    <el-form class="login-form" :label-position="labelPosition" label-width="80px" :model="formData">
        <h2>用户登录</h2>
        <el-form-item label="名称">
            <el-input v-model="formData.uesrname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click.prevent="getLogin()">登录</el-button>
    </el-form>
</div>
</template>

<script>
export default {
    data() {
      return {
        labelPosition: 'top',
        formData: {
          uesrname: '',
          password: '',
        }
      };
    },
    methods:{
        getLogin(){
               this.$router.push({name:'home'})
            this.$http.post('login',this.formData)
            .then((res)=>{
               const {data,meta:{status,msg}}=res;
                if(status==200){
                    this.$router.push({name:'home'})
                }
            })
        }
    }

  }

</script>

<style>
.login-wrap{
    height:100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;


}
.login-wrap .login-form{
     background-color: #fff;
     width:400px;
     padding:30px;
     border-radius: 5px;
}

.login-form .login-btn{
    width:100%;
}

</style>
