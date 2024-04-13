export default function Card({
  imageurl = "https://placehold.co/600x400",
  link = "#",
  title = "product not found",
  price = "00.00",
  source = "source",
}) {

   const shortenedTitle = title.length > 40 ? `${title.substring(0, 40)}...` : title;
  const fixprice= source=='Amazon'? `₹${price}` : price; 

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href={link} target="_blank"  >
          <img className="rounded-t-lg h-40 mx-auto my-4 cursor-pointer" src={imageurl} alt="" />
        </a>
        <div className="p-5 gap-4 justify-between">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold flex-shrink">
              Titale:{shortenedTitle}
            </h5>
          </a>
          <p className="mb-3 font-normal text-2xl ">Price : {fixprice}</p>
          <p className="mb-3 font-normal">Source : {source}</p>
          <a
            href={link} target="_blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-amber-500 rounded-lg  "
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
