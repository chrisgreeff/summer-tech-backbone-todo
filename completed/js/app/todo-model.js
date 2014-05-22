/*globals App, Backbone */
(function() {
    'use strict';

    // ======================================== TODO MODEL =========================================
    //
    // Models are the heart of any JavaScript application, containing the interactive data as well
    // as a large part of the logic surrounding it: conversions, validations, computed properties,
    // and access control. You extend Backbone.Model with your domain-specific methods, and Model
    // provides a basic set of functionality for managing changes.
    //
    // =============================================================================================

    // Our basic Todo model has `title` and `complete` attributes.
    App.Todo = Backbone.Model.extend({

        // We are going to be using localforage to persist our todos in the browsers built in
        // database.
        sync: Backbone.localforage.sync(),

        // These are the default attributes for a brand new todo that we create.
        defaults: {
            title: '',
            complete: false,
            editing: false
        },

        // Toggles the `complete` state of the todo.
        toggleComplete: function () {
            this.save({
                complete: !this.get('complete')
            });
        },

        // Toggles the `editing` state of the todo. You may notice that we do not save (persist)
        // this attribute when it is toggled. The reason for this, is we don't want to refresh the
        // screen, and have some of our todos in an edit state when the page loads.
        toggleEditing: function () {
            this.set('editing', !this.get('editing'));
        }

    });

}());
