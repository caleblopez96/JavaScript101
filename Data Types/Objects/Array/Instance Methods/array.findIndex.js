// .findIndex() returns the index of the first element
// that satisfies the provided function

// SYNTAX:
// .findIndex(callbackFn)
// .findIndex(callbackFn, args)

// EXAMPLE:
const tasks = [
  { description: 'Finish portfolio', completed: true },
  { description: 'Buy groceries', completed: false },
  { description: 'Reply to emails', completed: true },
  { description: 'Workout', completed: false },
  { description: 'Study JavaScript', completed: true }
];

const workoutIndex = tasks.findIndex(task => task.description === 'Workout')
