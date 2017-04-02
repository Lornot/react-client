var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
    listenable: [Actions],
    getIngredients: function() {

        this.fireUpdate();
    },
    postIngredients: function(text) {
        // Posted ingredient to the server
        // now we got a successful callback

        this.fireUpdate();
    },
    // Refresh function
    fireUpdate: function() {
        this.trigger('change', this.ingredients);
    }
});

module.exports = IngredientStore;