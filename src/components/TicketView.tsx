

import { Card } from '@/components/ui/card';
import axios from 'axios';
import useSWR from 'swr';
interface TicketViewProps {
    ticketId: string;
    getTests: any;
    serverId: string;
    getTodo: any;
}

function TicketView({ticketId, getTests, serverId, getTodo}: TicketViewProps) {
    // console.log('test:', axios(`https://548474a3e6f8.ngrok-free.app/server/${serverId}/tests`).then((res) => console.log(res.data)));
    const { tests, isLoading, isError } = getTests(serverId);
    console.log('tests:', tests);
    const testsData = tests ? tests.data[0].tests : [];
    const todos = tests ? tests.data[0].todos : [];

    if (isLoading) {
        return <Card className='w-full h-120 mt-2 p-6 bg-accent text-center'>Loading...</Card>;
    }

    if (isError) {
        return (
            <Card className='w-full h-120 mt-2 p-6 bg-accent text-center'>Error Loading!</Card>
        );
    }

    
    return (
        <Card className='w-full h-120 mt-2 bg-accent text-center overflow-auto'>
            Todo
            {todos.map((todo) => (
                <div key={todo.name} className='flex flex-row justify-between p-2 border-b'>
                    <div>{todo.name}</div>
                    <div>{todo.status}</div>
                </div>
            ))}
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