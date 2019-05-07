/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleRulerDragLockingAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    toggleRulerDragLocking<R = void, P0 = unknown>(_toggleRulerDragLocking: P0): R;
  }
  namespace MSToggleRulerDragLockingAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleRulerDragLockingAction>(): R;
      new: <R = MSToggleRulerDragLockingAction>() => R;
    }
  }
}

declare const MSToggleRulerDragLockingAction: cocoa.MSToggleRulerDragLockingAction.CLASS;
