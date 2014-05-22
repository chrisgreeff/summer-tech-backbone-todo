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
            this.save({
                complete: !this.get('complete')
            });
        },

        toggleEditing: function () {
            this.set('editing', !this.get('editing'));
        }

    });

}());
