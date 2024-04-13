import { useContext } from "react";
import FetchDataContext from "../context/fetchdatacontext";
import Card from "./card";


export default function Cardmanager() {

  const { fetchdata} = useContext(FetchDataContext)

  console.log('data from cardmanager  ',fetchdata)

  if (!fetchdata) return(
    <h1>search and compare product</h1>
  )

  // const cardsArray = Object.values(carddata);
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
