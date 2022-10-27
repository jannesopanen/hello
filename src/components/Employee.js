function Employee(props){
    return (
        <>
            <p class="employee">Employee Name:      {props.name}</p>
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