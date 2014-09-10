import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'pre',

	didInsertElement: function() {
		this.highlight();

		if (this.get('hasLineNumbers')) {
			this.addLineNumbers();
		}
	},

	classNameBindings: ['language'],

	highlight: function() {
		var el = this.get('element');

		hljs.highlightBlock(el);
	},

	addLineNumbers: function() {
		var $el = this.$();

		var lines = $el.text().split('\n').length - 1;
		var $numbering = Ember.$('<ul/>').addClass('pre-numbering');

		$el
			.addClass('has-numbering')
			.append($numbering);
		for(var i=1; i<=lines; i++){
			$numbering.append(Ember.$('<li/>').text(i));
		}
	}
});
