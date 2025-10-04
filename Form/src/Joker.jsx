import { useEffect, useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    // Fetch the first joke when component mounts
    const fetchFirstJoke = async () => {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    };

    fetchFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker</h3>
      <h1>{joke.setup}</h1>
      <h1>{joke.punchline}</h1>
      <button onClick={getNewJoke}>New joke</button>
    </div>
  );
}
