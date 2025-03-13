import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  patient_id: string;
  patient_name: string;
  email_address: string;
  phone_number: string;
  birth_date: Date;
  patient_gender: Gender;
  patient_address: string;
  patient_occupation: string;
  emergency_contact: string;
  emergency_contactnumber: string;
  primary_physician: string;
  insurance_provider: string;
  insurance_policynumber: string;
  patient_allergies: string | undefined;
  current_medication: string | undefined;
  family_medhistory: string | undefined;
  past_medicalhistory: string | undefined;
  identification_type: string | undefined;
  identification_number: string | undefined;
  identification_document_id: FormData | undefined;
  privacy_consent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
