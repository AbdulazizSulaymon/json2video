const instance = axios.create({
  baseURL: "https://api.json2video.com/v1/",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
    "x-api-key": "4a2PAVXDBD7cJpDzxmh8a4v8K7g9ox8F2HPpIxj2",
  },
});

const createNewMovie = async () => {
  const res = await instance.post("/movies", {
    project: "tutorial",
    resolution: "full-hd",
    quality: "high",
    scenes: [
      {
        "background-color": "#4392F1",
        elements: [
          {
            type: "text",
            items: [
              {
                text: "Hello world",
              },
            ],
            y: 510,
            duration: 10,
          },
        ],
      },
    ],
  });

  console.log(res);
};

createNewMovie();
