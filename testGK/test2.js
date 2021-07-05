import Developer from "./model/entities/Developer.js";
import Tester from "./model/entities/Tester.js";
import Manager from "./model/entities/Manager.js";

const member1 = new Developer("444", "adam", ["check infor","level A", "tele number"]);
const member2 = new Developer("445", "eva", ["check infor", "level C", "work place"]);

const tester1 = new Tester("646", "Nathan", ["check infor", "level B", "tele number"]);
const tester2 = new Tester("663", "Jassica", ["check infor", "level A", "work place"]);

const mgr1 = new Manager(
  "mgr1",
  "JonhWick",
  ["check infor", "check memeber"],
  [member1, member2]
);

const mgr2 = new Manager(
  "m2",
  "Han",
  ["check infor", "check memeber"],
  [tester1, tester2]
);

// console.log(member1);
// member1.info();
// member2.info();
// mgr1.add();
// mgr2.info();
