import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";
import { useEffect } from "react";

export const App = () => {
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(true)
    const onClickCountUp = () => {
        setNum((prev) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };

    useEffect(() => {
        if(num > 0) {
            if (num % 3 === 0){
                isShowFace || setIsShowFace(true);
            }else{
                isShowFace && setIsShowFace(false);
            }
        }
    }, [num]);



    return  (
        <>
            <h1 style={{ color : "red"}}>こんにちは！</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です！</ColorfulMessage>

            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>😡</p>}
        </>
    );
}