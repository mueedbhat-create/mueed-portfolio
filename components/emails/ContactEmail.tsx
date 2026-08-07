import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  message: string;
};

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Body style={{ fontFamily: "Inter, sans-serif", background: "#f4f4f4", padding: 32 }}>
        <Container style={{ maxWidth: 560, background: "#fff", padding: 32, borderRadius: 12 }}>
          <Heading style={{ fontSize: 22 }}>New Portfolio Message</Heading>
          <Hr />
          <Section>
            <Text>
              <strong>From:</strong> {name} ({email})
            </Text>
          </Section>
          <Section>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}