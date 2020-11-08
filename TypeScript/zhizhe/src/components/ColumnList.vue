<template>
<div class="row">
    <div v-for="column in list" :key="column.id" class="col-4">
        <div class="card h-100 shadow-sm">
            <div class="card-body text-center">
                <img :src="column.avatar" :alt="column.title" class="rounded-circle border border-light w-25 my-3" />
                <h5 class="card-title">{{ column.title }}</h5>
                <p class="card-text text-left">{{ column.description }}</p>
                <a href="#" class="btn  btn-outline-primary">进入专栏</a>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    PropType,
    computed
} from "vue";
export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    description: string;
}
//  proptype 接受一个泛型
export default defineComponent({
    name: "ColumnList",
    //  定义props属性 组件最重要的内容 就是一个数组
    props: {
        list: {
            //  数组使用类型断言 必须是类型 现在的array只是一个数组
            type: Array as PropType < ColumnProps[] > ,
            required: true,
        },
    },
    //  在setup可以用props
    setup(props) {
        const columnList = computed(() => {
            return props.list.map(column => {
                if (!column.avatar) {
                    column.avatar = require('@/assets/column.jpg');
                }
                return column
            })
        })
        return {
            columnList
        }
    }
});
</script>

<style lang="css">
.col-4 {
    margin-bottom: 40px !important;
}
</style>
