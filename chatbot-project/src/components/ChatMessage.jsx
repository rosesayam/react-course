import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';

export function ChatMessage({message, sender}){
        // const {message, sender} = props;
        /*if(sender === "bot"){
          return(
            <div>
               <img src="robot.png" width="50" />
               {message}
            </div>
        );}  */

         return(
          <div class={sender==='user'? 'chat-message-user' : 'chat-message-robot' }>
             {sender ==='bot'&&<img src={RobotProfileImage} class="chat-message-profile"/>}
             <div class="chat-message-text">{message}</div>
             {sender ==='user'&&<img src={UserProfileImage} class="chat-message-profile" />}

          </div>
         );
       }