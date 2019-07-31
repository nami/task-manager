var app = new Vue({
  el: '#app',
  data: {
    tasks: [
     { id: 1, name: 'Laundry', description: 'Wash clothes', completed: true},
     { id: 2, name: 'Fold Clothes', description: 'Fold clothes', completed: false},
     { id: 3, name: 'Keep Laundry', description: 'Keep clothes', completed: false}
    ],
    message: 'Hello lego!'
  },
  computed: {
    completedTasks: function(){
      return this.tasks.filter( item => item.completed == true);
    },
    todoTasks: function(){
      return this.tasks.filter( item => item.completed == false);
    }
  }
})
