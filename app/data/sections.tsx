import Siebdruck from "../components/Sections/Siebdruck";
import Workshops from "../components/Sections/Workshops";
import Events from "../components/Sections/Events";
import LivePrinting from "../components/Sections/LivePrinting";
import OffeneWerkstatt from "../components/Sections/OffeneWerkstatt";
import Kontakt from "../components/Sections/Kontakt";
import UeberUns from "../components/Sections/UeberUns";
import Faq from "../components/Sections/Faq";

export const SECTIONS = [
  { id: "siebdruck", label: "SIEBDRUCK", component: <Siebdruck /> },
  { id: "workshops", label: "WORKSHOPS", component: <Workshops /> },
  { id: "events", label: "EVENTS", component: <Events /> },
  { id: "live-printing", label: "LIVE PRINTING", component: <LivePrinting /> },
  { id: "offene-werkstatt", label: "OFFENE WERKSTATT", component: <OffeneWerkstatt /> },
  { id: "kontakt", label: "KONTAKT", component: <Kontakt /> },
  { id: "ueber-uns", label: "ÜBER UNS", component: <UeberUns /> },
  { id: "faq", label: "FAQ", component: <Faq/> },
];
