const trainer1 = {
    name: "Vaibhav Joshi",
    type: "Non Technical Trainer",
};

const description = function(duration) {
    console.log("Trainer: " +this.name +"\nType: " +this.type +"\nTraining duration: "
    +duration +" months");
}

const trainer2 = {
    name: "Sumit Joshi",
    type: "Technical Trainer - MERN Stack",
}

const teamLead = {
    name: "",
    age: 0,
    experience: 0
}

const addData = (name, age, experience) => {
    teamLead.name = name;
    teamLead.age = age;
    teamLead.experience = experience;
    console.log(teamLead);
}

//1. call

description.call(trainer1, 1);

//borrow functions from other methods
description.call(trainer2, 2);

//2. apply

addData.apply(teamLead, ["priyanka rana", 29, 7]);

/**
 * call v/s apply:
 * call -> first param = object, rest are arguments
 * apply -> first param is object and all the rest are passed TOGETHER as an array list
 */

//3. bind

//bind -> assignment to a variable possible
//return type: function

const bindTrainer = description.bind(trainer2, 20);
bindTrainer();
