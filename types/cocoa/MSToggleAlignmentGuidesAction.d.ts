/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleAlignmentGuidesAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleAlignmentGuides<R = void, P0 = unknown>(_toggleAlignmentGuides: P0): R;
  }
  namespace MSToggleAlignmentGuidesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleAlignmentGuidesAction>(): R;
      new: <R = MSToggleAlignmentGuidesAction>() => R;
    }
  }
}

declare const MSToggleAlignmentGuidesAction: cocoa.MSToggleAlignmentGuidesAction.CLASS;
