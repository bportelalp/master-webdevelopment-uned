let debug = require("debug")("route:mflix");
var express = require("express");
var router = express.Router();
const client = require("../services/conexion-db");



router.get("/", (req, res, next) => {
  res.send("Welcome to MFlix!");
});

let valorGuardado = 0;
router.get("/cumulative", (req, res, next) => {
  valorGuardado++;
  res.send("Valor acumulado: " + valorGuardado);
});

router.get("/movies", async (req, res, next) => {
  const mflix = client.db("sample_mflix");
  const query = { title: "Traffic in Souls" };
  const movie = await mflix.collection("movies").findOne(query);
  res.send(movie);
});

module.exports = router;