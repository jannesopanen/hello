function Employee(props){
    return (
        <>
            <h3>Employee Name:      {props.name}</h3>
            {/* <h3>{props.role ? props.role : 'No role assigned.'}</h3> */}

            {props.role ? (
                    <p class="role">{props.role}</p> 
                ) : (
                    <p class="norole">No role assigned.</p>
                )}

        </>
    )   
}

export default Employee;