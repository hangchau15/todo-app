<template>
    <div>
        <h2>New todo:</h2>
        <div v-if="!isEditing" class="row p-3 my-3 d-flex">
            <input class="col-8 p-3 form-control mr-sm-2" type="text" v-model="todoInput" placeholder="Enter new todo">
            <button class="btn btn-outline-primary bg-primary text-white" @click="storeTodo">Add</button>
        </div>
        <div v-else class="row p-3 my-3">
            <input class="col-8 form-control mr-sm-2" type="text" v-model="todoInput">
            <button class="btn btn-outline-primary bg-primary text-white mr-sm-2" @click="cancelUpdateTodo">Update</button>
            <button class="btn btn-outline-danger bg-danger text-white" @click="updateTodo">Cancel</button>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name: 'InputTodo',
    data() {
        return {
        todoInput: this.$store.state.todoInput,
        isEditing: this.$store.state.isEditing,
        }
    },
    methods: {
        storeTodo() {
            if (!this.todoInput) {
                return
            }
            this.$store.dispatch('storeTodo', {
                content: this.todoInput,
            })
            this.todoInput = null
        },
        
        cancelUpdateTodo() {
            
        },

        updateTodo() {

        }
    }
}
</script>
<style scoped></style>