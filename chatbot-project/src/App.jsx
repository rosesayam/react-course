import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'

import './App.css'

      
       

      
 function App(){
        const [chatMessages,setChatMessages]  =  useState([{

          message: 'hello chatbot' ,
          sender : 'user',
          id : 'id1'
        },
        {
          message: 'how are u?' ,
          sender : 'bot',
          id : 'id2'
        },
        {
          message: 'i am fine thank u' ,
          sender : 'user' ,
          id: 'id3'
        },
        {
          message: 'what can i do for u ?' ,
          sender : 'bot' ,
          id :'id4'
        }]);
      // const [chatMessages,setChatMessages]= array ;
      //  const chatMessages =array[0];
      // const setChatMessages =array[1]; 
        return(
           <div class="app-container">
           
           <ChatMessages
           chatMessages={chatMessages}/>
           <ChatInput 
           chatMessages ={chatMessages}
           setChatMessages={setChatMessages}
           />
           </div>
        );
       }

export default App
