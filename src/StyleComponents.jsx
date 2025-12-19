import styled from "styled-components"

function StyleComponents(){

    // const Heading=styled.h1`
    // color:red;
    // background-color:white;
    // border: 5px solid white;
    // border-radius: 2px;
    // `

    //this was like css

    const Heading=styled.h1({
    color:'black',
    backgroundColor:"grey",
    border: "1px solid white",
    borderRadius: "2px",
    fontSize:"20px"
    })

    //this is like object
    
    return <>
    <Heading>Hello from styled components..</Heading>
    <Heading>Hello from styled components2..</Heading>
    <Heading>Hello from styled components3..</Heading>
    <Heading>Hello from styled components4..</Heading>
    <Heading>Hello from styled components5..</Heading>
    </>
}

export default StyleComponents