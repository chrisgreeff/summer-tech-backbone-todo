/*globals App, Backbone, _, $ */
(function() {
    'use strict';

    // ====================================== COLLECTION VIEW ======================================
    //
    // Views are backed by models, each of which can be updated independently when the model changes,
    // without having to redraw the page. Instead of digging into a JSON object, looking up an
    // element in the DOM, and updating the HTML by hand, you can bind your view's render function
    // to the model's "change" event.
    //
    // =============================================================================================

    App.TodoCollectionView = Backbone.View.extend({

        // The top level element of our todo is an unordered list element (we can access this element
        // in the JavaScript via this.$el).
        tagName: 'ul',

        // This class will always be set on the top level element.
        className: 'todos',

        // This function is called first when you instantiate a new collection.
        initialize: function() {
            var todos = this.collection;

            // This is the collections binding to the global `remove-todo` event that is fired from
            // the model when the remove button is clicked. From here the collection is delegated
            // the task of destroying the model, and removing it from the DOM.
            App.Vent.bind('remove-todo', this.removeTodo, this);

            // Whenever a todo model is added to the collection, we render it.
            todos.on('add', this.renderTodo, this);

            // Whenever a todo model is destroyed (removed from the collection), we remove it from
            // the DOM.
            todos.on('destroy', this.removeTodoFromView, this);

        },

        // This function is fired for every todo that is added to the collection. For each todo,
        // it creates a view associated with it, and appends the rendered html to it's container
        // (being the unordered list).
        renderTodo: function(todo) {
            var view = new App.TodoView({
                model: todo
            });

            view.render();
            $(this.el).append(view.el);
        },

        // The render function loops through all todo models it contains (i.e. the initial models
        // that were passed to it after being fetched from local storage), and renders them to the
        // DOM.
        render: function() {
            this.collection.each(this.renderTodo, this);
        },

        // Removes the element associated with the removed todo model it from the DOM.
        removeTodoFromView: function(todo) {
            var todoToRemoveId = todo.get('id'),
                nodeToRemove   = this.$el.find('#' + todoToRemoveId).parent();

            nodeToRemove.remove();
        },

        // Destroys the todo model.
        removeTodo: function(todo) {
            todo.destroy();
        }

    });

}());
