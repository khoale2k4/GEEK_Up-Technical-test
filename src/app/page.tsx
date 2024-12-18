import { redirect } from "next/navigation";

export default function Page() {
  if(!baseUrl) return null;
  redirect("/albums");
}