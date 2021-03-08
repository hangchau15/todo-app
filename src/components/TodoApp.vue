<template>
  <div class="container">
    <div>New todo: </div>
    <div v-if="!isEditing">
      <input class="txtTodo" type="text" v-model="todo" placeholder="Enter new todo" id="input-todo">
      <button class="btn primary" v-on:click="storeTodo">Add</button>
    </div>

    <div v-else>
      <input class="txtTodo" type="text" v-model="todo" id="update-todo">
      <button class="btn primary" v-on:click="updateTodo">Update</button>
      <button class="btn danger" v-on:click="cancelUpdateTodo">Cancel</button>
    </div>

    <h2> Todos</h2>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="d-flex">
          <div class="d-flex">
              <div class="align-item-center">
                {{ todo }}
              </div>
          </div>
          <div class="btn-option-div">
            <button class="btn primary" v-on:click="editTodo(index, todo)">Edit</button>
            <button class="btn info" v-on:click="completeTodo(index,todo)">Complete</button>
            <button class="btn danger" v-on:click="deleteTodo(index)">Remove</button>
          </div>
      </li>
    </ul>

    <h2>Completed</h2>
    <ul class="completed-list">
      <li v-for="(todo,index) in completedTodos" :key="index">{{ todo }}</li>
    </ul>
    <button class="btn danger" v-on:click="clearAll">Clear all</button>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data () {
    return {
      selectedIndex: null,
      isEditing: false,
      todo: '',
      todos: [],
      completedTodos: []
    }
  },
  methods: {
    storeTodo(){
      let input = document.getElementById('input-todo').value
      if(input == "" || input == null) {
        alert('Không được để trống!')
        
      }else {
        this.todos.push(this.todo)
        this.todo = ''
        return false
      }
    },

    editTodo(index, todo){
      this.todo = todo
      this.selectedIndex = index
      this.isEditing = true
    },

    updateTodo(){
      let input = document.getElementById('update-todo').value
      if(input == "" || input == null) {
        alert('Không được để trống! ')
      }else {
        this.todos.splice(this.selectedIndex, 1, this.todo)
        this.isEditing = false
        this.todo = ''
        return false
      }
    },

    cancelUpdateTodo(){
      this.isEditing = false
      this.todo = ''
    },

    completeTodo(index,todo){
      this.todo = todo
      this.selectedIndex = index
      this.completedTodos.push(this.todo)
      this.todos.splice(index,1)
      this.todo = ''
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },

    clearAll(){
      this.completedTodos =[]
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 50px;
}
.primary {
  background-color: rgb(15, 168, 189);
}
.info {
  background-color: rgb(72, 226, 34);
}
.danger {
  background-color: rgb(247, 56, 56);
}
.btn {
  color: #fff;
  padding: 12px 20px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 3px;
}
.txtTodo {
  width: 50%;
  height: 34px;
  outline: grey;
  margin: 12px 0;
}
.todo-list {
   list-style-type: none;
   margin-left: -30px;
}
.todo-list li {
  margin: 12px 0px;
  padding: 10px;
  width: 75%;
}
.d-flex {
    display: flex;
    justify-content: space-between;
}
.align-item-center {
    display: flex;
    align-items: center;
}
.completed-list {
  list-style-type: none;
  text-decoration: line-through;
  margin-left: -30px;
}
</style>
