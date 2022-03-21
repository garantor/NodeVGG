
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


async function getAllActions(res, resp){
  console.log("getAllActions");
  const allAction = await Action.find();
  resp.status(200).json({
    message:allAction
  });

};

async function getActionById(res, resp){
  
    const id = res.params.id;
    const action = await Action.findById(id)
    if(action){
         resp.status(200).json({
           message: action,
         });
    }else{
        resp.status(404).json({
          message: `action with id ${id} not found`,
        });
    }
 
 
};


module.exports = { registerActions, getAllActions, getActionById };
