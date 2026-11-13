 import { ChatMessage } from './ChatMessage'
  function ChatMessages({chatMessage}){
        return(
         <div class="chat-message-container">
            {chatMessage.map((chatMessage)=>{
                  return(
                    <ChatMessage 
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key ={chatMessage.id}
                    />
                  ) })}
          </div>
               );}
               export default ChatMessages