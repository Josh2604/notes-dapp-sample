// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

contract TaskList {
  struct Task {
    bytes32 description;
    bool completed;
  }

  mapping(uint => Task) public tasks;
  uint public taskCount;

  function addTask(bytes32 _description) public {
    taskCount++;
    tasks[taskCount] = Task(_description, false);
  }

  function completeTask(uint _taskId) public {
    require(tasks[_taskId].completed == false, "Task is already completed");
    tasks[_taskId].completed = true;
  }

  function deleteTask(uint _taskId) public {
    require(tasks[_taskId].completed == true, "Can only delete completed tasks");
    delete tasks[_taskId];
  }

  function getTask(uint _taskId) public view returns (bytes32, bool){
    return (tasks[_taskId].description, tasks[_taskId].completed);
  }

  function getTaskCount() public view returns (uint) {
    return taskCount;
  }
}