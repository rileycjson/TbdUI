import { Card } from '@/components/ui/card';

interface RackSmallProps {
    rackId: string;
    setRack: any;
}
 
function RackSmall({rackId, setRack}: RackSmallProps) {
    return (
        <Card className='w-15 h-15 rounded p-2 grid grid-cols-2 gap-1 bg-accent'
            onClick={() => {setRack(rackId)}}>
            <div className='flex-none w-full h-full bg-good'></div>
            <div className='flex-none w-full h-full bg-warning'></div>
            <div className='flex-none w-full h-full bg-good'></div>
            <div className='flex-none w-full h-full bg-good'></div>
            <div className='flex-none w-full h-full bg-destructive'></div>
            <div className='flex-none w-full h-full bg-good'></div>
        </Card>
    );
}

export default RackSmall;