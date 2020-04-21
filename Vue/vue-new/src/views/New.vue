<template>
  <div>
    加1：{{count}}
    双倍： {{nums}}
    vuex: {{name}}

    减1： {{num}}
   <button @click="add">加1</button>
   <button @click="update">更新vuex</button>
   <button @click="minus">减一</button>
  </div>
</template>
<script>
import {ref, computed, watch, getCurrentInstance} from 'vue';
export default {
    setup() {
        // 获取路由
        const {ctx} = getCurrentInstance();
        console.log('路由', ctx.$router.currentRoute.value);
        // 设置一个默认的state
        const count = ref(0)
        const num = ref(10)
        const add = () => {
            count.value++;
        }
        const minus = () => {
            num.value--;
        }
        watch(() => count.value, val => {
            console.log(`count is ${val}`)
        })
        const nums = computed(() => count.value*2)
        const name = computed(() => ctx.$store.state.obj.name)
        const update = () => {
            ctx.$store.commit('setObj', count)
        }
        return {
            count,
            add,
            nums,
            name,
            update,
            minus,
            num
        }
    }
}
</script>

<style lang='stylus' scoped>

</style>