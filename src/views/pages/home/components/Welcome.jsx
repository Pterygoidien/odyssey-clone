import Section from "../../../../components/layout/wrappers/Section";
import WelcomeLogo from "../../../../assets/svg/intro_illu.8ddb2607.svg"


const Welcome = () => {

    return (

        <Section
            flex={true}>
            <div>
                <h2>Welcome to Apollo Odyssey</h2>
                <img src={WelcomeLogo} alt="Welcome Logo" />

            </div>
            <div>
                <p>

                    Odyssey is Apollo's official learning platform that offers free hands-on GraphQL tutorials. It's the perfect place to start your GraphQL journey. Odyssey courses are collections of short and snappy lessons you can complete on your own schedule. Each lesson comes with a video and its written counterpart. Additionally, our GraphQL tutorials are enriched with code challenges, tasks, and quick quizzes to make the experience interactive and reinforce your knowledge.
                </p>
                <p>
                    Each GraphQL tutorial comes with a real-life application that you'll be building along with the instructor, step by step. You'll also get many opportunities to practice with in-lesson code challenges to keep things concrete and hands-on. When you pass a challenge, you get wonderful colorful digital confetti celebrating your success 🎉! If something's not quite right, read the failed tests to help guide you toward the correct solution.
                </p>
                <p>
                    If you ever need extra guidance or want to talk about what you just learned, join the Apollo community forums! Our team and community members will be happy to help. And in case you're looking for more targeted information on one of our Apollo libraries, you can always check out our documentation.
                </p>
            </div>
        </Section>
    )
}

export default Welcome;
