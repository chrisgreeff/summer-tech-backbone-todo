/*globals App, Backbone, _ */
(function() {
    'use strict';

    App.TodoView = Backbone.View.extend({
        tagName: 'li',

        className: 'todo-item-container',

        template: _.template($('#todo-item-template').html()),

        events: {
            'click .remove-todo':     'removeTodo',
            'click .toggle-checked':  'toggleComplete',
            'click .toggle-edit':     'toggleEditing',
            'blur  .todo-title-edit': 'updateTitle'
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
            }
        },

        removeTodo: function(event) {
            App.Vent.trigger('remove-todo', this.model);

            event.preventDefault();
        },

        toggleComplete: function() {
            this.model.toggleComplete();
        },

        toggleEditing: function() {
            this.model.toggleEditing();
        },

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
