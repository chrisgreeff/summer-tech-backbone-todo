/*globals App, Backbone, _ */
(function() {
    'use strict';

    App.TodoView = Backbone.View.extend({
        tagName: 'li',

        className: 'todo-item-container',

        template: _.template($('#todo-item-template').html()),

        events: {
            'click .remove-todo': 'removeTodo',
            'click .toggle-checked': 'toggleComplete',
            'click .toggle-editing': 'toggleEditing'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            var todo     = this.model,
                todoJson = todo.toJSON(),
                html     = this.template(todoJson),
                todoTitleEditNode;

            this.$el.html(html);

            todoTitleEditNode = this.$el.find('.todo-title-edit');

            if (todoTitleEditNode.attr('type') === 'text') {
                todoTitleEditNode.focus();

                todoTitleEditNode.blur([this], function (event) {
                    var todoView  = event.data[0],
                        inputNode = $(this),
                        newTitle  = inputNode.val(),
                        todoConfig;

                    todoView.toggleEditing();

                    if (newTitle) {
                        todo.save({
                            title: newTitle
                        });
                    }
                    
                });
            }
        },

        toggleComplete: function() {
            this.model.toggleComplete();
        },

        toggleEditing: function() {
            this.model.toggleEditing();
        },

        removeTodo: function(event) {
            App.Vent.trigger('remove-todo', this.model);

            event.preventDefault();
        }

    });

}());
