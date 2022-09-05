import Title from "./Title"
const Fruits= (props)=>{
    const frutas=["Pera", "Manzana", "Naranja","uva"]
    return (
    <div>
        {frutas.map((fruta,i)=><Title key={fruta} text={fruta} />)}
    </div>
    );
};

export default Fruits