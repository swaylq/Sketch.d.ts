/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFinishEditingButton<T0 = void, T1 = void, T2 = void> extends NSButton {}
  namespace MSFinishEditingButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSFinishEditingButton>(): R;
      new: <R = MSFinishEditingButton>() => R;
    }
  }
}

declare const MSFinishEditingButton: cocoa.MSFinishEditingButton.CLASS;
