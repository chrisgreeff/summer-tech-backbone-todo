/*globals App, Backbone, _ */
(function() {
    'use strict';

    App.TodoCollection = Backbone.Collection.extend({

        sync: Backbone.localforage.sync('MyTodos'),

        model: App.Todo
    });

}());
