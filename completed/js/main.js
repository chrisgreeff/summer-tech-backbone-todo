/*globals Tikr, $, _ */
(function() {
    'use strict';

    _.mixin({
        guid: function(prefix) {
            var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });

            prefix = prefix || '';

            return prefix + guid;
        }
    });

    new App.TodoCollection().fetch({
        success: function (todos) {
            var todoCollectionView = new App.TodoCollectionView({
                collection: todos
            });

            todoCollectionView.render();

            $('#todo-list-container').html(todoCollectionView.el);

            $('#new-todo').on('submit', function(event) {
                var todoFormNode  = $(event.target),
                    todoTitleNode = todoFormNode.find('.new-todo-input'),
                    todoTitle     = todoTitleNode.val();

                if (todoTitle) {
                    todos.create({
                        id: _.guid('todo_'),
                        title: todoTitle
                    });
                }

                todoTitleNode.val('');

                event.preventDefault();
            });
        }
    });

}());
