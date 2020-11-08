import { defineComponent } from 'vue';
<template>
<div class="dropdown" ref="dropdownRef">
    <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
        <slot> </slot>
    </ul>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    watch
} from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            require: true
        }
    },
    setup() {
        const isOpen = ref(false)
        // 获取dom节点 联合类型
        const dropdownRef = ref < null | HTMLElement > (null)
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const isClickOutside = useClickOutside(dropdownRef)
        watch(isClickOutside, () => {
            if (isOpen.value && isClickOutside.value) {
                isOpen.value = false
            }
        })
        // const handler = (e: MouseEvent) => {
        //     //  点击事件
        //     //  判断value是否存在
        //     if (dropdownRef.value) {
        //         // console.log(dropdownRef.value)
        //         //  判断下拉菜单是否包含
        //         if (!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value == true) {
        //             isOpen.value = false

        //         }
        //     }
        // }
        // onMounted(() => {
        //     //  监听获取位置
        //     document.addEventListener('click', handler)
        // })
        // onUnmounted(() => {
        //     //  监听获取位置
        //     document.removeEventListener('click', handler)
        // })
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>
