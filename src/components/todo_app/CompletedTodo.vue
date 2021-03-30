<template>
    <div class="container">
        <h2 class=" my-3">Completed</h2>
        <ul class="completed-list">
            <li v-for="(todo,index) in completedTodos" :key="index">{{ todo.content }}</li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */

export default {
    name: 'CompletedTodo',
    data() {
        return {
            completedTodos: this.$store.state.completedTodos
        }
    }
}
</script>
<style scoped>
    .completed-list {
        list-style-type: none;
        text-decoration: line-through;
    }
</style>