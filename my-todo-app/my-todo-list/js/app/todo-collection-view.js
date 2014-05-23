/*globals App, Backbone, _, $ */
(function() {
    'use strict';

    App.TodoCollectionView = Backbone.View.extend({

        tagName: 'ul',

        className: 'todos',

        initialize: function() {
            var todos = this.collection;

            // 5b. TO COMPLETE
            // --------------
            // From here we need to make sure that we are listening to the global event fired
            // from the model. We can do that by using the `App.Vent.bind();` function. Once
            // we receive that event, we want to call the `removeTodo` function with the
            // correct todo passed to the function.

            todos.on('add', this.renderTodo, this);
            todos.on('destroy', this.removeTodoFromView, this);
        },

        renderTodo: function(todo) {
            var view = new App.TodoView({
                model: todo
            });

            view.render();
            $(this.el).append(view.el);
        },

        render: function() {
            this.collection.each(this.renderTodo, this);
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
