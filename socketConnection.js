const express = require("express");
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, playerData) => {
    socket.join(roomId);

    const socketSet = io.sockets.adapter.rooms.get(roomId);
    const socketList = [...socketSet];

    socket.broadcast
      .to(roomId)
      .emit("player-connected", { playerData, socketList });

    socket.on("input-player", (data) => {
      socket.broadcast.to(roomId).emit("input-other-player", data);
    });

    socket.on("start-game", () => {
      socket.broadcast.to(roomId).emit("start-by-other", playerData);
    });

    socket.on("leave-player", () => {
      socket.broadcast.to(roomId).emit("player-disconnected", playerData);
    });

    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("player-disconnected", playerData);
    });
  });

  socket.on("animation", (roomId, userData) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("animation", userData);
  });
});
