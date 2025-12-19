import Header from './Header'
function User(){

    const name="tushar"
    return <>
        <h1><Header name={name}/></h1>
        <h1><Header /></h1>
    </>
}

export default User