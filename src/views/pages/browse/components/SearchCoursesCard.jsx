import { Link } from "react-router-dom";

const SearchCoursesCard = ({ course }) => {

    const { title, description, courseUrl, imageUrl } = course;

    return (
        <article>
            <img src={imageUrl} alt={title} />
            <h3>
                {course.title}
            </h3>
            <p>
                {course.description}
            </p>
            <Link to={course.courseUrl}>
            </Link>
        </article>
    );

}

export default SearchCoursesCard;