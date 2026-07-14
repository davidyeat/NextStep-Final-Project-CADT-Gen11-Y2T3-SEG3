import EntityCreateForm from "../../components/admin/EntityCreateForm";
import { createMajor } from "../../services/majorService";

const fields = [
  { name: "academicUnitId", label: "Academic unit ID", type: "number", required: true, min: "1", hint: "Use the ID of the academic unit that owns this major." },
  { name: "name", label: "Major name", required: true, placeholder: "Chinese" },
  { name: "degreeLevel", label: "Degree level", type: "select", required: true, options: ["Associate", "Bachelor", "Master", "PhD"] },
  { name: "tuitionFee", label: "Annual tuition fee", type: "number", min: "0", step: "0.01" },
  { name: "description", label: "Description", type: "textarea", fullWidth: true },
];

export default function CreateMajor() {
  return <EntityCreateForm title="Add Major" description="Create an academic program under an existing academic unit." fields={fields} cancelTo="/admin/majors" submitLabel="Create major" onSubmit={(values) => createMajor({ ...values, academicUnitId: Number(values.academicUnitId), tuitionFee: values.tuitionFee === "" ? undefined : Number(values.tuitionFee) })} />;
}
