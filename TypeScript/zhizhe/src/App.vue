<template>
<div class="container">
    <GlobalHeader :user="user" />
    <validate-form @form-submit="onFormSUbmit">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="emailRef.val" @blur="validateEmail" />
            <div class="form-text" v-if="emailRef.error">
                {{ emailRef.message }}
            </div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">密码</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
            <label class="form-label">邮箱地址</label>
            <validate-input :rules="emailRules" v-model="emailVal" ref="inputRef" placeholder="请输入邮箱地址" type="text"></validate-input>
            {{ emailVal }}
        </div>
        <div class="mb-3">
            <label class="form-label">密码</label>
            <validate-input :rules="passwordRules" v-model="passwordVal" type="password" placeholder="请输入密码"></validate-input>
            {{ emailVal }}
        </div>
        <template #submit>
            <span class="btn btn-danger">submit</span>
        </template>
    </validate-form>
    <ColumnList :list="list" />
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
        <small>
            <ul class="list-inline mb-0">
                <li class="list-inline-item">© 2020 者也专栏</li>
                <li class="list-inline-item">课程</li>
                <li class="list-inline-item">文档</li>
                <li class="list-inline-item">联系</li>
                <li class="list-inline-item">更多</li>
            </ul>
        </small>
    </footer>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    ref
} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, {
    ColumnProps
} from './components/ColumnList.vue';
import GlobalHeader, {
    UserProps
} from './components/GlobalHeader.vue';
import ValidateInput, {
    RulesProp
} from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
//  创建传入的数组
const userData: UserProps = {
    isLogin: true,
    name: 'ddd',
    id: 1,
}
const testData: ColumnProps[] = [{
        id: 1,
        title: 'test1的专栏',
        description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    },
    {
        id: 2,
        title: 'test2的专栏',
        description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    },
    {
        id: 3,
        title: 'test2的专栏',
        description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    },
    {
        id: 4,
        title: 'test2的专栏',
        description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
        avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
    },
];
const emailRules: RulesProp = [{
        type: 'required',
        message: '电子邮箱地址不能为空'
    },
    {
        type: 'email',
        message: '请输入正确的电子邮箱格式'
    }
]
const emailVal = ref('viking')
const passwordVal = ref('')
const passwordRules: RulesProp = [{
        type: 'required',
        message: '密码不能为空'
    },
    {
        type: 'email',
        message: '请输入正确的密码'
    }
]
export default defineComponent({
    name: 'App',
    components: {
        GlobalHeader,
        ColumnList,
        ValidateInput,
        ValidateForm
    },
    setup() {
        //  创建reactive 多个内容
        const emailRef = reactive({
            val: '',
            error: false,
            message: ''
        })
        // 组件的实例
        const inputRef = ref < any > ()
        const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const validateEmail = () => {
            if (emailRef.val.trim() === '') {
                emailRef.error = true
                emailRef.message = '不能为空'
            } else if (!emailReg.test(emailRef.val)) {
                emailRef.error = true
                emailRef.message = '邮箱输入有误'
            }
        }
        const onFormSUbmit = (result: boolean) => {
            console.log('1234', result, inputRef.value.validateInput)
        }
        return {
            list: testData,
            user: userData,
            emailRef,
            validateEmail,
            emailRules: emailRules,
            emailVal,
            passwordRules,
            onFormSUbmit,
            inputRef
        };
    },
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
