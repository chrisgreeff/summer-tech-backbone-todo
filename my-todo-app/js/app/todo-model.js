/*globals App, Backbone */
(function() {
    'use strict';

    App.Todo = Backbone.Model.extend({

        sync: Backbone.localforage.sync(),

        defaults: {
            title: '',
            complete: false,
            editing: false
        },

        toggleComplete: function () {
            // 3b. TO COMPLETE
            // --------------
            // From here, we can update the models `complete` attribute.
            //
            // NOTE: We want to persist the change too! To do this, we can use the `this.save();`
            // function.
        },

        toggleEditing: function () {
            // 4b. TO COMPLETE
            // --------------
            // See if you can do this one on your own!
            //
            // NOTE: We DO NOT WANT to persist the change this time! The reason for this, is we
            // don't want to refresh the screen, and have some of our todos in an edit state when
            // the page loads.
        }

    });

}());
