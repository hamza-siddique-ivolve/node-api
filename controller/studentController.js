const student = require('../model/studentModel');


// Create student
createstudent = async (req, res) => {
    // Save to MySQL database
   // try{
        const Student = new student(req.body);
        const result = await Student.save({}, function (err,result){
            if (err) {
                res.status(404).json({status:"fail",message:"already exit"});
    
            }else if (err){
                next(err);
            }
            else {
                res.json({status: "success", message: "student Created successfully!!!", data: result}); 
            }
        })
    }        
    
getAllStudent = async(req,res,next) => {
    
       // const Student = new student(req.body);
        const result = await student.find({}, function (err,result){
                    if (result == "") {
                        res.status(404).json({message:"This table has empty!!"});
            
                    }else if (err){
                        next(err);
                    }
                    else {
                        res.json({status:"Pass",data:result});
                    }
                })
            }        
    

getFindStudent =async (req,res) => {
    const result = await student.findById(req.params.studentId, (err,result)=>{
        if (err) {
            res.send(err)

        }
        
        res.json({ message: 'Successfully find student!',data:result});
        
    })
};
getDeleteStudent =async (req,res) => {
    const result = await student.remove({_id:req.params.studentId}
        , (err,result)=>{
        if (err) {
            res.send(err)

        }
        
        res.json({ message: 'Successfully delete student!',data:result});
        console.log(req.body)
        
    })
};
getUpdateStudent = async (req,res) => {
    const result = await student.findOneAndUpdate({ _id: req.params.student },{...req.body},
         { new: true,upsert:true}, (result, err) => {
        if(err){
            res.send(err);
        }
        res.json(result);
        console.log(result);
    });
}




module.exports={createstudent,getAllStudent,getFindStudent,getDeleteStudent,getUpdateStudent}