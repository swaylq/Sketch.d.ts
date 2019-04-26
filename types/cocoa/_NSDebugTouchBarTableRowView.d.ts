/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugTouchBarTableRowView<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace _NSDebugTouchBarTableRowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
      alloc<R = _NSDebugTouchBarTableRowView>(): R;
      new: <R = _NSDebugTouchBarTableRowView>() => R;
    }
  }
}
