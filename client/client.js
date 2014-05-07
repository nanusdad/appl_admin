// Get Surveys and Answers collection
Meteor.subscribe("surveys");
Meteor.subscribe("answers");


Template.main.email_verified = function() {
	return Meteor.users.findOne({
		_id: Meteor.userId()
	}, {
		emails: {
			$slice: 0
		}
	}).emails[0].verified;
};

Template.main.admin = function() {
	// Meteor.call( isAdmin )
	console.log(Meteor.user().profile.administrator);
	return Meteor.user().profile.administrator;
};

Template.surveys.surveys = function() {
	return Surveys.find({});
};

Template.surveys.texter = function() {
	console.log('in texter');

}

Template.surveys.helpers({
	foo: function() {
		// ...
	},
	options: function(section_name, question_type) {
		if (question_type === 'para') {
			question_type = 'textarea';
		}
		return {
			type: question_type,
			async: true,
			position: 'top',
			value: section_name,
			onsubmit: function(val, cb) {
				setTimeout(function() {
					Session.set('text', val);
					cb();
					console.log(val);
				}, 1000);
			}
		};
	}
});