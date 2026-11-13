import { useState } from 'react';
import {Chatbot} from 'supersimpledev';


 export function ChatInput({ChatMessages ,setChatMessages}){ 
        const [inputText ,setInputText ] = useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }
        function sendMessages(){
          const newChatMessages=[ 
                ... ChatMessages,
              {
                message : inputText,
                sender: 'user',
                id : crypto.randomUUID()
              }]
          setChatMessages(newChatMessages);

          const response = Chatbot.getResponse(inputText);
           setChatMessages(
            ...newChatMessages,
          {
            message : response,
            sender: 'robot',
            id : crypto.randomUUID()
          });
          setInputText('');
        }
        return (
        <div class="chat-input-container">
           <input placeholder="Type your message..." size="30" onChange={saveInputText} value ={inputText} class="chat-input"/>
           <button onClick={sendMessages} class="send-button">Send</button>
        </div> 
       );}