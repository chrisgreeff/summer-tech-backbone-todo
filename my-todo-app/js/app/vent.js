/*globals App, Backbone, _ */
(function() {
    'use strict';

    var Vent = {};

    // We are going to extend Backbone.Events onto our Vent namespace, so we can easy fire and bind
    // to global events. This is particularly useful for doing event delegation, as in the
    // collection object performing tasks on the models behalf (Great for optimizations).
    _.extend(Vent, Backbone.Events);

    App.Vent = Vent;

}());
