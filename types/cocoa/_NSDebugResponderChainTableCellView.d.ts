/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugResponderChainTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    isFlipped<R = boolean>(): R;
    secondaryLabel<R = NSTextField>(): R;
    setSecondaryLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace _NSDebugResponderChainTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = _NSDebugResponderChainTableCellView>(): R;
      new: <R = _NSDebugResponderChainTableCellView>() => R;
    }
  }
}
