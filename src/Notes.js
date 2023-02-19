import React from 'react';
import './Notes.css';

export default function Notes() {

  


  return (
    <>
      <h1 className='notes'>Notes</h1>
      <div className='a1' >
        <div className='a2'>
         <h3 id='A4'>SUBJECT LIST</h3>
         <hr></hr>
         <h3 id='S1'>CIP UP</h3>
         <hr></hr>
         <h3>DBMS</h3>
         <hr></hr>
         <h3>IWT</h3>
         <hr></hr>
         <h3>MATHS-3</h3>
         <hr></hr>
         <h3>MATHS-2</h3>
         <hr></hr>
         <h3>MATHS-1</h3>
         <hr></hr>
         <h3>DSA</h3>
         <hr></hr>
         <h3>BEEE</h3>
         <hr></hr>
        </div>
        <div className='a3'>
            <object data=
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
                            width="100%"
                            height="1000">
                    </object>
                    
        </div>
    </div>
    </>
  );
}
