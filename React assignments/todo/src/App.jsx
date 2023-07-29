import { useState } from 'react'

import './App.css'
import './index.css'



function TodoTask(){

  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  const [editbtn, setEditBtn] = useState(false);
  const [valueToBeReplaced, setvalueToBeReplaced] = useState("");


// Add Item

  const onAddTask = (e) => {
        e.preventDefault();
    
          if(editbtn){

           updatevalue(valueToBeReplaced);
            setText("")
           setEditBtn(false)
        }else{
              if(text === ""){
                alert("Enter Any Task")
                return;
               }
               setTask([...task, text])
               setText("")
             }
    
       }


     // Update Item  
         const updatevalue = (valueSentByAddButton) => {
         
            const indexValuetoreplace=task.indexOf(valueSentByAddButton);
            task.splice(indexValuetoreplace,1,text);
    
         }


  // Edit Item

          const EditTask = (elementSentByHTML) => {
  
          const valuetoFind=task.find(element => element === elementSentByHTML)
          if(valuetoFind==elementSentByHTML)
         {
           setText(elementSentByHTML);
           setvalueToBeReplaced(elementSentByHTML);
         }
          setEditBtn(true);
        }


// Delete Item
            const onDeleteTask = (elementSentByHTML) =>{
            //  console.log(task)
             const valuetoDelete=task.find(element => element === elementSentByHTML)
             if(valuetoDelete == elementSentByHTML)
            {
               const indexD = task.indexOf(valuetoDelete)
                task.splice(indexD,1)
                 setTask([...task])
    
            }
          }






  return(

      <div>
            
         <form className='todoForm'>
               <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
           
              { 
                editbtn? <button className='updateBtn' onClick={onAddTask}>Update</button> : <button className='addBtn' onClick={onAddTask}>Add</button>
              }

          </form>
        
         
           
          


           <ul>
               {task.map((elem,index) => (
                  <div key={elem}>
                 
                       <li className='todoList'>
                           <span className='todoText'>{elem}</span>
                           <button className='listBtn' onClick={() => EditTask(elem)}><i className="fa-solid fa-pen-to-square"></i></button>
                           <button className='listBtn' onClick={() => onDeleteTask(elem)}><i className="fa-solid fa-trash"></i></button>
                           
                       </li>
                       
                  </div>
               ))}
              

           </ul>
          
      </div>
  
  )


}

function App() {
  return (
    <>
     <h1>CRUD App</h1>
     <TodoTask />
    </>
  );
}

export default App;