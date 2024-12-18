import Layout from "@/components/Layout";
import AlbumIdView from "@/views/albumById";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
    const resolvedParams = await params; 
    const albumTitle = `Album #${resolvedParams.id} - Geek Up`;

    return {
        title: albumTitle,
        description: `Detail ID: ${resolvedParams.id}`,
        icons: [
          { rel: "icon", type: "image/png", url: "/logo/geek-up_logo.png" } 
        ],
    };
}

export default async function Albums({ params }: { params: Params }) {
    const resolvedParams = await params;
    return (
        <Layout>
            {resolvedParams.id && <AlbumIdView albumId={resolvedParams.id} />}
        </Layout>
    );
}
