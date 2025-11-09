import { Card } from '@/components/ui/card';
interface TicketViewProps {
    serverId: string;
}

function ServerInfoView({ serverId }: TicketViewProps) {
    return (
        <Card className='w-full h-120 mt-2 bg-accent text-center'>
            Server Info for {serverId}
        </Card>
    );
}

export default ServerInfoView;
