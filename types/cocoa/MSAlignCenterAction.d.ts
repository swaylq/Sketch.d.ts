/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignCenterAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
    label<R = unknown>(): R;
    alignCenter<R = void, P0 = unknown>(_alignCenter: P0): R;
  }
  namespace MSAlignCenterAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignAction {
      alloc<R = MSAlignCenterAction>(): R;
      new: <R = MSAlignCenterAction>() => R;
    }
  }
}

declare const MSAlignCenterAction: cocoa.MSAlignCenterAction.CLASS;
