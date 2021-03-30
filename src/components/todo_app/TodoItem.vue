<template>
    <div class="container">
        <ul class="list-group list-group-flush text-dark">
            <li class="p-3 d-flex justify-content-between align-items-center">
                <div class="d-flex">
                    <div class="align-item-center">
                        {{ todo.content }}
                    </div>
                </div>
                <div class="btn-option-div">
                    <button class="btn btn-outline-info" @click="editTodo">Edit</button>
                    <button class="btn btn-outline-success" @click="completedTodo">Complete</button>
                    <button class="btn btn-outline-danger" @click="deleteTodo">Remove</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            default: () => {}
        },
    },
    
    methods: {
        editTodo() {
            this.$store.dispatch('editTodo')
        },
        deleteTodo() {
            this.$store.dispatch('deleteTodo', this.todo)
        },
        completedTodo() {
            this.$store.dispatch('completedTodo', this.todo)
        }
    }
}
</script>
<style scoped></style>