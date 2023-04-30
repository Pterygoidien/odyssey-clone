import Button from '../../../../components/button/Button';
import Section from '../../../../components/layout/wrappers/Section';
import ShowcaseRocket from './ShowcaseRocket';

import styles from './Showcase.module.scss';

const ShowCase = () => {
    return (
        <section className={styles['showcase']}>
            <div className="container-xl flex flex-col gap-5">


                <div className={`${styles['showcase__rocketLogo']} mx-auto`}>
                    <ShowcaseRocket className={styles['rocketLogo-svg']} />
                </div>
                <h1>
                    GraphQL Tutorials
                </h1>
                <h2>
                    Boost your developer skills with our hands-on GraphQL tutorials and trainings
                </h2>
                <div className="mx-auto flex">
                    <Button>
                        Browse tutorials
                    </Button>

                    <Button className="bg--inherit text--black">
                        Explore certifications
                    </Button>
                </div>
            </div>


        </section>


    )
}

export default ShowCase;