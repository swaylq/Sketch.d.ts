/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDebugTouchBarTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    isFlipped<R = boolean>(): R;
    showInspectorPopover<R = void, P0 = unknown>(_showInspectorPopover: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    secondaryLabel<R = NSTextField>(): R;
    setSecondaryLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace _NSDebugTouchBarTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = _NSDebugTouchBarTableCellView>(): R;
      new: <R = _NSDebugTouchBarTableCellView>() => R;
    }
  }
}
