import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {taskName: "Mop the cieling", done: true},
        {taskName: "Grate the soup", done: false}
      ],
      newTask: ""
    },

    methods: {
      saveNewTask: function(){
        this.tasks.push({
          taskName: this.newTask,
          done: false
        })
        this.newTask = ""
      },

      doTask: function(index){
        this.tasks[index].done = true;
      }
    }
  });
});
