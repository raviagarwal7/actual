import type { ServerEvents } from '../../../types/server-events';

export function init(
  channel: Window | string,
  handlers: Record<string, () => void>,
): void;
export type Init = typeof init;

export function send<K extends keyof ServerEvents>(
  type: K,
  args?: ServerEvents[k],
): void;
export type Send = typeof send;

export function getEvents(): unknown[];
export type GetEvents = typeof getEvents;

export function getNumClients(): number;
export type GetNumClients = typeof getNumClients;

export function resetEvents(): void;
export type ResetEvents = typeof resetEvents;
