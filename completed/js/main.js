/*globals App, $, _ */
(function() {
    'use strict';

    // 1. Thing we need to do, is create the todo collection. This is going to contain all our todo
    //    models.
    var todoCollection = new App.TodoCollection();

    // 2. Then we need to fetch the already persisted collection of todos (if there are any).
    todoCollection.fetch({

        success: function (todos) {
            // 3. Once we have successfully fetched any existing todos, we can create our view.
            //    The views know how to react to user interactions, and update models accordingly.
            var todoCollectionView = new App.TodoCollectionView({
                collection: todos
            });

            // 4. Now we have our view instantiated, we can render it on the DOM.
            todoCollectionView.render();
            $('#todo-list-container').html(todoCollectionView.el);

            // 5. Finally we need to setup our new todo form to create a new todo, and add it to
            //    our collection when the form is submitted.
            $('#new-todo').on('submit', function(event) {
                var todoFormNode  = $(event.target),
                    todoTitleNode = todoFormNode.find('.new-todo-input'),
                    todoTitle     = todoTitleNode.val();

                if (todoTitle) {
                    todos.create({
                        // Important that we give the new todo a unique id so we can get a handle
                        // on it in the DOM.
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
