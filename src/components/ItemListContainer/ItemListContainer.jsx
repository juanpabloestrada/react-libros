
import { Link } from 'react-router-dom';

const ItemListContainer = ({productsData}) => {
    return (
            <div style={{display: 'flex', justifyContent: 'space-around', width: '100vw', flexWrap: 'wrap', marginBottom: '5px'}}>
                {productsData.map((products) => {
                        return ('');
                    })}
            </div>
    );
};

export default ItemListContainer;