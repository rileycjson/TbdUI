import { Card } from '@/components/ui/card';
interface TicketViewProps {
    ticketId: string;
}

function TicketView({ticketId}: TicketViewProps) {
    return (
        <Card className='w-full h-120 mt-2 bg-accent text-center'>
            Ticket View for {ticketId}
            <div className='relative'></div>
            <elevenlabs-convai agent-id='agent_1601k9mknxaaff3vpjn7z7g1tfcg'></elevenlabs-convai>
            <script
                src='https://unpkg.com/@elevenlabs/convai-widget-embed'
                async
                type='text/javascript'
            ></script>
        </Card>
    );
}  

export default TicketView;