/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignJustifiedAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignJustified<R = void, P0 = unknown>(_alignJustified: P0): R;
  }
  namespace MSAlignJustifiedAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
      alloc<R = MSAlignJustifiedAction>(): R;
      new: <R = MSAlignJustifiedAction>() => R;
    }
  }
}

declare const MSAlignJustifiedAction: cocoa.MSAlignJustifiedAction.CLASS;
