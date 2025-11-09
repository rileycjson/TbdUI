/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import Floor from '@/components/Floor';
import RackLarge from '@/components/RackLarge';
import InfoNav from '@/components/InfoNav';
import TicketView from '@/components/TicketView';

// import { Agent } from './components/agent';
import { Ticket } from 'lucide-react';

function ticketCounts() {
    const { data, error, isLoading } = useSWR(
        'https://548474a3e6f8.ngrok-free.app/server/tickets',
        axios
    );
    return {
        tickets: data,
        isLoading: isLoading,
        isError: error,
    };
}

function getTickets(serverId: string) {
    const { data, error, isLoading } = useSWR(
        `https://548474a3e6f8.ngrok-free.app/server/${serverId}`,
        axios
    );
    return {
        tickets: data,
        isLoading: isLoading,
        isError: error,
    };
}

function App() {
    const [rack, setRack] = useState(null);
    const [server, setServer] = useState(null);
    const [ticket, setTicket] = useState(null);

    // eleven('1');

    const { tickets, isLoading, isError } = ticketCounts();

    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <div className='w-screen h-screen flex gap-10 bg-background p-10'>
                <div className='flex-3 flex flex-col'>
                    {rack === null ? (
                        <Floor
                            floorId='R200'
                            setRack={setRack}
                            tickets={isLoading || isError ? undefined : tickets}
                        />
                    ) : (
                        <RackLarge
                            rackId={rack}
                            setRack={setRack}
                            setServer={setServer}
                            tickets={isLoading || isError ? undefined : tickets}
                        />
                    )}
                </div>
                <Card
                    className={
                        server === null
                            ? 'flex-1 transition-all duration-500'
                            : 'flex-9 transition-all duration-500'
                    }
                >
                    <CardHeader>
                        <CardTitle>
                            {rack === null
                                ? 'Select a Rack'
                                : server === null
                                ? 'Select a Server'
                                : server}
                        </CardTitle>
                        <CardDescription
                            onClick={() => {
                                server ? setServer(null) : setRack(null);
                            }}
                        >
                            Back
                        </CardDescription>
                        <CardAction>
                            <ModeToggle />
                        </CardAction>
                    </CardHeader>
                    {server && <CardContent>
                        <InfoNav serverId={server} getTickets={getTickets} setTicket={setTicket}/>
                        {ticket && <TicketView ticketId={ticket} />}
                    </CardContent>}
                </Card>
            </div>
            <elevenlabs-convai agent-id="agent_1601k9mknxaaff3vpjn7z7g1tfcg"></elevenlabs-convai><script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
        </ThemeProvider>
    );
}

export default App;
