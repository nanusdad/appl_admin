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

Template.surveys.rendered = function () {
	$('#texter_Instructions').on('blaze-update', function (e) {
		texter();
	});
}

var texter = function() {
	console.log('in texter');
	$('#texter_Instructions').editable({
		success: function(response, newValue) {
			console.log(newValue);
		}
	});
};
