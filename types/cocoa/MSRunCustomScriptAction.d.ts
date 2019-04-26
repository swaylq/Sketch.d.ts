/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunCustomScriptAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    runCustomScript<R = void, P0 = unknown>(_runCustomScript: P0): R;
  }
  namespace MSRunCustomScriptAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSRunCustomScriptAction>(): R;
      new: <R = MSRunCustomScriptAction>() => R;
    }
  }
}

declare const MSRunCustomScriptAction: cocoa.MSRunCustomScriptAction.CLASS;
