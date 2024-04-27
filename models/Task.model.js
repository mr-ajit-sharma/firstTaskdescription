import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        index: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed", "in progress"],
        default: "pending"
    },
    creationDate: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

taskSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }

    try {
        const TaskModel = mongoose.model('Task', taskSchema);
        const count = await TaskModel.countDocuments();
        this.id = count + 1;
        next();
    } catch (error) {
        next(error);
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
