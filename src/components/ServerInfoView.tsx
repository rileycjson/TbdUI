import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Card } from '@/components/ui/card';
interface TicketViewProps {
    serverId: string;
}

function ServerInfoView({ serverId }: TicketViewProps) {
    return (
        <Card className='w-full h-120 mt-2 p-6 bg-accent text-center'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-center'>
                            Server Info for {serverId}
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Processor (CPU)</TableCell>
                        <TableCell>Intel Xeon Silver 4314</TableCell>
                        <TableCell>CD8068904563400</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Motherboard</TableCell>
                        <TableCell>Supermicro X12STH-F</TableCell>
                        <TableCell>MBD-X12STH-F-O</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Memory (RAM)</TableCell>
                        <TableCell>Samsung 32GB DDR4-3200 ECC RDIMM</TableCell>
                        <TableCell>M393A4K40DB3-CWE</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Storage (SSD)</TableCell>
                        <TableCell>Samsung PM9A3 1.92TB NVMe U.2</TableCell>
                        <TableCell>MZQL23T8HCLS-00A07</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Storage (HDD)</TableCell>
                        <TableCell>Seagate Exos X18 18TB SATA</TableCell>
                        <TableCell>ST18000NM000J</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Power Supply Unit (PSU)</TableCell>
                        <TableCell>
                            Supermicro 750W Redundant Power Supply
                        </TableCell>
                        <TableCell>PWS-751-1R</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cooling Fan</TableCell>
                        <TableCell>Delta Electronics 80mm PWM Fan</TableCell>
                        <TableCell>AFB0812HH-PWM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Network Interface Card (NIC)</TableCell>
                        <TableCell>Intel X710-DA2 10GbE Dual-Port</TableCell>
                        <TableCell>X710DA2BLK</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>RAID Controller</TableCell>
                        <TableCell>LSI MegaRAID 9361-8i</TableCell>
                        <TableCell>LSI00344</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Chassis</TableCell>
                        <TableCell>
                            Supermicro 2U Rackmount Server Chassis
                        </TableCell>
                        <TableCell>CSE-826BE1C-R920LPB</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Heatsink</TableCell>
                        <TableCell>
                            Supermicro Passive CPU Heatsink for Xeon Scalable
                        </TableCell>
                        <TableCell>SNK-P0070APS4</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Optical Drive</TableCell>
                        <TableCell>LG Super Multi DVD-RW</TableCell>
                        <TableCell>GH24NSD5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>TPM Module</TableCell>
                        <TableCell>Supermicro TPM 2.0 Module</TableCell>
                        <TableCell>TPM2-SMICRO</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Riser Card</TableCell>
                        <TableCell>
                            Supermicro Riser Card for 2U Servers
                        </TableCell>
                        <TableCell>RSC-R2UW-2E8R</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Front Panel Board</TableCell>
                        <TableCell>
                            Supermicro Front I/O Control Board
                        </TableCell>
                        <TableCell>CSE-PTJBOD-CB2</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    );
}

export default ServerInfoView;
