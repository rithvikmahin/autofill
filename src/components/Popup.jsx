import { Link } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';

export default function Popup() {

  return (
    <Formik
       initialValues={{ jobHistory: [] }}
       onSubmit={values =>
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
         }, 500)
       }
       render={({ values }) => (
         <Form>
           <FieldArray
             name="jobHistory"
             render={arrayHelpers => (
               <div>
                 {values.jobHistory && values.jobHistory.length > 0 ? (
                   values.jobHistory.map((jobHistory, index) => (
                     <>

                     <div key={index}>
                       <label></label>
                        <div styles={{}}>
                          
                          <Link to={{ pathname: `/job/${index}`, state: {jobTitle: values.jobHistory[index] }}}> {values.jobHistory[index]} </Link>
                          
                        </div>
                       
                     </div>
                     <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)}
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={() => {
                           arrayHelpers.insert(index, '')
                           values.jobHistory[index] = "Job Title " + index;
                          }}
                       >
                         +
                       </button>
                     </>
                   ))
                 ) : (
                   <button type="button" onClick={() => arrayHelpers.push('')}>
                     Add a job
                   </button>
                 )}
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               </div>
             )}
           />
         </Form>
       )}
     />
      

  )
}
