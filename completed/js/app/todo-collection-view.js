/*globals App, Backbone, _, $ */
(function() {
    'use strict';

    App.TodoCollectionView = Backbone.View.extend({

        tagName: 'ul',

        className: 'todos',

        initialize: function() {
            var todos = this.collection;

            _.bindAll(this, 'renderTodo');

            todos.on('add', this.renderTodo, this);
            todos.on('destroy', this.removeTodoFromView, this);

            App.Vent.bind('remove-todo', this.removeTodo, this);
        },

        renderTodo: function(todo) {
            var view = new App.TodoView({
                model: todo
            });

            view.render();
            $(this.el).append(view.el);
        },

        render: function() {
            var todos = this.collection;

            todos.each(this.renderTodo);
        },

        removeTodoFromView: function(todo) {
            var todoToRemoveId = todo.get('id'),
                nodeToRemove   = this.$el.find('#' + todoToRemoveId).parent();

            nodeToRemove.remove();
        },

        removeTodo: function(todo) {
            todo.destroy();
        }

    });

}());
