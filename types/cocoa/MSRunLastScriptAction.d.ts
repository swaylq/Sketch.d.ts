/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunLastScriptAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    runLastScript<R = void, P0 = unknown>(_runLastScript: P0): R;
  }
  namespace MSRunLastScriptAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSRunLastScriptAction>(): R;
      new: <R = MSRunLastScriptAction>() => R;
    }
  }
}

declare const MSRunLastScriptAction: cocoa.MSRunLastScriptAction.CLASS;
