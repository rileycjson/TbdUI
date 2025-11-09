

interface RoomProps {
    numRacks: number;
    roomNum: string;
    setRack: any;
}






function Room({roomNum, setRack}: {roomNum: string, setRack: any}) {
    return (
        <>
            <h4>Room {roomNum}</h4>
            <Card className='w-fit p-2 flex flex-row gap-10'>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-center font-medium text-card-foreground'>
                        A
                    </h4>
                    {Array.from({ length: 5 }, (_, i) => (
                        <RackSmall
                            rackId={roomNum + 'A' + (i + 1)}
                            setRack={setRack}
                        />
                    ))}
                    <h4 className='text-center font-medium text-card-foreground'>
                        A
                    </h4>
                </div>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-center font-medium text-card-foreground'>
                        B
                    </h4>
                    {Array.from({ length: 5 }, (_, i) => (
                        <RackSmall
                            rackId={roomNum + 'B' + (i + 1)}
                            setRack={setRack}
                        />
                    ))}
                    <h4 className='text-center font-medium text-card-foreground'>
                        B
                    </h4>
                </div>
            </Card>
        </>
    );
}

export default Room;
