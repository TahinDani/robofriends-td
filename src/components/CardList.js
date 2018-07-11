import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const { robots } = props;
    const cardsArray = robots.map((user, i) => {
        return (<Card 
                    key={robots[i].id}   // React needs the key
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}
                    />
                ); 
        })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;