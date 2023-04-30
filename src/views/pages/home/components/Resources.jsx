import styles from './Resources.module.scss';
import ResourceCard from './ResourcesCard';

const Resources = () => {
    return (
        <section className={styles['resources']}>

            <h2>
                GraphQL tutorials and resources
            </h2>
            <p>
                Explore our materials, at your own pace
            </p>

            <div className="flex flex-responsive gap-8">
                <ResourceCard
                    title="Courses"
                    desc="Take any of our courses, individually and at your own pace"
                    link="/courses"
                    imgUrl="https://www.apollographql.com/tutorials/static/course.29e89896.svg"
                />
                <ResourceCard
                    title="Labs"
                    desc="Get even more hands-on experience by building stuff in our labs"
                    link="/labs"
                    imgUrl="https://www.apollographql.com/tutorials/static/lab.724b083d.svg"
                />
                <ResourceCard
                    title="Side quests"
                    desc="Learn from practical examples focused on real-world applications"
                    link="/courses"
                    imgUrl="https://www.apollographql.com/tutorials/static/side-quest.43d219f4.svg"
                />
            </div>

        </section>
    )

}

export default Resources;