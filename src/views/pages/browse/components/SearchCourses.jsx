import SearchCoursesCard from "./SearchCoursesCard";


const courses = [
    {
        id: 1,
        title: "Lift-off I: Basics",
        version: 2,
        description: "Get started with Apollo",
        courseUrl: "/courses/1",
        imageUrl: "https://res.cloudinary.com/dety84pbu/image/upload/v1608467782/lift_off/LO_course_thumb_g1zqsw.svg"
    },
    {
        id: 2,
        title: "Lift-off II: Resolvers",
        version: 2,
        description: "Live data, resolvers, and data sources",
        courseUrl: "/courses/2",
        imageUrl: "https://res.cloudinary.com/dety84pbu/image/upload/v1609841894/lift_off/course_thumb_2_mvcxsz.svg"
    },
    {
        id: 3,
        title: "Lift-off III: Arguments",
        version: 2,
        description: "Getting specific with GraphQL query arguments",
        courseUrl: "/courses/3",
        imageUrl: "https://res.cloudinary.com/apollographql/image/upload/v1617361764/odyssey/course_thumb_lem_gtobk2.svg"
    },
    {
        id: 4,
        title: "Lift-off IV: Mutations",
        version: 2,
        description: "Update data with GraphQL mutations",
        courseUrl: "/courses/4",
        imageUrl: "https://res.cloudinary.com/apollographql/image/upload/v1623847688/odyssey/lunar_rover_simple_krpgb3.svg"
    }
]


const SearchCourses = () => {
    return (
        <div className="search-courses">
            <div className="flex">
                {courses.map(course => (
                    <SearchCoursesCard key={course.id} course={course} />
                ))}


            </div>
        </div>
    )
}
export default SearchCourses;