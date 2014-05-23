/*globals App, Backbone, _ */
(function() {
    'use strict';

    // ========================================= TODO VIEW =========================================
    //
    // Views are backed by models, each of which can be updated independently when the model changes,
    // without having to redraw the page. Instead of digging into a JSON object, looking up an
    // element in the DOM, and updating the HTML by hand, you can bind your view's render function
    // to the model's "change" event.
    //
    // =============================================================================================

    App.TodoView = Backbone.View.extend({

        // The top level element of our todo is a list element (we can access this element in the
        // JavaScript via this.$el).
        tagName: 'li',

        // This class will always be set on the top level element.
        className: 'todo-item-container',

        // The model is able to cache a template function for a single item.
        template: _.template($('#todo-item-template').html()),

        // Here we can specify DOM specific events that occur on our Todo item.
        events: {
            'click .toggle-complete': 'toggleComplete',
            'click .remove-todo':     'removeTodo',
            'click .toggle-edit':     'toggleEditing',
            'blur  .todo-title-edit': 'updateTitle'
        },

        // This function is called first when you instantiate a new model. Here we can state that
        // any time on of the models attributes change, we re-render the view associated with it
        // (e.g. when we toggle it's complete state).
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        // The render function will pass the models JSON data into the cached template, generate
        // HTML based on it's models attributes, and set that inside top level element.
        render: function() {
            var todo     = this.model,
                todoJson = todo.toJSON(),
                html     = this.template(todoJson),
                todoTitleEditNode;

            this.$el.html(html);

            // If the edit title input field is visible, we want to focus it.
            todoTitleEditNode = this.$el.find('.todo-title-edit');

            if (todoTitleEditNode.is(':visible')) {
                todoTitleEditNode.focus();
            }
        },


        // Toggle the models complete attribute.
        toggleComplete: function() {
            this.model.toggleComplete();
        },

        // When the remove button is clicked, the model will fire a global `remove-todo` event for
        // it's collection to pick up, and take care of destroying it, and removing it from the DOM.
        removeTodo: function() {
            App.Vent.trigger('remove-todo', this.model);
        },

        // Toggle the models editing attribute.
        toggleEditing: function() {
            this.model.toggleEditing();
        },

        // Save the new title of the model.
        updateTitle: function () {
            var editTitleNode = this.$el.find('.todo-title-edit'),
                newTitle      = editTitleNode.val();

            this.toggleEditing();

            if (newTitle) {
                this.model.save({
                    title: newTitle
                });
            }
        }

    });

}());
