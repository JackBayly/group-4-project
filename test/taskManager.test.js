import { TaskManager } from "../js/taskManager.js";
const taskManagerInstance = new TaskManager();
import { assert } from 'chai';

describe("test suit", function () {
    it("test the addTasks method", function () {
        taskManagerInstance.addTasks(1, 2, 3, 4, 5);
        assert.equal(JSON.stringify(taskManagerInstance.tasks[0]), '{"name":1,"description":2,"assignTo":3,"dueDate":4,"status":"PENDING","id":0}');
    })
    it("test the deleteTask method", function () {
        taskManagerInstance.deleteTask(0);
        assert.isEmpty(taskManagerInstance.tasks);
    })
    it("test the getTaskById method", function () {
        taskManagerInstance.addTasks(2, 2, 2, 2, 2);
        taskManagerInstance.getTaskById(1);
        assert.equal(JSON.stringify(taskManagerInstance.tasks[0]), '{"name":2,"description":2,"assignTo":2,"dueDate":2,"status":"PENDING","id":1}');
    })
    it("test the instantiation of TaskManager", function () {
        const taskManagerInstanceTwo = new TaskManager();
        assert.equal(JSON.stringify(taskManagerInstanceTwo), '{"currentId":0,"tasks":[]}');
    })
})