import { Box, Container } from "@mui/material";
import { SectionIdEnum } from "../../types";

export type SectionIdEnumType =
  (typeof SectionIdEnum)[keyof typeof SectionIdEnum];

export type SectionContainerProps = {
  children: React.ReactNode;
  sectionId: SectionIdEnumType;
};

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  sectionId,
}) => {
  return (
    <div id={sectionId} key={sectionId}>
      <Container>
        <Box minHeight="100vh">{children}</Box>
      </Container>
    </div>
  );
};
