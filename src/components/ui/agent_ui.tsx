import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';

function AgentCard({stopAgent, startAgent, muteUser}: {stopAgent?: () => void, startAgent?: () => void, muteUser?: () => void}) {
    return (
        <Card className='w-full max-w-sm'>
            <CardHeader>
                {/* <CardAction>
                    <Button variant='link'>Mute</Button>
                </CardAction>
                <CardAction>
                    <Button variant='link'>Stop Assistant</Button>
                </CardAction> */}
            </CardHeader>
            <CardContent>
                <div className='h-48 w-48 bg-secondary rounded-full mx-auto mb-4'></div>
            </CardContent>
            <CardFooter className='flex-row gap-2'>
                <Button onClick={() => muteUser} className='w-24'>
                    Mute
                </Button>
                <Button onClick={() => startAgent} className='w-24'>
                    Start Assistant
                </Button>
                <Button onClick={() => stopAgent} className='w-24'>
                    Stop Assistant
                </Button>
            </CardFooter>
        </Card>
    );
}
export { AgentCard };