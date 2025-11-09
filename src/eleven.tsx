import { useConversation } from '@elevenlabs/react';

// For workflows that are incorrect, can send feedback. low priority
// const { sendFeedback } = useConversation();

// sendFeedback(true); // positive
// sendFeedback(false); // negative

const conversation = useConversation();

async function eleven(serverId: string) {

    await navigator.mediaDevices.getUserMedia({ audio: true });

    const converstationId = await conversation.startSession({
        agentId: 'agent_8801k9k2x19ce6ka94hgmp1yfxfc',
        connectionType: 'webrtc',
        userId: serverId
    });
}

export default eleven;