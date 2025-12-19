import style from './UserProfile.module.css'
function UserProfile(){
    return <>
    <h1 className={style.heading}>This is style from UserProfile...</h1>
    </>
}

export default UserProfile

//this is how we use css module 
//it is different from external coz only for this component we can use that
//and other components having same classname will not be bothered
//for ex: if both have {heading} as the className then both will be changed
//even though we haven't imported the css there..
//so to prevent that we use this (css module)