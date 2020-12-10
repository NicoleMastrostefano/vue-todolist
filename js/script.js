Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Delete</button>\
    </li>\
  ',
  props: ['title']
})

var app = new Vue({
  el: '#root',
  data: {
    newTodoItem: '',
    items: [
      {title: 'Andare a fare la spesa'},
      {title: 'Yoga'},
      {title: 'Esercitazione boolean'}
    ],
  },
  methods: {
    addNewTodo: function () {
      this.items.push({
        title: this.newTodoItem
      })
       this.newTodoItem = ''
    },
  }
})
