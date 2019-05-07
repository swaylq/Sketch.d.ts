/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    cxx_destruct<R = void>(): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    sharedObjectView<R = MSSharedObjectView>(): R;
    setSharedObjectView<R = void, P0 = MSSharedObjectView>(_v: P0): R;
    secondaryTextField<R = NSTextField>(): R;
    setSecondaryTextField<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSManageForeignSymbolTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSManageForeignSymbolTableCellView>(): R;
      new: <R = MSManageForeignSymbolTableCellView>() => R;
    }
  }
}

declare const MSManageForeignSymbolTableCellView: cocoa.MSManageForeignSymbolTableCellView.CLASS;
