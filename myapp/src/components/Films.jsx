import { useEffect } from "react"

const Films = (props) => {

    useEffect(() => {
        console.log('Монтирование')
    }, []);

    return (
        <>
            <h1>Films</h1>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Films