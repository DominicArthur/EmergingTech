// Defined patters to match user input, taken from repo 
const responses = [
    { pattern: /hello|hi|hey/i, responses: ["Hello! How are you feeling today?", "Hi there! What’s on your mind?", "Hey! How can I help you?"] },
    { pattern: /you remind me of (.*)/i, responses:["Why do you think I remind you of $1?","What makes you think of $1 when talking to me?", "Is it a good feeling to be reminded of $1?"]},
    { pattern: /(.*)mother|father|family|parent(.*)/i, responses:["Tell me more about your family.","How does that make you feel about your family?", "What role does your family play in your thoughts?"]},
    { pattern: /(.*) I need (.*)/i, responses: ["Why do you need $1?","Would getting $1 really help you?","What if you didn’t need $1?"] },
    { pattern: /(.*) I am (.*)/i, responses: ["Why do you think you are $2?", "How long have you felt that way?","What made you feel like $2?"]},
    { pattern: /(.*) I feel (.*)/i, responses: [ "Why do you feel $2?","Does feeling $2 happen often?","How does that feeling affect you?"]},
    { pattern: /(.*) (sorry|apologize)(.*)/i, responses: ["No need to apologize.","Apologies aren't necessary. Why do you feel that way?",  "It’s okay to feel that way."]},
    { pattern: /bye|goodbye|exit/i, responses: ["Goodbye! Take care.", "Thank you for sharing. Goodbye!", "Bye! I’m here if you need to talk again."] },
    { pattern: /(.*)/i, responses: ["Can you tell me more?", "Why do you say that?", "How does that make you feel?", "What do you mean by that?", "Interesting... go on."] }
  ];
  
  // Reflection logic, "I" becomes "you" and so on
  const reflections = { 
    "I": "you",         
    "me": "you",
    "my": "your",       // If a word exists in the reflection it will be replaced
    "am": "are",        // If the word dosen't match the word is unchanged.
    "you": "I",
    "your": "my",
    "yours": "mine",
    "are": "am"
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // Select elements for interaction
    const chatBox = document.querySelector("#chat-box"); // Chat history 
    const inputField = document.querySelector("#user-input"); // Input field for user messages
    const sendButton = document.querySelector("#send-button");  // Button to send message

    // Function to display messages in the chatbox
    function addMessage(sender, message){
      const messageElement = document.createElement("div");
      messageElement.className = sender  === "user" ? "user-message" : "bot-message"; // 'User' or 'Bot'
      messageElement.textContent = message;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the last message
    }

   // Event listener for the Send button
  sendButton.addEventListener("click", () => {
    const userMessage = inputField.value.trim(); // Get user input
    if (userMessage) {
      addMessage("user", `You: ${userMessage}`); // Display user's message
      const botResponse = getResponse(userMessage); // Generate bot response
      addMessage("bot", `ELIZA: ${botResponse}`); // Display bot's response
      inputField.value = ""; // Clear input field
    }
  });

  // Allow Enter key to send the message
  inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendButton.click(); // Trigger Send button's click event
    }
  });
});

  function reflect(statement) {
    return statement.split(" ").map(word => reflections[word] || word).join(" ");
  }
  
  // Function to match user input to patterns
  function getResponse(input) {
    for (let item of responses) {
      const match = input.match(item.pattern);  // Check if input matches a pattern
      if (match) {
        console.log("Matched pattern:", item.pattern, "Groups:", match.slice(1)); // Add log to see what pattern is being used
        const response = item.responses[Math.floor(Math.random() * item.responses.length)];
        return response.replace(/\$(\d+)/g, (_, num) => match[parseInt(num)]);
      }
    }
    return "I’m not sure how to respond to that."; // If no patterns match, print this
  }
  