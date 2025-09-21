// Example service layer placeholder
import { ExampleState, createInitialExampleState } from './state.js';

let state: ExampleState = createInitialExampleState();

export function addExample(name: string) {
  const item = { id: crypto.randomUUID(), name };
  state = { ...state, items: [...state.items, item] };
  return item;
}

export function listExamples() {
  return state.items.slice();
}
