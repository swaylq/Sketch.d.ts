/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLeftAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignLeft<R = void, P0 = unknown>(_alignLeft: P0): R;
  }
  namespace MSAlignLeftAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
      alloc<R = MSAlignLeftAction>(): R;
      new: <R = MSAlignLeftAction>() => R;
    }
  }
}

declare const MSAlignLeftAction: cocoa.MSAlignLeftAction.CLASS;
