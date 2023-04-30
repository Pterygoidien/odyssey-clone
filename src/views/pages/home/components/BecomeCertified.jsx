import { Link } from "react-router-dom";
import Section from "../../../../components/layout/wrappers/Section";
import styles from "./BecomeCertified.module.scss";

const BecomeCertified = () => {

    return (

        <Section>
            <h2>
                Become a certified Apollo Graph Developer
            </h2>
            <p>
                Let's find the path that works for you right now. Where are you in your certification journey?

            </p>

            <div className={styles['certificates']}>
                <div className={styles['card']}>
                    <p>Level 1</p>
                    <h3>
                        I'm new!
                    </h3>
                    <p>
                        Get started with GraphQL and Apollo and earn the Apollo Graph Associate certification.
                    </p>
                    <Link to="/certification/associate">
                        View certification details !
                    </Link>
                </div>
                <div className={styles['card']}>
                    <p>Level 2</p>
                    <h3>
                        I know the basics
                    </h3>
                    <p>
                        Dive into Apollo Federation and earn the Apollo Graph professional certification !
                    </p>
                    <Link to="/certification/professional">
                        View certification details !
                    </Link>
                </div>
            </div>

        </Section >
    )
}

export default BecomeCertified;;