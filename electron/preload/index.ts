import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('dndVibe', {
  getAppInfo: () => ({
    name: 'DndVibe',
    version: '0.1.0'
  })
});

declare global {
  interface Window {
    dndVibe: {
      getAppInfo: () => { name: string; version: string };
    };
  }
}
