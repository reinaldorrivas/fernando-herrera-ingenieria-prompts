import type { ComponentType } from "react";

export interface ExerciseModule {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly Component: ComponentType;
}
