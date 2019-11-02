<template>
<el-container class="container">
    <el-header>
        <el-row>
            <el-col :span="20">
                <div class="grid-content bg-purple-light">后台管理系统</div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <a href="#" @click.prevent= 'backLogin()'>退出</a>
                </div>
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="2" :router='true' :unique-opened='true' class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户管理</span>
                    </template>                           
                    <el-menu-item index="users">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户列表</span>
                        </template> 
                    </el-menu-item>                                 
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>权限管理</span>
                    </template>                           
                    <el-menu-item index="2-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>角色列表</span>
                        </template> 
                    </el-menu-item>     
                     <el-menu-item index="2-2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>权限列表</span>
                        </template> 
                    </el-menu-item>                               
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>商品管理</span>
                    </template>                           
                    <el-menu-item index="3-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品列表</span>
                        </template> 
                    </el-menu-item>       
                    <el-menu-item index="3-2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分类参数</span>
                        </template> 
                    </el-menu-item>
                     <el-menu-item index="3-3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品分类</span>
                        </template> 
                    </el-menu-item>                              
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>订单管理</span>
                    </template>                           
                    <el-menu-item index="4-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>订单列表</span>
                        </template> 
                    </el-menu-item>                                 
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>数据统计</span>
                    </template>                           
                    <el-menu-item index="5-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据报表</span>
                        </template> 
                    </el-menu-item>                                 
                </el-submenu>
               
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    methods:{
        backLogin(){
            this.$router.push({'name':'Login'})
        }
    }

}
</script>

<style>
.container {
    height: 100%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
}
</style>
