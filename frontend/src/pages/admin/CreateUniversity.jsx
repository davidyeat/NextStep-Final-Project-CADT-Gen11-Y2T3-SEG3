import EntityCreateForm from "../../components/admin/EntityCreateForm";
import { createUniversity } from "../../services/universityService";

const fields = [
  { name: "campusName", label: "Campus name", required: true, placeholder: "Cambodia Academy of Digital Technology" },
  { name: "shortName", label: "Short name", placeholder: "CADT" },
  { name: "type", label: "Institution type", type: "select", options: ["Public", "Private", "International"] },
  { name: "websiteUrl", label: "Website URL", type: "url", placeholder: "https://example.edu.kh" },
  { name: "logoUrl", label: "Logo URL", type: "url" },
  { name: "coverImageUrl", label: "Cover image URL", type: "url" },
  { name: "province", label: "Province" },
  { name: "city", label: "City" },
  { name: "email", label: "Email", type: "email" },
  { name: "phoneNumber", label: "Phone number", type: "tel" },
  { name: "minTuition", label: "Minimum annual tuition", type: "number", min: "0", step: "0.01" },
  { name: "maxTuition", label: "Maximum annual tuition", type: "number", min: "0", step: "0.01" },
  { name: "address", label: "Address", type: "textarea", fullWidth: true },
  { name: "description", label: "Description", type: "textarea", fullWidth: true },
  { name: "vision", label: "Vision", type: "list", fullWidth: true, hint: "Enter one statement per line." },
  { name: "mission", label: "Mission", type: "list", fullWidth: true, hint: "Enter one statement per line." },
];

const lines = (value) => value.split("\n").map((item) => item.trim()).filter(Boolean);
const numberOrUndefined = (value) => (value === "" ? undefined : Number(value));

export default function CreateUniversity() {
  return <EntityCreateForm title="Add University" description="Create a university profile for the directory." fields={fields} cancelTo="/admin/universities" submitLabel="Create university" onSubmit={(values) => createUniversity({ ...values, minTuition: numberOrUndefined(values.minTuition), maxTuition: numberOrUndefined(values.maxTuition), vision: lines(values.vision), mission: lines(values.mission) })} />;
}
