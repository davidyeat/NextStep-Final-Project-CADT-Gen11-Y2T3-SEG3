import EntityCreateForm from "../../components/admin/EntityCreateForm";
import { createScholarship } from "../../services/scholarshipService";

const fields = [
  { name: "title", label: "Scholarship title", required: true },
  { name: "fundingId", label: "Funding type ID", type: "number", required: true, min: "1", hint: "Use the ID of an existing funding type." },
  { name: "providerId", label: "Provider ID", type: "number", required: true, min: "1", hint: "Use the ID of an existing provider." },
  { name: "studyIn", label: "Study in", required: true, placeholder: "Cambodia" },
  { name: "degreeLevel", label: "Degree level", type: "select", required: true, options: ["Associate", "Bachelor", "Master", "PhD"] },
  { name: "status", label: "Status", type: "select", required: true, defaultValue: "Open", options: ["Open", "Closed", "Upcoming"] },
  { name: "minAmount", label: "Minimum amount", type: "number", min: "0", step: "0.01" },
  { name: "maxAmount", label: "Maximum amount", type: "number", min: "0", step: "0.01" },
  { name: "currency", label: "Currency", defaultValue: "USD", placeholder: "USD" },
  { name: "availableSlots", label: "Available slots", type: "number", min: "0" },
  { name: "applicationDeadline", label: "Application deadline", type: "date" },
  { name: "applicationLink", label: "Application link", type: "url" },
  { name: "description", label: "Description", type: "textarea", fullWidth: true },
  { name: "benefits", label: "Benefits", type: "list", fullWidth: true, hint: "Enter one benefit per line." },
  { name: "majorOffered", label: "Eligible majors", type: "list", fullWidth: true, hint: "Enter one major per line." },
  { name: "applicationProcess", label: "Application process", type: "list", fullWidth: true, hint: "Enter each step on a separate line." },
  { name: "documentRequirements", label: "Document requirements", type: "list", fullWidth: true, hint: "Enter one document per line." },
  { name: "eligibilityCriteria", label: "Eligibility criteria", type: "list", fullWidth: true, hint: "Enter one criterion per line." },
];

const lines = (value) => value.split("\n").map((item) => item.trim()).filter(Boolean);
const numericFields = ["fundingId", "providerId", "minAmount", "maxAmount", "availableSlots"];

export default function CreateScholarship() {
  return <EntityCreateForm title="Add Scholarship" description="Publish a scholarship opportunity with requirements and application details." fields={fields} cancelTo="/admin/scholarships" submitLabel="Create scholarship" onSubmit={(values) => {
    const payload = { ...values };
    numericFields.forEach((key) => { payload[key] = values[key] === "" ? undefined : Number(values[key]); });
    ["benefits", "majorOffered", "applicationProcess", "documentRequirements", "eligibilityCriteria"].forEach((key) => { payload[key] = lines(values[key]); });
    return createScholarship(payload);
  }} />;
}
