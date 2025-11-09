import { Card } from '@/components/ui/card';

interface RackLargeProps {
    rackId: string;
    setRack: any;
    setServer: any;
    tickets: any;
}

function RackLarge({rackId, setRack, setServer, tickets}: RackLargeProps) {
        function Server(serverId: string) {
        if (!tickets) return 'flex-none justify-center align-center w-60 h-20 bg-background';
        const numTickets = tickets.data[serverId];
        if (numTickets === 1) return 'flex-none flex justify-center items-center w-60 h-20 bg-caution';
        if (numTickets === 2) return 'flex-none flex justify-center items-center w-60 h-20 bg-warning';
        if (numTickets >= 3) return 'flex-none flex justify-center items-center w-60 h-20 bg-destructive';
        return 'flex-none flex justify-center items-center w-60 h-20 bg-good';
    }

    return (
        <div
            className='flex justify-around'
            onClick={() => {
                setServer(null);
                setRack(null);
            }}
        >
            <Card
                className='w-fit h-fit p-6 flex flex-col gap-4 items-center'
                onClick={(e) => {
                    setServer(null);
                    e.stopPropagation();
                }}
            >
                {Array.from({ length: 6 }, (_, i) => (
                    <div className='flex flex-row items-center gap-5' key={i}>
                        <div
                            className={Server(rackId + (i + 1))}
                            onClick={(e) => {
                                setServer(rackId + (i + 1));
                                e.stopPropagation();
                            }}
                        >
                            <h4 className='font-bold text-lg text-background'>{rackId + (i + 1)}</h4>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
}

export default RackLarge;
