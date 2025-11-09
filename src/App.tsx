import React, { useState } from 'react';
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

function App() {
    const [rack, setRack] = useState(null);
    const [server, setServer] = useState(null);

    return (
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
            <div className='w-screen h-screen flex gap-10 bg-background p-10'>
                <div className='flex-3 flex flex-col'>
                    {rack === null ? (
                        <Floor floorId='R200' setRack={setRack} />
                    ) : (
                        <RackLarge rackId={rack} setRack={setRack} setServer={setServer} />
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
                        <CardTitle>{rack === null ? "Select a Rack" : server === null ? "Select a Server": server}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>
                            <ModeToggle />
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
}

export default App;
