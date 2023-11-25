import { defineStore } from 'pinia'

export const useTodoListStore = defineStore( 'todoList', {
    // state
    // getters
    //  actoins
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo (item) {
            this.todo.push({ item, id: this.id++, completed: false })
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter(object, () => {
                return object.id !== itemId
            })
        }
    }
} )


