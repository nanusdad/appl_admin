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

Template.main.rendered = function() {
	console.log('rendering');
	make_editable();
};

var make_editable = function() {
	console.log('in make_editable');
	texter('Instructions');
}

var texter = function(section_id) {
	console.log('in texter');
	$('#texter_' + section_id').editable({
		success: function(response, newValue) {
			console.log(newValue);
		}
	});
};