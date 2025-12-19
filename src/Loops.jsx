function Loops(){

        const college=[
        {
            name:"BMU",
            website:"bmu.com",
            city:"Gurgaon",
            student:[{
                namee:"Tushar",
                age:"20"
            },
        {
            namee:"Random",
            age:"19"
        },
        {namee:"nana",
                age:"88"
            }]
        },
        {
            name:"IIT",
            website:"iit.com",
            city:"Delhi",
            student:[{
                namee:"raju",
                age:"20"
            },
        {
            namee:"hehe",
            age:"19"
        },
        {namee:"yoo",
                age:"16"
            }]
        }

    ]
    return <>
                <hr/>
    {
    college.map((item,index)=>(
        <div key={index}>
            <h3>name: {item.name}</h3>
            <h3>city: {item.city}</h3>
            {
                item.student.map((itemm,index)=>(
                    <div key={index}>
                        <h4>student name:{itemm.namee}</h4>
                        <h4>student age:{itemm.age}</h4>

                        </div>
                ))
                
            }
            <hr/>
            <h4>{item.student.namee}</h4>
        </div>
    ))
}
    </>
}

export default Loops