import { useContext } from "react";
import FetchDataContext from "../context/fetchdatacontext";
import Card from "./card";
import LoadingCard from "./LoadingCard";

export default function Cardmanager() {
  const { fetchdata } = useContext(FetchDataContext);
  if (!fetchdata)
    return (
      <div>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );

  return (
    <div className="my-10 flex flex-wrap justify-center gap-4  ">
      {Object.values(fetchdata).map((carditem) => (
        <Card
          key={carditem.source}
          source={carditem.source}
          price={carditem.price}
          title={carditem.title}
          link={carditem.link}
          imageurl={carditem.image}
        />
      ))}
    </div>
  );
}
