// Defined patters to match user input, taken from repo 
const responses = [
    { pattern: /hello|hi|hey/i, responses: ["Hello! How are you feeling today?", "Hi there! What’s on your mind?", "Hey! How can I help you?"] },
    { pattern: /you remind me of (.*)/i, responses:["Why do you think I remind you of $1?","What makes you think of $1 when talking to me?", "Is it a good feeling to be reminded of $1?"]},
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
  
  function reflect(statement) {
    return statement.split(" ").map(word => reflections[word] || word).join(" ");
  }
  
  // Function to match user input to patterns
  function getResponse(input) {
    for (let item of responses) {
      const match = input.match(item.pattern);  // Check if input matches a pattern
      if (match) {
        const response = item.responses[Math.floor(Math.random() * item.responses.length)];
        return response.replace(/\$(\d+)/g, (_, num) => match[parseInt(num)]);
      }
    }
    return "I’m not sure how to respond to that."; // If no patterns match, print this
  }
  