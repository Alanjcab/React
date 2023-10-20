import Item from "./Item"

const Itemlist = ({productos}) => {

  return (
    <>
    {
    productos.map((p)=>{
        return(
            <Item
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            price={p.price}
            />
        )
    })
    }
    </>
  )
}

export default Itemlist