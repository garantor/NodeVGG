const Projects = require("../Models/Projects");




async function registerProjects(req, resp) {  
  const { name, description, note} = req.body
  if(!name, !description, !note)
  return resp.send("Not found")
  try {
    const projectCheck = await Projects.findOne({ name: name });
    if (projectCheck)
      return resp
        .status(409)
        .json({ message: `Project with name ${name} already exist` });

    const addProjects = await Projects.create({
      name: name,
      description: description,
      note: note,
      complete: false,
    });
    resp.status(200).json(addProjects);
  } catch (err) {
    resp.send(err);
  };
 
}


async function getAllProject(res, resp){
  const allProject = await Projects.find();
  resp.status(200).json({ message: allProject });
};

async function getProjectByID(res, resp){
  const projectID = res.params.id
  try{
     const reqProject = await Projects.findById(projectID);
     if (reqProject) {
       resp.status(200).json({
         message: reqProject,
       });
     } else {
       resp.status(400).json({
         message: `project with ${projectID} not found`,
       });
     }

  } catch(err){
    resp.status(400).json({
      errorType:err.name,
      message:err.message})
  }
};

async function updateProjectById(req, resp) {
  const projectId = req.params.id
  try{
    const reqProject = await Projects.findById(projectId)
  

    if(req.body?.name) reqProject.name = req.body.name;
    if(req.body?.description) reqProject.description = req.body.description;
    if (req.body?.complete) reqProject.complete = req.body.complete;
    const saveProject = await reqProject.save();
    resp.status(200).json({
      message:saveProject
    })

  }catch (err){
    resp.status(400).json({
      message:`Project with ${projectId} is not found`
    });
  };
};

async function projectPatches(req, resp){
  try{
    const id = req.params.id;
    const projectList = await Projects.findById(id)
    if(!projectList){
      resp.status(400).json({
        message:`Project with ${id} not found`
      });
    } else{
        if(req.body?.name) projectList.name =req.body.name
        if(req.body?.description) projectList.description =req.body.description
        if (req.body?.complete) projectList.complete = req.body.complete;
        if (req.body?.action) projectList.action = req.body.action;
        let saveProject =  await projectList.save();
        resp.status(200).json({
          message:saveProject
        });
    };
  } catch(err){
    resp.status(400).json({
      message:`${err}`
    });
  }
};
//Delete project from db
async function deleteProject(req, resp){
  // resp.send("delete project")
  const id = req.params.id
  try{
    const toDeleteProject = await Projects.findById(id);
    if(!toDeleteProject){
      resp.status(404).json({
        message:`project with ${id} not found`
      });
    } else {
      await Projects.deleteOne({_id:id});
      resp.status(200).json({
        message:"Project successfully deleted"
      });
    }


  } catch(err){
    resp.status(400).send(err);
  }
};



module.exports = {
  registerProjects,
  getAllProject,
  getProjectByID,
  updateProjectById,
  projectPatches,
  deleteProject,
};