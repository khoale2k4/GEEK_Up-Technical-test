import Layout from "@/components/Layout";
import UsersView from "@/views/users";

export const metadata = {
  title: 'Users - Geek Up',
  description: 'Users list',
  icons: [
    { rel: "icon", type: "image/png", url: "/logo/geek-up_logo.png" } 
  ],
};

export default function Users() {
  return (
    <Layout>
      <UsersView/>
    </Layout>
  );
}
