import { useState, useEffect } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggestions, setStories] = useState([]);

  useEffect(() => {
    const storiesData = [...Array(20)].map((_, id) => ({ ...faker.helpers.contextualCard(), id }));
    setStories(storiesData);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {suggestions.map(({ id, avatar, username }) => (
        <Story key={id} img={avatar} username={username} />
      ))}
    </div>
  );
}

export default Stories;
