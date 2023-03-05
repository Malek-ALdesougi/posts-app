import { memo } from "react";


const ChildTest = () => {
console.log('childe re-rendered');

    return (
        <div key={'malek'}>
                <h2>I'm child of my parent</h2>
        </div>
    )
}

export default memo(ChildTest);