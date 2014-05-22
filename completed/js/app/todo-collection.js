/*globals App, Backbone, _ */
(function() {
    'use strict';

    // ====================================== TODO COLLECTION ======================================
    //
    // Collections are ordered sets of models. You can bind "change" events to be notified when any 
    // model in the collection has been modified, listen for "add" and "remove" events, and fetch
    // the collection from the server.
    //
    // =============================================================================================

    App.TodoCollection = Backbone.Collection.extend({

        // We are going to be using localforage to persist our todos in the browsers built in
        // database.
        sync: Backbone.localforage.sync('MyTodos'),

        // We need to reference the model of this collection. In this case, this is a collection of
        // Todos.
        model: App.Todo
    });

}());
