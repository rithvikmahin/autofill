import './styles/styles.css'
import { Formik, Form, Field, FieldArray } from 'formik';

export default function WorkExperience(props) {
  
  console.log(props);
  return (
    <Formik
       initialValues={{ jobTitle: props.location.state.jobTitle ? props.location.state.jobTitle : '', jobDescription: '' }}
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values }) => (
         <Form>
           <label htmlFor="jobTitle">Job Title: </label>
           <Field id="jobTitle" name="jobTitle" placeholder="Job Title"/> 

           <label htmlFor="jobDescription">Job Description: </label>
           <Field id="jobDescription" name="jobDescription" placeholder="Job Description"/> 
         </Form>
       )}
     />
  )
}