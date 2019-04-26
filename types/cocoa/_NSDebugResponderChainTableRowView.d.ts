/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableRowView<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace _NSDebugResponderChainTableRowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableRowView {
      alloc<R = _NSDebugResponderChainTableRowView>(): R;
      new: <R = _NSDebugResponderChainTableRowView>() => R;
    }
  }
}
