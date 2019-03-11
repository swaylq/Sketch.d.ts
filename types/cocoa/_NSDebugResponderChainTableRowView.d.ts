/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableRowView<T = any> extends cocoa.NSTableRowView {
    allowsVibrancy<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSDebugResponderChainTableRowView<T = any> extends cocoa.classes.NSTableRowView {
      alloc<R = _NSDebugResponderChainTableRowView>(): R;
      new: <R = _NSDebugResponderChainTableRowView>() => R;
    }
  }
}
