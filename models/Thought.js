const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    ThoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    username: {
        type: String,
        required: true,
    }
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: {
      type: Schema.Types.ObjectId,
      ref: 'Reaction'
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
