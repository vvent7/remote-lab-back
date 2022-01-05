const clpVersionSrv = require('../../services/clpVersion');
const createError = require('http-errors');

async function readOne(req, res){
  const filter = req.query, {projection} = req.queryAdvanced;
  const clpVer = await clpVersionSrv.readOne(filter, projection);
  if(!clpVer) throw createError(404, 'CLP version not found');
  res.status(200).json(clpVer);
}

async function readAll(req, res){
  const filter = req.query, {projection} = req.queryAdvanced;
  const clpVerArr = await clpVersionSrv.readAll(filter, projection);
  res.status(200).json(clpVerArr);
}

async function create(req, res){
  await clpVersionSrv.create(req.body);
  res.status(200).end();
}

async function updateOne(req, res){
  const filter = req.query, updatedClpVer = req.bodyFlat;
  const result = await clpVersionSrv.updateOne(filter, updatedClpVer);

  if(!result.acknowledged) throw createError(400, 'Bad CLP version Updating');
  if(result.matchedCount<1) throw createError(404, 'CLP version not found');

  res.status(204).end();
}

async function updateAll(req, res){
  const filter = req.query, updatedClpVer = req.bodyFlat;
  const result = await clpVersionSrv.updateAll(filter, updatedClpVer);

  if(!result.acknowledged) throw createError(400, 'Bad CLP version Updating');

  res.status(204).end();
}

async function deleteOne(req, res){
  const filter = req.query;
  const {deletedCount} = await clpVersionSrv.deleteOne(filter);
  if(deletedCount<1) throw createError(404, 'CLP version not found');
  res.status(204).end();
}

module.exports = {readOne, readAll, create, updateOne, updateAll, deleteOne};