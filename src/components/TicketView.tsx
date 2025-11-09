

import { Card } from '@/components/ui/card';
import axios from 'axios';
import useSWR from 'swr';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useEffect, useRef } from 'react';

interface TicketViewProps {
    ticketId: string;
    getTests: any;
    serverId: string;
    getTodo: any;
}

const TodoItem = ({ todo, test }: { todo: any; test?: any }) => {
    // wide card component with name and description and a greyed text bar that shows the most recent stream message
    const {data: stream} = useSWR(
        `https://548474a3e6f8.ngrok-free.app/tests/${todo.test_id}/streams`,
        axios, {
            refreshInterval: 250,
        }
    );

    const data = stream?.data || [];
    const lastEntry = data[data.length - 1];
    const rawMessage = lastEntry?.message;

    // If the message is a string, split on the final "\n\n" and take the right-hand side.
    // Otherwise, fallback to JSON.stringify so objects render sensibly.
    let displayMessage: string | null = null;
    if (typeof rawMessage === 'string') {
        const idx = rawMessage.lastIndexOf('\n\n');
        displayMessage = idx !== -1 ? rawMessage.slice(idx + 2) : rawMessage;
    } else if (rawMessage != null) {
        try {
            displayMessage = JSON.stringify(rawMessage);
        } catch (e) {
            displayMessage = String(rawMessage);
        }
    }
    return (
        <Card className='w-full p-4 mb-4'>
            <h3 className='text-lg font-medium mb-2'>{todo.name} - {todo.status}</h3>
            {test && (
                <p className='text-sm text-gray-600 mb-1'>Related test: {test.name || test.id}</p>
            )}
            <p className='text-sm text-gray-500 mb-2'>{todo.description}</p>
            <div className='text-blue-200 p-2 rounded'>
                <p className='text-xs text-gray-400'>
                    {displayMessage ?? 'No stream data yet.'}
                </p>
            </div>
        </Card>
    );
};

function TicketView({ticketId, getTests, serverId, getTodo}: TicketViewProps) {
    // console.log('test:', axios(`https://548474a3e6f8.ngrok-free.app/server/${serverId}/tests`).then((res) => console.log(res.data)));
    const { tests, isLoading, isError } = getTests(serverId);
    const widgetRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = widgetRef.current as any;
        if (!el) return;

        el.setAttribute('dynamic-variables', `{"server_id": "${serverId}"}`);
    }, [serverId]);
    if (isLoading) {
        return <Card className='w-full h-120 mt-2 p-6 bg-accent text-center'>Loading...</Card>;
    }

    if (isError) {
        return (
            <Card className='w-full h-120 mt-2 p-6 bg-accent text-center'>Error Loading!</Card>
        );
    }

        const testsData = tests?.data ? tests.data[0]?.tests : [];
        const todos = tests?.data ? tests.data[0]?.todos : [];

    
    return (
        <Card className='w-full h-120 mt-2 bg-accent text-center overflow-auto'>
            <div className="flex flex-col gap-2">
                {todos?.map((todo: any, idx: number) => (
                    <TodoItem
                        key={todo.id ?? `todo-${idx}-${todo.name}`}
                        todo={todo}
                        test={testsData?.[idx]}
                    />
                ))}
            </div>
            <elevenlabs-convai
                agent-id='agent_1601k9mknxaaff3vpjn7z7g1tfcg'
                dynamic-variables='{"server_id": ""}'
            ></elevenlabs-convai>
            <script
                src='https://unpkg.com/@elevenlabs/convai-widget-embed'
                async
                type='text/javascript'
            ></script>
        </Card>
    );
}  

export default TicketView;