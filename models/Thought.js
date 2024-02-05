const { Schema, model } = require('mongoose');
const reactionSchema

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
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateformat(timestamp)
    },
    reactions: [reaction]
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){

})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
