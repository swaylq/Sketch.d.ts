/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextAlignTouchBarGroupAction<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSTextAlignTouchBarGroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSTextAlignTouchBarGroupAction>(): R;
      new: <R = MSTextAlignTouchBarGroupAction>() => R;
    }
  }
}

declare const MSTextAlignTouchBarGroupAction: cocoa.MSTextAlignTouchBarGroupAction.CLASS;
