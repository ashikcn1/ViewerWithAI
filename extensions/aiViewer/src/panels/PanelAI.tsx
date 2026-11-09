import React, { useState } from 'react';
import { Button, Input } from '@ohif/ui-next';

type PanelAIProps = {
  servicesManager: AppTypes.ServicesManager;
  commandsManager: AppTypes.CommandsManager;
  extensionManager: AppTypes.ExtensionManager;
};

function PanelAI(_props: PanelAIProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const trimmed = message.trim();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!trimmed) {
      return;
    }
    setMessages(prev => [...prev, trimmed]);
    setMessage('');
  };

  return (
    <div className="flex h-full flex-col p-2">
      <div className="text-foreground mb-2 text-base font-semibold">AI Panel</div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-muted-foreground text-sm">AI tools will appear here.</div>
        ) : (
          messages.map((text, index) => (
            <div
              key={index}
              className="bg-primary/20 text-foreground self-end rounded px-2 py-1 text-sm"
            >
              {text}
            </div>
          ))
        )}
      </div>

      <form
        className="mt-2 flex items-center gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          className="flex-1"
          placeholder="Type a message..."
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <Button
          type="submit"
          disabled={!trimmed}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default PanelAI;
