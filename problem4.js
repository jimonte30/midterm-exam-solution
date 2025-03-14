let tasks = []; // Define an empty array to store tasks

// Function to add a task
function addTask(name, description) {
    const task = { id: tasks.length + 1, name, description }; // Create a new task object
    tasks.push(task); // Add the task to the tasks array
}

// Function to get all tasks
function getTasks() {
    return tasks; // Return all tasks
}

// Function to update a task
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id); // Find the task by id
    if (task) {
        task.name = updatedName; // Update the task name
        task.description = updatedDescription; // Update the task description
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id); // Filter out the task by id
}

// Testing to add, delete, retrieve and update tasks
addTask("Managing Color Things", "Arranging the color thing according to where they belong."); // Add a new task
console.log(getTasks()); // View all tasks
updateTask(1, "Arrange Things color.", "Arrange the things."); // Update the task 1
console.log(getTasks()); // View updated tasks
deleteTask(1); // Delete task 1
console.log(getTasks()); // View tasks after deletion

// Export the functions for passing the functions to other files
module.exports = { addTask, getTasks, updateTask, deleteTask }; 