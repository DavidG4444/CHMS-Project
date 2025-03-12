import PatientForm from "@/components/forms/patient-form";
import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">

      {/* OTP Verification*/}
      
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">


       <PatientForm />

         <div className="text-14-regular mt-20 flex justify-between">
          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2025 Kangi Community HMS
          </p>
          <Link href="/?admin=true" className="text-green-500">
          Admin
          </Link>
         </div>
        </div>
      </section>
      <Image
       src="assets/images/onboarding-img.png"
       height={1000}
       width={1000}
       alt="patient"
       className="side-img max-w-[50%]"
       />

    </div>
  );
}
