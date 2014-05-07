Meteor.publish('answers', function() {
	console.log(this.userId);
	return Answers.find({
		user_id: this.userId
	});
});

Meteor.publish('surveys', function() {
	return Surveys.find({});
});

//Metor.methods
//Surveys.update({ "sections.questions.question_id": 'S1C1I2' }, { $set : { "sections.questions.$.question_text": "Instructions: This form is a continuation of the application from the previous application page." } })