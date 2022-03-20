
const Action = require("../Models/Action")




async function registerActions(req, resp) {
 
  console.log(req.body);

  const {project_id, description, note } = req.body;
  console.log(project_id, description, note);
  if ((!project_id, !description, !note)) return resp.status(400).json({"message":"Not found"});
  try {
    const actionCheck = await Action.findOne({ projectID: project_id }).exec();
    if (actionCheck)
      return resp
        .status(409)
        .json({ message: `Action with project_id ${project_id} already exist` });

    const addAction = await Action.create({
      projectID: project_id,
      description: description,
      note: note,
    });
    resp.status(200).json(addAction);
  } catch (err) {
    // console.log(err)
    resp.send(err);
  }
}



module.exports = { registerActions };
