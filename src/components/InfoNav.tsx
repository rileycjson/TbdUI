import { Card } from '@/components/ui/card';

interface InfoNavProps {
    serverId: string;
    getTickets: any;
    setTicket: any;
}

function InfoNav({serverId, getTickets, setTicket}: InfoNavProps) {

    const { tickets, isLoading, isError } = getTickets(serverId);


    if (isLoading) {
        return <Card className='w-fit p-6 bg-accent'>Loading tickets...</Card>;
    }
    if (isError) {
        return (
            <Card className='w-fit p-6 bg-accent'>Error loading tickets</Card>
        );
    }

    return (
        <div className='flex flex-row gap-2 p-2'>
            <Card className='w-fit p-6 bg-accent'
            onClick={() => {setTicket(null) }}>
                Server Info
            </Card>
            {tickets.data.tickets.map((t: any) => (
                <Card className='w-fit p-6 bg-accent' 
                onClick={() => {setTicket(t['jira_id']) }}
                key={t['id']}>
                    Open: {t['jira_id']}
                </Card>
            ))}
        </div>
    );
}

export default InfoNav;
