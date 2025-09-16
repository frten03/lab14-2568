import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  password: string;
  confirmPassword: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  total: number;
  haveCoupon: boolean;
  couponCode: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setCoupon: (v: boolean) => void;
  setCouponCode: (v: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  discountCupon: () => void;
  reset: () => void;
}
export type { MarathonFormState }