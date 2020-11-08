import {ref, onMounted, onUnmounted, Ref} from 'vue'


//  声明响应式对象

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
    // 判断是否点击到外面
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if(elementRef.value) {
            if(elementRef.value.contains(e.target as HTMLElement) && isClickOutside.value == true) {
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        //  监听获取位置
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        //  监听获取位置
        document.removeEventListener('click', handler)
    })
    return isClickOutside
}

export default useClickOutSide