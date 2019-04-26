/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleFlowInteractionAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    labelForToolbar<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleFlowInteraction<R = void, P0 = unknown>(_toggleFlowInteraction: P0): R;
  }
  namespace MSToggleFlowInteractionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleFlowInteractionAction>(): R;
      new: <R = MSToggleFlowInteractionAction>() => R;
    }
  }
}

declare const MSToggleFlowInteractionAction: cocoa.MSToggleFlowInteractionAction.CLASS;
