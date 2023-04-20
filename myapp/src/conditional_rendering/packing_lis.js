function Item({name,isChecked})
{
  return(
    <li>
        {isChecked? name +'✔'
         : name}
    </li>
  );
}


function PackingList()
{
    return(
        <section>
            <h1>Sally rides packing list</h1>
            <ul>
            <Item
                name="space suit"
                isChecked={true}
                />
                <Item 
                name="helmet"
                isChecked={false}
                />
                <Item
                   name="PHOTOO"
                   isChecked={true}
                   />
                   </ul>
        </section>
    )
}
export default PackingList;