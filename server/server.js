Meteor.publish('answers', function() {
	console.log(this.userId);
	return Answers.find({
		user_id: this.userId
	});
});

Meteor.publish('surveys', function() {
	return Surveys.find({});
});