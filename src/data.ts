
export const users: UserType[] = [
    {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar: 'https://i.pravatar.cc/150?img=1',
        phone: '123-456-7890',
        website: 'https://alice.com',
    },
    {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar: 'https://i.pravatar.cc/150?img=2',
        phone: '234-567-8901',
        website: 'https://bob.com',
    },
    {
        id: '3',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        avatar: 'https://i.pravatar.cc/150?img=3',
        phone: '345-678-9012',
        website: 'https://charlie.com',
    },
    {
        id: '4',
        name: 'David Miller',
        email: 'david@example.com',
        avatar: 'https://i.pravatar.cc/150?img=4',
        phone: '456-789-0123',
        website: 'https://david.com',
    },
    {
        id: '5',
        name: 'Ella Wilson',
        email: 'ella@example.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
        phone: '567-890-1234',
        website: 'https://ella.com',
    },
    {
        id: '6',
        name: 'Franklin Harris',
        email: 'franklin@example.com',
        avatar: 'https://i.pravatar.cc/150?img=6',
        phone: '678-901-2345',
        website: 'https://franklin.com',
    },
    {
        id: '7',
        name: 'Grace Lee',
        email: 'grace@example.com',
        avatar: 'https://i.pravatar.cc/150?img=7',
        phone: '789-012-3456',
        website: 'https://grace.com',
    },
    {
        id: '8',
        name: 'Hannah Clark',
        email: 'hannah@example.com',
        avatar: 'https://i.pravatar.cc/150?img=8',
        phone: '890-123-4567',
        website: 'https://hannah.com',
    },
    {
        id: '9',
        name: 'Isaac Martinez',
        email: 'isaac@example.com',
        avatar: 'https://i.pravatar.cc/150?img=9',
        phone: '901-234-5678',
        website: 'https://isaac.com',
    },
    {
        id: '10',
        name: 'Jackie Turner',
        email: 'jackie@example.com',
        avatar: 'https://i.pravatar.cc/150?img=10',
        phone: '012-345-6789',
        website: 'https://jackie.com',
    },
];

const COLORS = [
    "#FF5733", "#33FF57", "#3357FF", "#FFC300", "#DAF7A6", "#FF33A1",
    "#900C3F", "#C70039", "#581845", "#FFB533", "#33FFEC", "#6F9FF5"
];

const generateRandomTitle = () => {
    const words = ["Aurora", "Harmony", "Eclipse", "Odyssey", "Serenade", "Cascade", "Mirage", "Mystic", "Voyage", "Radiance"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return `Album ${words[randomIndex]}`;
};
const getRandomContent = (count: number) => {
    return Array.from({ length: count }, () => COLORS[Math.floor(Math.random() * COLORS.length)]);
};

export const albums: AlbumType[] = Array.from({ length: 200 }, (_, index) => ({
    id: (index + 1).toString(),
    title: generateRandomTitle(),
    author: users[Math.floor(Math.random() * users.length)],
    content: getRandomContent(Math.floor(Math.random() * 5) + 10) 
}));