const Projects = require("../Models/Projects");




async function registerProjects(req, resp) {
  console.log(req.body)

  
  const { name, description, note} = req.body
  console.log(name, description,note)
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
    // console.log(err)
    resp.send(err);
  };
 
}

module.exports = { registerProjects };