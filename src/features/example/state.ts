// Example feature state placeholder (could later be Redux slice, Zustand store, etc.)

export interface ExampleItem {
  id: string;
  name: string;
}

export interface ExampleState {
  items: ExampleItem[];
}

export const createInitialExampleState = (): ExampleState => ({ items: [] });
