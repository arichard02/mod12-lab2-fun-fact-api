import express from "express";
import axios from "axios";
import jsonClient from "./apiClient.js";
const app = express();
const port = 1992;

app.get("/api/fun-fact", async (req, res) => {
  try {
    const { language } = req.query;
    let response;
    if (language) {
      response = await jsonClient.get(
        `/api/v2/facts/random?language=${language}`,
      );
    } else {
      response = await jsonClient.get("/api/v2/facts/random");
    }
    // make a request to a external api
    // const response = await jsonClient.get("/api/v2/facts/today");

    //  const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(response.data);

    //keep only the properties and values we need

    const text = {
      fact: response.data.text,
    };

    console.log(text);

    res.json(text);

  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ "error": "Could not fetch fun fact" });
    }
  }
});

app.listen(port, () => {
  console.log("Server is listening to port:" + port);
});