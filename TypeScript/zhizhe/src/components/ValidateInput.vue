<template>
<div class="validate-input-container pb-3">
    <input class="form-control" :class="{ 'is-invalid': inputRef.error }" :value="inputRef.val" @blur="validateInput" @input="updateValue" v-bind="$attrs" />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    PropType,
    onMounted
} from 'vue'
import {
    emitter
} from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
    type: 'required' | 'email';
    message: string;
}
export type RulesProp = RuleProp[]
export default defineComponent({
    props: {
        rules: Array as PropType < RulesProp > ,
        modelValue: String
    },
    inheritAttrs: false,
    setup(props, context) {
        console.log('context', context)
        const inputRef = reactive({
            val: props.modelValue || '',
            error: false,
            message: ''
        })
        const validateInput = () => {
            if (props.rules) {
                const allPassed = props.rules.every(rule => {
                    let passed = true
                    inputRef.message = rule.message
                    switch (rule.type) {
                        case 'required':
                            passed = (inputRef.val.trim() !== '')
                            break
                        case 'email':
                            passed = emailReg.test(inputRef.val)
                            break
                        default:
                            break
                    }
                    return passed
                })
                inputRef.error = !allPassed
                return allPassed
            }
            return true
        }
        const updateValue = (e: KeyboardEvent) => {
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelValue', targetValue)
        }
        // 将事件发射出去，其实就是把验证函数发射出去
        onMounted(() => {
            emitter.emit('form-item-created', validateInput)
        })
        return {
            inputRef,
            validateInput,
            updateValue
        }
    }
})
</script>
