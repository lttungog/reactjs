function Student ({id, name, image, email}) {
    return (
        <div className='card'>
            <div>
                <div>
                    <img className="user-profile-pic" src={image} alt={name}/>
                    <h2 className="user-name">{name}</h2>
                    <h3>Student ID: {id}</h3>
                    <h3>Email: {email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Student;