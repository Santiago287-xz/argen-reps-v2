import { Button, Timeline } from "keep-react";
import { ArrowRight } from "phosphor-react";
import CategoryLayout from "../layouts/categoryLayout";

export default function CrearCuenta() {
  return (
    <CategoryLayout>
      <h1>Que es CssBuy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        asperiores non quasi aliquam debitis. Officiis itaque eius facere,
        animi, velit non, delectus adipisci dignissimos vero ex vel numquam
        libero quo?
      </p>
      <Timeline className="text-white">
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>August 2023</Timeline.Time>
            <Timeline.Title>Mobile App Development</Timeline.Title>
            <Timeline.Body>
              Launching our new mobile app on both iOS and Android platforms,
              providing users with seamless access to our services on the go.
            </Timeline.Body>
            <Button type="primary" size="sm">
              Discover App Features
              <ArrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>July 2023</Timeline.Time>
            <Timeline.Title>Enhanced User Analytics</Timeline.Title>
            <Timeline.Body>
              Introducing advanced user analytics to gain deeper insights into
              user behavior and improve overall user experience.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>June 2023</Timeline.Time>
            <Timeline.Title>New Feature Rollout</Timeline.Title>
            <Timeline.Body>
              Rolling out a set of new features, including real-time chat
              support, enhanced search functionality, and personalized content
              recommendations.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </CategoryLayout>
  );
}
