import React from 'react';

/* function Fruit(props){ // 대문자로 시작 방법1
    console.log(props)
    return(
        <h3>I love {props.fav}</h3> //꼭 return 값 안에 작성하기
    )
} */

function Fruit( {name, picture, rating} ){ 
    return (
        <div>
            <h2> I like {name} </h2>
            <h4>{rating} / 5.0</h4>
            <img src={picture} width="300" alt={name} />
        </div>
    )
} // 방법2



export default Fruit;