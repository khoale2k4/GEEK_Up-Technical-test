import { redirect } from "next/navigation";
import Layout from "./layout";
import { baseUrl } from "@/utils/constrant";

export default function Page() {
  if (!baseUrl) return (
    <Layout>
      <h1>No base url</h1>
    </Layout>);
  redirect("/albums");
}