import { Card } from 'primereact/card';
function ItemCard({item}){

const header = <img alt="Card" src={item.imgUrl} style={{width:'150px', height:'150px'}}/>;
const footer = <span>
    <button label="Buy" icon="pi pi-check" style={{marginRight: '.25em'}}> Buy </button>
</span>;

return(
    <div style={{borderRadius:'10px', border: '1px solid #ccc', width:'fit-content', padding:'10px'}}>
    <Card header={header} footer = {footer}>
    Title: {item.title} <br/>
    Price: {item.price} <br/>
    Description: {item.desc} <br/>
    </Card>
    </div>
)
}

export default ItemCard;