export interface DndVibeAppInfo {
  name: string;
  version: string;
}

export interface DndVibeApi {
  getAppInfo: () => DndVibeAppInfo;
}

declare global {
  interface Window {
    dndVibe: DndVibeApi;
  }
}

export {};
