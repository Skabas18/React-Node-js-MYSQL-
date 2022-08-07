import BlogModel from '../models/BlogModel.js';

//Metodos del crud

// 1. Mostrar los registros
async function getAllBlogs(req, res) {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message })
    }
}

// 2. Mostrar un registro
async function getBlog(req, res) {
    try {
        const blog = await BlogModel.findAll({
            where:{
                id:req.params.id
            }
        });
        res.json(blog[0]);
    } catch (error) {
        res.json({ message: error.message })
    }
}

// 3.  crear un registro
    async function createBlog (req,res){
        try {
            await BlogModel.create(req.body)
            res.json({
                "message": "Registro creado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    } 
// 4. Actualizar un registro
    async function updateBlog(req, res){
        try {
            await BlogModel.update(req.body,{
                where:{
                    id:req.params.id
                }
            })
            res.json({
                "message": "actualizado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    }

// 5. Eliminar un registro
    async function deleteBlog(req, res){
        try {
            await BlogModel.destroy({
                where:{
                    id: req.params.id
                }
            })
            res.json({
                "message": "Registro eliminado correctamente"
            })
        } catch (error) {
            res.json({message: error.message})
        }
    }
export {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}