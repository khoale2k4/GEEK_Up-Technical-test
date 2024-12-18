import Layout from "@/components/Layout";
import UserIdView from "@/views/userById";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const resolvedParams = await params; 
    const userTitle = `User #${resolvedParams.id} - Geek Up`;

    return {
        title: userTitle,
        description: `Detail ID: ${resolvedParams.id}`,
        icons: [
          { rel: "icon", type: "image/png", url: "/logo/geek-up_logo.png" } 
        ],
    };
}

export default async function Users({ params }: { params: Params }) {
    const resolvedParams = await params; 
    return (
        <Layout>
            <UserIdView userId={resolvedParams.id} />
        </Layout>
    );
}
