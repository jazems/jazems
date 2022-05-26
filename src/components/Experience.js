import { Box, Text, Divider, Spacer, HStack } from "@chakra-ui/react";

const OneExperience = ({ titleSize, company, title, description, date }) => {
  return (
    <Box>
      <HStack>
        <Text fontSize={titleSize} fontWeight="bold">
          {company}
        </Text>
        <Spacer />
        <Text>{date}</Text>
      </HStack>
      <Text as="i">{title}</Text>
      <Divider />
      <Box py="0.75em" />
      {description.map((line) => (
        <Text>{line}</Text>
      ))}
    </Box>
  );
};

const Experience = () => {
  const titleSize = "1.4em";
  return (
    <Box>
      <OneExperience
        titleSize={titleSize}
        company="Anaplan"
        title="Software Engineer Intern"
        date="June 2022 - Aug 2022"
        description={[
          "‣ Platform Engineering Team",
          "‣ Check back in a couple months to see what I've been working on!",
          "",
        ]}
      />
      <Box py="2.5em" />
      <OneExperience
        titleSize={titleSize}
        company="AllPeople"
        title="Product Management Intern"
        date="Aug 2021 - Dec 2021"
        description={[
          "‣ Wrote HTML & CSS to convert design mockups to consumer-facing web pages as AllPeople’s first PM intern",
          "‣ Performed competitive analysis of relevant e-commerce websites in order to inform policy and copy writing",
          "‣ Coordinated with and review progress of relevant stakeholders in order to prepare website for official launch",
        ]}
      />
      <Box py="2.5em" />
      <OneExperience
        titleSize={titleSize}
        company="Mentor Global Consultants"
        title="Blockchain Research & Business Analyst Intern"
        date="Feb 2021 - Aug 2021"
        description={[
          "‣ Wrote a 20 page paper on developing smart contracts on top ledgers, their business use cases, and its impact on technology players in the Fintech space",
          "‣ Performed competitive landscape analysis and ideated a business model for an internship DAO on NEAR protocol",
          "‣ Researched tech solutions for Blockchain-related clients to develop and present sound recommendations",
        ]}
      />
    </Box>
  );
};

export default Experience;
