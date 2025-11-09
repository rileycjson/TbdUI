import { Card } from '@/components/ui/card';
interface TicketViewProps {
    serverId: string;
}

function ServerInfoView({ serverId }: TicketViewProps) {
    return (
        <Card className='w-full h-full p-6 bg-accent'>
            Server Info for {serverId}
        </Card>
    );
}

export default ServerInfoView;
