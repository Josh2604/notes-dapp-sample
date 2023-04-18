const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

describe("Task list contract contract", function() {
  async function deployContract(){
    const contract = await ethers.getContractFactory("TaskList");
    const deploy = await contract.deploy();

    return {deploy}
  }

  it("Contract Deploy", async function (){
    const {deploy} = await loadFixture(deployContract)

    const _description = "test description";

    const description = ethers.utils.formatBytes32String(_description);
    await deploy.addTask(description);

    const taskOne = await deploy.getTask(1);

    expect(taskOne[0], _description);
    expect(taskOne[1], false);
  })

  it("Test, when add two tasks", async function(){
    const { deploy } = await loadFixture(deployContract)
    const _description = "test description";
    const _description2 = "test description";

    const description = ethers.utils.formatBytes32String(_description)
    const description2 = ethers.utils.formatBytes32String(_description2)

    await deploy.addTask(description);
    await deploy.addTask(description2);

    const taskOne = await deploy.getTask(1)
    const taskTwo = await deploy.getTask(2)

    expect(taskOne[0], _description);
    expect(taskOne[1], false);

    expect(taskTwo[0], _description2);
    expect(taskTwo[1], false);
    expect(await deploy.getTaskCount()).to.equals(2);
  })

  it("Test, set complete task, successfully", async function(){
    const { deploy } = await loadFixture(deployContract)
    const _description = "test description";

    const description = ethers.utils.formatBytes32String(_description)
    await deploy.addTask(description);
    await deploy.completeTask(1)

    const taskOne = await deploy.getTask(1)

    expect(taskOne[1], true)
  })

  it("Test, Error trying to complete a completed task", async function(){
    const { deploy } = await loadFixture(deployContract);
    const _description = "test description";

    const description = ethers.utils.formatBytes32String(_description);
    await deploy.addTask(description);
    await deploy.completeTask(1);
    await expect(deploy.completeTask(1)).to.be.revertedWith("Task is already completed");
  })
})