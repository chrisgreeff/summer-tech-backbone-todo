/*globals App, Backbone, _, $ */
(function() {
    'use strict';

    App.TodoView = Backbone.View.extend({

        tagName: 'li',

        className: 'todo-item-container',

        template: _.template($('#todo-item-template').html()),

        events: {
            'click .toggle-complete': 'toggleComplete',
            'click .remove-todo':     'removeTodo',
            'click .toggle-edit':     'toggleEditing'
        },

        initialize: function() {
            // 3c. TO COMPLETE
            // --------------
            // Just updating the models attribute is not enough for the view to update (i.e. for
            // the update to appear in the DOM). We need to view to listen to the model changes,
            // and re-render itself when those changes occur. We can accomplish this by using the
            // `this.listenTo(this.model, 'change', this);` function.
        },

        render: function() {
            var todo     = this.model,
                todoJson = todo.toJSON(),
                html     = this.template(todoJson),
                todoTitleEditNode;

            this.$el.html(html);

            todoTitleEditNode = this.$el.find('.todo-title-edit');
            if (todoTitleEditNode.is(':visible')) {
                todoTitleEditNode.focus();
            }
        },

        toggleComplete: function() {
            // 3a. TO COMPLETE
            // --------------
            // When the tick (complete) button is clicked, we want the model to toggle its'
            // complete attribute. You can access the model associated with this view by
            // `this.model`.
            // NOTE: Be sure to update the template! We want to add a `complete` class to
            // the .todo-item element whenever the `complete` attribute is true
        },

        removeTodo: function() {
            // 4a. TO COMPLETE
            // --------------
            // We're going to be a little bit different here. Rather than the model handling the
            // model handling the remove itself, we want to fire a global event for the todo
            // collection to pick up, and take over with handling destroying the todo, and
            // removing it from the DOM. You can do that by using the `App.Vent.trigger();`
            // function.
        },

        toggleEditing: function() {
            // 5a. TO COMPLETE
            // --------------
            // Similar to what we did in 4., we want the ability to toggle the editing of
            // a todo. See if you can do this one on your own!
            //
            // NOTE: You're going to need to add an 'editing' class to the .toggle-edit
            // element. Remember to use the same technique you used for `complete`;
        },

        updateTitle: function () {
            var editTitleNode = this.$el.find('.todo-title-edit'),
                newTitle      = editTitleNode.val();

            // 6. TO COMPLETE
            // --------------
            // Here's a challenge! So when we blur (When the input loses focus) the input,
            // we want to override the title of the todo that is associated with the view.
            // See if you can do it!
        }

    });

}());
