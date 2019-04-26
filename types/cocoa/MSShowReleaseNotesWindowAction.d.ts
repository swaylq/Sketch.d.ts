/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowReleaseNotesWindowAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    showReleaseNotesWindow<R = void, P0 = unknown>(_showReleaseNotesWindow: P0): R;
  }
  namespace MSShowReleaseNotesWindowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSShowReleaseNotesWindowAction>(): R;
      new: <R = MSShowReleaseNotesWindowAction>() => R;
    }
  }
}

declare const MSShowReleaseNotesWindowAction: cocoa.MSShowReleaseNotesWindowAction.CLASS;
