<template>
	<div>
		<input type="text" name="todo" v-model="todoList">
		<button @click="addTodo()">Add</button>
		<!-- <div v-for="list in lists">
			{{todoList}}
		</div> -->
		<ul>
			<li v-for="list in lists">
				{{list}}
			</li>
		</ul>
	</div>
	
</template>


<script>

export default {
  data() {
    return {
      	todoList: '',
      	lists: []
    }
  },
  methods: {
  	addTodo: function() {
  		this.lists.push(this.todoList);
  		// console.log("this",this.list.push(this.todoList));
  		this.todoList = '';

  	}
  }
}

</script>