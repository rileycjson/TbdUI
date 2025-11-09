import { Card } from '@/components/ui/card';

interface RackLargeProps {
    rackId: string;
    setRack: any;
    setServer: any;
}

function RackLarge({rackId, setRack, setServer}: RackLargeProps) {
    return (
        <div className='flex justify-around' onClick={() => {setServer(null); setRack(null);}}>
            <Card className='w-fit h-fit p-6 flex flex-col gap-4 items-center' onClick={(e) => {
                setServer(null);
                e.stopPropagation();
            }}>
                <h4>{rackId}</h4>
                {Array.from({ length: 6 }, (_, i) => (
                    <div className='flex flex-row items-center gap-5' key={i}>
                        <h4>{i + 1}</h4>
                        <div
                            className='flex-none w-60 h-20 bg-good'
                            onClick={(e) => {
                                setServer(rackId + (i + 1));
                                e.stopPropagation();
                            }}
                        ></div>
                        <h4></h4>
                    </div>
                ))}
            </Card>
        </div>
    );
}

export default RackLarge;
