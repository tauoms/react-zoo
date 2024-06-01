import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AnimalPage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((el) => el.name === params.name);
  const [paragraph, setParagraph] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLastParagraph = async () => {
      try {
        const response = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            format: "json",
            prop: "extracts",
            titles: data.name,
            exintro: true,
            explaintext: true,
            origin: "*",
          },
        });

        const pages = response.data.query.pages;
        const page = Object.values(pages)[0];
        const extract = page.extract;

        if (extract) {
          const paragraphs = extract
            .split("\n")
            .filter((paragraph) => paragraph.trim() !== "");
          const lastParagraph = paragraphs[paragraphs.length - 1];

          setParagraph(lastParagraph);
        } else {
          setError("No content found for this article.");
        }
      } catch (err) {
        setError("Failed to fetch data from Wikipedia.");
      }
    };

    fetchLastParagraph();
  }, [data.name]);

  return (
    <div id="AnimalPage">
      <h2>{data.name}</h2>
      <div className="imgcontainer">
        <img
          src={`https://source.unsplash.com/random/400×400/?${data.name}`}
          alt={`Photo of ${data.name}`}
        />
        <h3>This animal has {data.likes} likes.</h3>
        <div>{error ? <p>{error}</p> : <p>{paragraph}</p>}</div>
      </div>
    </div>
  );
};

export default AnimalPage;
