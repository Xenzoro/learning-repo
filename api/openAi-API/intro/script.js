// Import the API key from the config file
// import apiKey from './config.js';

async function main() {
  // Send a POST request to the OpenAI API
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', // We are POST-ing data to the API
    headers: {
      'Content-Type': 'application/json', // Set the content type to JSON
      'Authorization': `Bearer ${apiKey}` // Include the API key for authorization bearer authentication
    },
    // Send model details and system message
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
          { role: 'system', content: `you are a world class chef that refuses to give basic recipes.
           Every dish must be extravagant, complex, and worthy of a michelin star...`},
          { role: 'user', content: 'How do I make a grilled cheese sandwich' }]
    })
  });
  // Parse and store the response data
  const result = await response.json();
  // Log only the AI's text response to the console
  console.log(result.choices[0].message.content);
};

// Call the main function
main();