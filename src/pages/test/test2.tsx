import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

 const onChangeInput = (e: any) => {
   setPerson({
     ...person,
     [e.target.name] : e.target.value 
   })
 }
 return (

   <>
     <label>
       First name:
       <input
         name="firstName"
         value={person.firstName}
         onChange={onChangeInput}
       />
     </label>
     <label>
       Last name:
       <input
         name="lastName"
         value={person.lastName}
         onChange={onChangeInput}
       />
     </label>
     <label>
       Email:
       <input
         name="email"
         value={person.email}
         onChange={onChangeInput}
       />
     </label>
     <p>
       {person.firstName}{' '}
       {person.lastName}{' '}
       ({person.email})
     </p>
   </>
 );

}
