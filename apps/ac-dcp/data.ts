import { useQueryClient } from 'react-query';
import {
  createWebSocketClient,
  InstancePlayState,
  InstancePowerState,
  InstanceSpec,
  SendEvents,
} from '@audiocloud/domainapi';
import React from 'react';

export const useInstanceDataApi = (
  baseUrl: string,
  setSendEvents?: (send: SendEvents | null) => void
) => {
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const [sendEvents] = createWebSocketClient(baseUrl, {
      connectionChanged(connected: boolean): void {
        queryClient.setQueryData('connected', connected);
      },
      instanceConnectionChanged(instanceId: string, connected: boolean): void {
        queryClient.setQueryData(
          ['instance', instanceId, 'connected'],
          connected
        );
      },
      instancePlayStateChanged(
        instanceId: string,
        state: InstancePlayState
      ): void {
        queryClient.setQueryData(['instance', instanceId, 'playState'], state);
      },
      instancePowerStateChanged(
        instanceId: string,
        state: InstancePowerState
      ): void {
        queryClient.setQueryData(['instance', instanceId, 'powerState'], state);
      },
      instanceReport(
        instance: string,
        name: string,
        channel: number,
        value: number
      ): void {
        queryClient.setQueryData(
          ['instance', instance, 'report', name, channel],
          value
        );
      },
      instanceSpec(instanceId: string, spec: InstanceSpec | null): void {
        queryClient.setQueryData(['instance', instanceId, 'spec'], spec);
      },
    });

    if (setSendEvents) {
      setSendEvents(sendEvents);
    }

    return () => {
      sendEvents.close();
      if (setSendEvents) {
        setSendEvents(null);
      }
    };
  }, [baseUrl, queryClient, setSendEvents]);
};
