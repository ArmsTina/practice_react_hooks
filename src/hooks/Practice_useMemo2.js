import { useState, useMemo } from 'react';

export default function Practice_useMemo2(){
    // 이는 또한 오브젝트에 값을 할당할때도 사용 가능하다.
    // 오브젝트의 값이 바뀌거나, 렌더링 될때 오브젝트를 저장하고 있는 주소값이 바뀐다.
    // const location 이라는 오브젝트가 있다고 가정하자. 이는 사실 location 변수가 아닌, location 변수 안의 주소값에 값을 저장한다.
    // 그리고 이 주소값은 매 렌더링 마다 바뀐다.
    return(
        <div>
            <h1>You are on useMemo2</h1>
        </div>
    )
}