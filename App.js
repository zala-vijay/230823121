import Contact from './Contact.js'
const mca = require('./student.json')

function App(props)
{
    console.log(mca)
    return (
        <>
        {
            mca.map(function(student){
                return <Contact image={'https://cms.atmiya.edu.in/images/Stud_Photo/${student.Admission}.JPG'} name={student.StudentName} description={'${student.Divison} - ${student.RollNo}'}/>
            })
        }
        </>
    );
}

export default App;