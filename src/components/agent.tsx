import { useState } from 'react';
import { AgentCard } from './ui/agent_ui';
import { useConversation } from '@elevenlabs/react';

// For workflows that are incorrect, can send feedback. low priority
// const { sendFeedback } = useConversation();

// sendFeedback(true); // positive
// sendFeedback(false); // negative

interface ElevenProps {
    serverId: string;
}

const [micMuted, setMicMuted] = useState(false);
const [volume, setVolume] = useState(1);
const conversation = useConversation({
    micMuted,
    volume,
    // ... other options
});

async function eleven({serverId}: ElevenProps) {
    await navigator.mediaDevices.getUserMedia({ audio: true });

    const converstationId = await conversation.startSession({
        agentId: 'agent_8801k9k2x19ce6ka94hgmp1yfxfc',
        connectionType: 'webrtc',
        userId: serverId
    });
}

async function endSession() {
    await conversation.endSession();
}

async function startSession({serverId}: ElevenProps) {
    const { status } = useConversation();
    if(status === "connected") return;

    await eleven({serverId});
}

async function toggleMuteUser() {
    setMicMuted(!micMuted);
}

function Agent({serverId}: ElevenProps) {
    return <AgentCard stopAgent={() => endSession()} startAgent={() => startSession({serverId})} muteUser={() => toggleMuteUser()}/>;
}

export { Agent, eleven };