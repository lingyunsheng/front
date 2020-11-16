<template>
<nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/home">凌云生专栏</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
            <router-link to="/login" class="btn btn-outline-light my-2">登录</router-link>
        </li>
        <li class="list-inline-item">
            <router-link to="/login" class="btn btn-outline-light my-2">注册</router-link>
        </li>
    </ul>
    <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
            <dropdown :title="`你好, ${user.name}`">
                <dropdown-item>
                    <a href="#" class="dropdown-item">新建文章</a>
                </dropdown-item>
                <dropdown-item disabled="true">
                    <a href="#" class="dropdown-item">编辑资料</a>
                </dropdown-item>
                <dropdown-item>
                    <a href="#" class="dropdown-item">退出登录</a>
                </dropdown-item>
            </dropdown>
        </li>
    </ul>
</nav>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
} from "vue"
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
    isLogin: boolean;
    name: string;
    id: number;
}
//  proptype 接受一个泛型
export default defineComponent({
    name: "GlobalHeader",
    components: {
        Dropdown,
        DropdownItem,
    },
    //  定义props属性 组件最重要的内容 就是一个数组
    props: {
        user: {
            //  数组使用类型断言 必须是类型 现在的array只是一个数组
            type: Object as PropType < UserProps[] > ,
            required: true,
        },
    },
    //  在setup可以用props
    // setup(props) {}
});
</script>

<style lang="css">
.col-4 {
    margin-bottom: 40px !important;
}
</style>
