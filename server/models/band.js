var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetalSchema = new Schema({
	b_name: String,
	b_genre: String,
	b_origin: String,
	b_label: String,
	b_description: String,
	created_at: {type: Date, required: true, default: Date.now}
});
mongoose.model("Metal", MetalSchema);
var Metal = mongoose.model('Metal');

// MetalSchema.path('b_name').required(true, 'Band name cannot be blank');
// MetalSchema.path('b_genre').required(true, 'Please declare genre!');