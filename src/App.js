import {ChatEngine } from 'react-chat-engine';
import { ChatFeed } from './components/ChatFeed';

function App() {
  return (
    <div>
      <ChatEngine
        height = "100vh"
        projectID='c68a6cba-cb0a-4b73-a7fc-179cd76fe829'
        userName='wxwong'
        userSecret='123!'
        // renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      />
    </div>
  );
}

export default App;
