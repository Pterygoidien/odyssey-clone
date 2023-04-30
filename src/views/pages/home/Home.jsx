import Section from "../../../components/layout/wrappers/Section";
import BecomeCertified from "./components/BecomeCertified";
import Resources from "./components/Resources";
import ShowCase from "./components/Showcase";
import Welcome from "./components/Welcome";

const Home = () => {
    return (
        <main>
            <ShowCase />
            <Welcome />
            <Resources />
            <BecomeCertified />
            <Section>
                <h2>Featured Picks</h2>
            </Section>
            <Section>
                <h2>Recently updated</h2>
            </Section>
        </main>
    )
}
export default Home;