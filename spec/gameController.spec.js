// test.js
//const mochaStudy = require('./mochaStudy');
const { expect } = require("chai");
const request = require("supertest");
// const { expect } = require("chai");
const { server, db } = require("../server");
const mongoose = require("mongoose")
const generateUuid = require("uuid").v4
const validateUuid = require("uuid-validate");

const newRoomId = generateUuid();
const createdBy = mongoose.Types.ObjectId();

describe('Game Controller Test ', function () {
  before((done) => {
    const checkDatabaseConnection = () => {
      if (db.readyState === 1) {
        done()
      } else {
        done("db disconnection")
      }
    }

    setTimeout(() => checkDatabaseConnection(), 1000)
  })

  describe("Monster Escape", () => {
    it("GET", (done) => {
      request(server)
      .get("/api/games/monsterEscape")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) { return done(err) };
        expect(res.body.message).to.equal("success");
        expect(res.body.data).to.be.instanceOf(Array);
        done()
      })
    });

    it("POST", (done) => {
      request(server)
      .post("/api/games/monsterEscape")
      .set("Content-Type", "application/json")
      .send({
        gameTitle: "monsterEscape",
        newRoomId,
        createdBy,
      })
      .expect(201)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) { return done(err) };

        const { message, data } = res.body;

        expect(message).to.equal("success");
        expect(data).to.exist;

        expect(data.title).to.exist;
        expect(data.title).to.equal("monsterEscape");

        expect(data.roomId).to.exist;
        expect(validateUuid(data.roomId)).to.equal(true);
        expect(data.roomId).to.equal(newRoomId);

        expect(data.createdBy).to.exist;
        expect(mongoose.Types.ObjectId.isValid(data.createdBy)).to.equal(true);
        expect(data.createdBy.toString()).to.equal(createdBy.toString());

        expect(data.players).to.exist;
        expect(data.players[0].toString()).to.eql(createdBy.toString());

        done()
      })
    });
  });
});
