import FilterResults from "./components/FilterResults";
import SearchCourses from "./components/SearchCourses";

const Browse = () => {

    return (
        <main>
            <section>
                <div className="container">
                    <h1>GraphQL tutorials and resources</h1>
                    <p>Search, filter, and browse our catalog of GraphQL tutorials</p>
                </div>
            </section>

            <section>
                <div className="container flex">
                    <FilterResults />
                    <SearchCourses />
                </div>
            </section>

        </main>
    )
}
export default Browse;