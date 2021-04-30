const request = require("supertest");
const { expect } = require("chai");
const mongoose = require("mongoose");
const generateUuid = require("uuid").v4;
const validateUuid = require("uuid-validate");
const { server, db } = require("../server");

describe("Game Controller Test - Monster Escape", () => {
  const roomId = generateUuid();
  const createdBy = mongoose.Types.ObjectId();

  before((done) => {
    const checkDatabaseConnection = () => {
      if (db.readyState === 1) {
        done();
      } else {
        done("db disconnection");
      }
    };

    setTimeout(() => checkDatabaseConnection(), 1000);
  });

  describe("Request & Response '/monsterEscape'", () => {
    it("GET - fetch room database", (done) => {
      request(server)
        .get("/api/games/monsterEscape")
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }
          expect(res.body.message).to.equal("success");
          expect(res.body.data).to.be.instanceOf(Array);
          done();
        });
    });

    it("POST - create room database", (done) => {
      request(server)
        .post("/api/games/monsterEscape")
        .set("Content-Type", "application/json")
        .send({
          gameTitle: "monsterEscape",
          newRoomId: roomId,
          createdBy,
        })
        .expect(201)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }

          const { message, data } = res.body;

          expect(message).to.equal("success");
          expect(data).to.exist;

          expect(data.title).to.exist;
          expect(data.title).to.equal("monsterEscape");

          expect(data.roomId).to.exist;
          expect(validateUuid(data.roomId)).to.equal(true);
          expect(data.roomId).to.equal(roomId);

          expect(data.createdBy).to.exist;
          expect(mongoose.Types.ObjectId.isValid(data.createdBy)).to.equal(true);
          expect(data.createdBy.toString()).to.equal(createdBy.toString());

          expect(data.players).to.exist;
          expect(data.players[0].toString()).to.eql(createdBy.toString());

          done();
        });
    });

    it("PATCH - change roomdatabase", (done) => {
      request(server)
        .patch("/api/games/monsterEscape")
        .set("Content-Type", "application/json")
        .send({
          gameTitle: "monsterEscape",
          roomId,
          status: "Enter",
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }
          expect(res.body.message).to.equal("success");
          expect(res.body.data).to.be.instanceOf(Array);
          done();
        });
    });
  });

  describe("Request & Response '/monsterEscape/:roomId'", () => {
    it("GET - get room database", (done) => {
      request(server)
        .get(`/api/games/monsterEscape/${roomId}`)
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }
          expect(res.body.message).to.equal("success");

          const { message, data } = res.body;

          expect(message).to.equal("success");
          expect(data).to.exist;

          expect(data.title).to.exist;
          expect(data.title).to.equal("monsterEscape");

          expect(data.roomId).to.exist;
          expect(validateUuid(data.roomId)).to.equal(true);
          expect(data.roomId).to.equal(roomId);

          expect(data.createdBy).to.exist;
          expect(mongoose.Types.ObjectId.isValid(data.createdBy)).to.equal(true);
          expect(data.createdBy.toString()).to.equal(createdBy.toString());

          expect(data.players).to.exist;
          expect(data.players[0].toString()).to.eql(createdBy.toString());

          done();
        });
    });

    it("Delete - delete room database", (done) => {
      request(server)
        .delete(`/api/games/monsterEscape/${roomId}`)
        .set("Content-Type", "application/json")
        .send({
          gameTitle: "monsterEscape",
          roomId,
        })
        .expect(200)
        .expect("Content-Type", /json/)
        .end((err, res) => {
          if (err) { return done(err) }
          expect(res.body.message).to.equal("success");
          expect(res.body.data).to.be.instanceOf(Array);
          done();
        });
    });
  });
});
