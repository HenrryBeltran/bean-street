const keys = window.location.search;
const urlParams = new URLSearchParams(keys);
const type = urlParams.get("type");
const sweetness = urlParams.get("sweetness") || "false";

const isSweetness = new RegExp("true").test(sweetness);

function CoffeeQuery() {
  console.log(isSweetness);

  return (
    <div>
      <h1 className="text-lg font-black capitalize tracking-tighter text-brown-800">
        {type}
      </h1>
      <p className="text-brown-700">Sweetness</p>
      <p className="font-light text-brown-700">{isSweetness ? "sugar" : "none"}</p>
    </div>
  );
}
export default CoffeeQuery;
