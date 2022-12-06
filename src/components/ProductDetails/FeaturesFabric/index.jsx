import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const FeaturesFabric = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState("");

  return (
    <>
      <Accordion
        onChange={() => setExpanded(!expanded)}
        sx={{
          borderTop: "1px solid #8888",
          boxShadow: "none !important",
          borderRadius: "0 !important",
        }}
      >
        <AccordionSummary
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Feature
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="#666666">
            Gently curved waistbandLong self fabric waist beltSeamless side
            profileBack welt pocket with button
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        onChange={() => setExpanded2(!expanded2)}
        sx={{
          borderTop: "1px solid #8888",
          boxShadow: "none !important",
          borderRadius: "0 !important",
        }}
      >
        <AccordionSummary
          expandIcon={expanded2 ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: "33%", flexShrink: 0 }}>
            Fabric Care
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "700 !important" }}
          >
            Fabric Notes
          </Typography>
          <Typography color="#666666">
            Hand block printed with azo-free dyes. 90% Cotton 10% linen.
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontWeight: "700 !important" }}
          >
            Care Instructions
          </Typography>
          <Typography color="#666666">
            Keep this garment separate in the first few washes to prevent colour
            runs. When washed garment runs clear, you can throw it into the
            machine with other like-coloured clothing. Always use delicate
            machine wash with cold water, or hand wash cold for best results. Do
            not tumble dry. Line dry inside out. Iron inside out using a
            low-temperature setting.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FeaturesFabric;
