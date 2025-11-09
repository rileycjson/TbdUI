import { Card } from '@/components/ui/card';
import RackSmall from '@/components/RackSmall';

interface FloorProps {
    floorId: string;
    setRack: any;
}

interface RoomProps {
    numRacks: number;
    roomId: string;
}

function Floor({ floorId, setRack }: FloorProps) {
    const RoomList: Array<[string, number]> = [
        ['123', 5],
        ['124', 5],
        ['125', 8],
        ['126', 8],
        ['127', 8]
    ];

    function Room({ numRacks, roomId }: RoomProps) {
        return (
            <div className='w-fit h-fit flex flex-col items-center'>
                <Card className='w-full h-full p-2 flex flex-col gap-1'>
                    <h4 className='w-full text-center'>Room {roomId}</h4>
                    {Array.from({ length: numRacks }, (_, i) => (
                        <div className='flex flex-row items-center gap-5'>
                            <RackSmall
                                rackId={floorId + roomId + 'A' + (numRacks - i)}
                                setRack={setRack}
                            />
                            <h4>{numRacks - i}</h4>
                            <RackSmall
                                rackId={floorId + roomId + 'B' + (numRacks - i)}
                                setRack={setRack}
                            />
                        </div>
                    ))}
                    <div className='w-full flex flex-row gap-5'>
                        <h4 className='flex-1 text-center'>A</h4>
                        <h4></h4>
                        <h4 className='flex-1 text-center'>B</h4>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className='flex justify-around'>
            {RoomList.map(([roomId, rackCount]) => (
                <Room
                    numRacks={rackCount}
                    roomId={roomId}
                />
            ))}
        </div>
    );
}

export default Floor;
