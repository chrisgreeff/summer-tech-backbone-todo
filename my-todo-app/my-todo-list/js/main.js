/*globals App, $, _ */
(function() {
    'use strict';

    var todoCollection = new App.TodoCollection(),
        fetchSuccessHandler;

    fetchSuccessHandler = function (todos) {
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
                // 2a. TO COMPLETE
                // --------------
                // When the form submits, we need to create a new todo model with the chosen
                // title, and add that to our todo collection. (Note: It is important that
                // we give the new todo a unique id so we can get a handle on it in the DOM.
                // You can do this using `_.guid('todo_')`
            }

            todoTitleNode.val('');

            event.preventDefault();
        });
    };

    // 1. TO COMPLETE
    // --------------
    // First thing we need to do is fetch the already stored todos from local storage (if
    // there are any), and then invoke the `fetchSuccessHandler` to get the ball rolling.

}());
