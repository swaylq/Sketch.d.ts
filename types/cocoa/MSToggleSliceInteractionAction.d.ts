/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleSliceInteractionAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    labelForToolbar<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    toggleSliceInteraction<R = void, P0 = unknown>(_toggleSliceInteraction: P0): R;
  }
  namespace MSToggleSliceInteractionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleSliceInteractionAction>(): R;
      new: <R = MSToggleSliceInteractionAction>() => R;
    }
  }
}

declare const MSToggleSliceInteractionAction: cocoa.MSToggleSliceInteractionAction.CLASS;
