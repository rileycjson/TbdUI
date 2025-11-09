import { Card } from '@/components/ui/card';

interface RackSmallProps {
    rackId: string;
    setRack: any;
    tickets?: any;
}


function RackSmall({rackId, setRack, tickets}: RackSmallProps) {


    function Server(serverId: string) {
        if (!tickets) return 'flex-none w-full h-full bg-background';
        const numTickets = tickets.data[serverId];
        if (numTickets === 1) return 'flex-none w-full h-full bg-caution';
        if (numTickets === 2) return 'flex-none w-full h-full bg-warning';
        if (numTickets >= 3) return 'flex-none w-full h-full bg-destructive';
        return 'flex-none w-full h-full bg-good';
    }
    
    return (
        <Card className='w-15 h-15 rounded p-2 grid grid-cols-2 gap-1 bg-accent'
            onClick={() => {setRack(rackId)}}>
            <div className={Server(rackId + '1')} />
            <div className={Server(rackId + '2')} />
            <div className={Server(rackId + '3')} />
            <div className={Server(rackId + '4')} />
            <div className={Server(rackId + '5')} />
            <div className={Server(rackId + '6')} />
        </Card>
    );
}

export default RackSmall;