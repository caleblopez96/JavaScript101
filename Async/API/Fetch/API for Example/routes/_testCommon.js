"use strict";

const db = require("../db.js");
const Company = require("../models/company");
const Job = require("../models/job");

const testJobIds = [];

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM companies");

  await Company.create(
      {
        handle: "c1",
        name: "C1",
        numEmployees: 1,
        description: "Desc1",
        logoUrl: "http://c1.img",
      });
  await Company.create(
      {
        handle: "c2",
        name: "C2",
        numEmployees: 2,
        description: "Desc2",
        logoUrl: "http://c2.img",
      });
  await Company.create(
      {
        handle: "c3",
        name: "C3",
        numEmployees: 3,
        description: "Desc3",
        logoUrl: "http://c3.img",
      });

  testJobIds[0] = (await Job.create(
      { title: "J1", salary: 1, equity: "0.1", companyHandle: "c1" })).id;
  testJobIds[1] = (await Job.create(
      { title: "J2", salary: 2, equity: "0.2", companyHandle: "c1" })).id;
  testJobIds[2] = (await Job.create(
      { title: "J3", salary: 3, /* equity null */ companyHandle: "c1" })).id;
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  testJobIds,
};
