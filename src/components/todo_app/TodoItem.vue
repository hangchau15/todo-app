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
                    <button class="btn btn-outline-info" @click="editTodo(todo)">Edit</button>
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
        editTodo(todo) {
            this.selectedID = todo.id
            this.isEditting = true
            console.log(this.isEditting)
            console.log(todo.id)
        },
        deleteTodo() {
            this.$store.dispatch('deleteTodo', this.todo)
        },
    }
}
</script>
<style scoped></style>