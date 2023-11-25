<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todoList.js'

const todo = ref('')
const store = useTodoListStore()

function addItemAndClear(item) {
    if (item.length === 0) {
        return
    }

    store.addTodo(item)
    todo.value = ''
}


</script>

<template>
    <div class="">
        <form @submit.prevent="addItemAndClear(todo)">
            <input v-model="todo" type="text">
            <button>Add</button>
        </form>
    </div>
</template>

<style scoped></style>

