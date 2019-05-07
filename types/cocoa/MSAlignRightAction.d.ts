/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignRightAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignRight<R = void, P0 = unknown>(_alignRight: P0): R;
  }
  namespace MSAlignRightAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
      alloc<R = MSAlignRightAction>(): R;
      new: <R = MSAlignRightAction>() => R;
    }
  }
}

declare const MSAlignRightAction: cocoa.MSAlignRightAction.CLASS;
