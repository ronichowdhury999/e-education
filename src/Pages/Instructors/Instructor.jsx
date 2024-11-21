

const Instructor = ({instructor}) => {
    const {name,skillPosition,image,email,courseCredit} = instructor
    const handleClick = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <div onClick={handleClick} className="card bg-base-100 shadow-xl border p-8 cursor-pointer hover:bg-base-300">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="user profile"
                        className="w-40 rounded-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{skillPosition}</p>
                    <div className="flex items-center gap-2">
                        <img src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/icon-01.svg" alt="" />
                        <span>{courseCredit} Courses</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/icon-19.svg" alt="" />
                        <span>{email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructor