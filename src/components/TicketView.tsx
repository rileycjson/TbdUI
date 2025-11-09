import { Card } from '@/components/ui/card';
interface TicketViewProps {
    ticketId: string;
}

function TicketView({ticketId}: TicketViewProps) {
    return (
        <Card className='w-full h-full p-6 bg-accent'>
            Ticket View for {ticketId}
        </Card>
    );
}  

export default TicketView;