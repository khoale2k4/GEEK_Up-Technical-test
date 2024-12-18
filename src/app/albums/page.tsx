import Layout from "@/components/Layout";
import AlbumsView from "@/views/albums";

export const metadata = {
  title: 'Albums - Geek Up',
  description: 'albums list',
  icons: [
    { rel: "icon", type: "image/png", url: "/logo/geek-up_logo.png" } 
  ],
};

export default function Albums() {
  return (
    <Layout>
      <AlbumsView/>
    </Layout>
  );
}
