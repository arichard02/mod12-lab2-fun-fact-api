Reflection Questions:

After completing this activity, consider the following:

Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

It was important to re-format the data because the API sends back a lot of extra information that the client doesn’t really need. For this project we only needed the actual fact, so it made sense to just send that instead of the whole response object. Doing this keeps the response simpler and easier for the client to use. A clean and minimal response also helps reduce unnecessary data being sent and makes the API easier to understand and work with.



In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

It’s better to send a generic error message because the axios error object can contain a lot of technical details about the server or the request. Those details aren’t helpful for the client and could expose information that shouldn’t be shared. Sending a simple error message lets the client know something went wrong without showing internal system details.



How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

If the API supported different languages, I could update the axios request by adding a query parameter to the URL. For example, adding ?language=de would return a fact in German. Another option would be to let the client send a language choice in the request and then pass that value to the external API so the fact is returned in the language the user selected.



## Scenario
The owner of “The Daily Grind” coffee shop was so impressed with your first server that they have a new request. They want to add a “Fun Fact of the Day” to a digital screen in their shop. To do this, they need an API endpoint on their server that fetches a random fun fact from an external public API and provides it in a simple format.

Learning Objectives
By the end of this activity, you will have demonstrated your ability to:

Create an Express server that communicates with an external API.
Use axios to perform a GET request to a public API.
Handle the response from an external API and serve the relevant data to a client.
Implement basic error handling for API requests.
Instructions
Task 1: Project Setup
If you are starting a new project, create a directory, cd into it, and run npm init -y.
Install the necessary packages: express and axios.


npm install express axios
Task 2: Create the Express Server
Create a file named server.js.
Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.
Task 3: Create the API Route
In server.js, create a new GET route at the path /api/fun-fact.
This route will be responsible for fetching the data and sending it to the client.
Task 4: Fetch from an External API
For this lab, we will use the Useless Facts API , which provides random facts and requires no API key. The endpoint for a random fact is https://uselessfacts.jsph.pl/api/v2/facts/random.
Inside your /api/fun-fact route handler, use axios to make a GET request to this URL.
Remember to use async/await and wrap your API call in a try...catch block to handle potential errors.
Task 5: Handle and Respond with Data
If the axios request is successful, the response data from the Useless Facts API will look something like this:


{
  "id": "d046f554-9430-4113-9528-56455147814b",
  "text": "A standard deck of cards is a calendar...",
  "source": "djtech.net",
  "source_url": "http://www.djtech.net/humor/useless_facts.htm",
  "language": "en",
  "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/d046f554-9430-4113-9528-56455147814b"
}
Your API should not send this entire object to the client. Instead, extract only the text of the fact.
Send a JSON response back to the client in the following format:


{
  "fact": "A standard deck of cards is a calendar..."
}
If the request fails (i.e., the catch block is executed), send an appropriate error response, such as a 500 status code and a JSON object like { "error": "Could not fetch fun fact" }.
Submission Instructions
Ensure your server.js file is complete and your package.json includes the required dependencies.
Run your server with node server.js.
Test your API by visiting http://localhost:3000/api/fun-fact in your browser. You should see a new random fact in the specified JSON format each time you refresh.
Once complete, submit a link to your GitHub repository containing the project files.
Reflection Questions
After completing this activity, consider the following:

Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?


