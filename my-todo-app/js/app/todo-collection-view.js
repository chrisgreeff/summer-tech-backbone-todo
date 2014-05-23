/*globals App, Backbone, _, $ */
(function() {
    'use strict';

    App.TodoCollectionView = Backbone.View.extend({

        tagName: 'ul',

        className: 'todos',

        initialize: function() {
            _.bindAll(this, 'renderTodo', 'removeTodo', 'removeTodoFromView');

            // 2b. TO COMPLETE
            // --------------
            // When a todo is added to the collection, the view won't actually know about it,
            // unless it is listening for that event. So in this case we want the view to listen
            // to the 'add' event, and then call the `renderTodo` function.

            // 4b. TO COMPLETE
            // --------------
            // From here we need to make sure that we are listening to the global event fired
            // from the model. We can do that by using the `App.Vent.bind();` function. Once
            // we receive that event, we want to call the `removeTodo` function with the
            // correct todo passed to the function.
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
            // 4c. TO COMPLETE
            // --------------
            // Removing a model from a collection is easy. You just have to call `.destroy()` on
            // the model you want to remove.
            // NOTE: Calling that function will cause the model to fire a 'destroy' event! When
            // that event is fired, we want this view to call `removeTodoFromView` function. See
            // if you can do that on your own!
        }

    });

}());
