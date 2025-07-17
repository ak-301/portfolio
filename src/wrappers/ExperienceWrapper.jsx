"use client";

import { Accordion, Box, Heading, Span, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  BiArrowFromLeft,
  BiRightArrow,
  BiRightArrowCircle,
} from "react-icons/bi";
import { BsArrow90DegDown } from "react-icons/bs";

const ExperienceWrapper = () => {
  const [value, setValue] = useState(["first-item"]);
  return (
    <Box p={{ base: 8, lg: 20 }}>
      <Stack gap="4">
        <Heading fontSize={{ base: 30, lg: 40 }}>Experience</Heading>
        <Accordion.Root
          value={value}
          onValueChange={(e) => setValue(e.value)}
          mt={10}
          display={"flex"}
          flexDir={"column"}
          gap={5}
        >
          {items.map((item, index) => (
            <Accordion.Item
              key={index}
              value={item.value}
              border={"2px solid gold"}
              borderRadius={20}
              p={3}
            >
              <Accordion.ItemTrigger>
                <Span
                  flex="1"
                  bgColor={"beige"}
                  p={2}
                  borderRadius={10}
                  color={"black"}
                  fontWeight={"semibold"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  fontSize={{ base: 10, lg: 14 }}
                >
                  <Text
                    width={{ base: "60%", lg: "50%" }}
                    lineHeight={{ base: 1.3, lg: 1.5 }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    textAlign={"right"}
                    width={{ base: "30%", lg: "50%" }}
                    lineHeight={{ base: 1.3, lg: 1.5 }}
                  >
                    {item.date}
                  </Text>
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  {item.text.map((desc, idx) => (
                    <Box display={"flex"} alignItems={"flex-start"} gap={3}>
                      <BiRightArrowCircle />{" "}
                      <Text fontSize={{ base: 10, lg: 12 }}>{desc}</Text>
                    </Box>
                  ))}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </Box>
  );
};

const items = [
  {
    value: "first-item",
    title: "Teaching Assistant",
    date: "Dec 2024 - July 2025",
    text: [
      "Delivered foundational and advanced concepts in Computer Science, including Python programming, data structures, SQL, and web development",
      "Emphasized hands-on learning, encouraging students to build projects, debug real code, and apply concepts practically.",
      "Guided students through problem-solving approaches, preparing them for technical interviews and project-based assessments.",
      "Introduced learners to modern technologies such as machine learning, cloud computing, and version control (Git).",
      "Mentored students on building a solid tech portfolio, resume improvement, and choosing the right career paths in tech.",
    ],
  },
  {
    value: "second-item",
    date: "Jul 2023 - Nov 2024",
    title: "Trainee Engineer - NTT DATA Pvt. Ltd., Mumbai",
    text: [
      "Developed and optimized Python scripts to automate data processing and reporting workflows, significantly reducing manual effort and improving efficiency.",

      "Performed regular SAP system health checks using SQL queries and interactive dashboards, ensuring peak performance of enterprise applications.",

      "Designed internal tools for log analysis and system metric summarization, enabling proactive monitoring and quicker issue resolution.",

      "Collaborated with cross-functional teams to deliver data-driven improvements for enterprise clients, including Nuvama Wealth Management, leveraging tools like MS SQL Server, SAP ECC, SAP EP, and SAP DMS.",
    ],
  },
  {
    value: "third-item",
    title:
      "AWS Cloud Intern — All India Council for Technical Education (Remote)",
    date: "Oct 2021 - Dec 2021",
    text: [
      "Gained hands-on experience with cloud computing fundamentals and core AWS services, including EC2, S3, Lambda, and IAM.",

      "Built and deployed sample applications on the AWS platform, understanding real-world use cases in cloud infrastructure and scalability.",

      "Utilized access to AWS tools, labs, and professional guidance provided through the AICTE internship framework to strengthen cloud proficiency.",

      "Engaged with a community of learners and mentors to explore best practices in cloud deployment, security, and cost optimization.",
    ],
  },
  {
    value: "fourth-item",
    title:
      "Core Python Intern — Dezignolics Web and Software Solutions (Remote)",
    date: "May 2021 - Oct 2021",
    text: [
      "Gained strong foundational knowledge in Python programming, covering syntax, data structures, functions, and advanced concepts like OOP, file handling, and database integration.",
      "Explored Python-based web development frameworks and GUI libraries for practical application building.",
      "Designed and developed a Contact Manager desktop application using Tkinter, capable of storing and retrieving over 10,000+ entries, demonstrating scalable GUI development and database operations.",
      "Strengthened problem-solving skills through real-world project implementation and hands-on coding assignments.",
    ],
  },
];

export default ExperienceWrapper;
