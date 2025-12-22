import { Fragment } from "react"

function Fragmentt() {
    return <Fragment>
        <h1>hii</h1>
        <h1>hello</h1>
        <h1>hehe</h1>
    </Fragment>
}

export default Fragmentt

//what I understood:
//as we know we need a parent <> to use multiple tags... 
//beacuse they are 2 different components which cannot be called together
//to solve this we often use a parent div tag which eventually solve this issue
//but creates another issue that it is an extra div 
//and sometimes if there is any loop, then that one div will be called for so many times
//to solve this, we use fragments...

//CHATGPT
// In React, a component must return a single parent element.
// If we want to return multiple elements, we need to wrap them.

// One way is using a <div>, but this adds an extra DOM node.
// Extra divs can break layouts (flex/grid) and create unnecessary nesting,
// especially inside loops.

// To avoid adding extra elements to the DOM,
// React provides Fragments (<> </>),
// which group multiple elements without rendering an extra node.
