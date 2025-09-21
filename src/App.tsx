import React from 'react';

export function App() {
  const info = window.dndVibe?.getAppInfo?.();
  return (
    <div className="app-root">
      <h1>D&D Vibe</h1>
      <p>A cross-platform vibe experience. ✨</p>
      {info && (
        <small>
          App: {info.name} v{info.version}
        </small>
      )}
    </div>
  );
}
