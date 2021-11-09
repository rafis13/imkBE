const Category = require('./model')

module.exports = {
    index: async(req, res) => {
        try {
            const alertMessage=req.flash("alertMessage")
            const alertStatus= req.flash("alertStatus")


            const alert={message:alertMessage, status:alertStatus}
            const category = await Category.find()
            res.render('admin/category/view_category',{
                category,
                alert,
                name: req.session.user.name,
                title: 'Category Page'
            })
        } catch (err) {
            req.flash ('alertMessage', `${err.message}`)
            req.flash('alertStatus','danger')
            res.redirect('/category')
        }
    },
    viewCreate: async(req, res) => {
        try {
            res.render('admin/category/create',{
                name: req.session.user.name,
                title: 'Add Category Page'
            })
        } catch (err) {
            req.flash ('alertMessage', `${err.message}`)
            req.flash('alertStatus','danger')
            res.redirect('/category')
        }
    },

    actionCreate: async(req, res) => {
        try {
            const { name } = req.body

            let category = await Category({ name })
            await category.save();

            req.flash('alertMessage', "Successful to Add Category")
            req.flash('alertStatus', "Success")

            res.redirect('/category')

        } catch (err) {
            console.log(err)
        }
    },

    viewEdit : async (req,res) =>{
        try {
            const {id} = req.params

            const category = await Category.findOne ({_id :id})
            

            res.render('admin/category/edit',{
                category, 
                name: req.session.user.name,
                title: 'Edit Category Page'
            })
            
        } catch (err) {
            req.flash ('alertMessage', `${err.message}`)
            req.flash('alertStatus','danger')
            res.redirect('/category')
        }
    },

    actionEdit: async (req,res) =>{
        try {
            const  {id} = req.params;
            const {name} = req.body

             await Category.findOneAndUpdate({
                _id:id
            },{ name});

            req.flash('alertMessage', "Successful to Change Category")
            req.flash('alertStatus', "Success")


            res.redirect('/category')

        } catch (err) {
            req.flash ('alertMessage', `${err.message}`)
            req.flash('alertStatus','danger')
            res.redirect('/category')
        }
    },
    actionDelete: async(req,res) =>{
        try {

            const  {id} = req.params;

            await Category.findOneAndRemove({
                _id:id
            });

            req.flash('alertMessage', "Successful to Delete Category")
            req.flash('alertStatus', "Success")



            res.redirect('/category')
            
        } catch (err) {
            req.flash ('alertMessage', `${err.message}`)
            req.flash('alertStatus','danger')
            res.redirect('/category')
        }
    }
}