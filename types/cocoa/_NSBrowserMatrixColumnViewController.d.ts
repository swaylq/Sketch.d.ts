/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserMatrixColumnViewController<T0 = void, T1 = void, T2 = void> extends NSBrowserColumnViewController {
    _matrixSelectAll<R = void, P0 = unknown>(__matrixSelectAll: P0): R;
    selectedRow<R = number>(): R;
    setSelectionIndexes<R = void, P0 = unknown>(_setSelectionIndexes: P0): R;
    selectionIndexes<R = unknown>(): R;
    firstValidRowIndex<R = number>(): R;
    numberOfRows<R = number>(): R;
    setAllowsTypeSelect<R = void, P0 = boolean>(_setAllowsTypeSelect: P0): R;
    allowsTypeSelect<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_setDrawsBackground: P0): R;
    drawsBackground<R = boolean>(): R;
    setAllowsEmptySelection<R = void, P0 = boolean>(_setAllowsEmptySelection: P0): R;
    allowsEmptySelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_setAllowsMultipleSelection: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    matrix<R = unknown>(): R;
  }
  namespace _NSBrowserMatrixColumnViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBrowserColumnViewController {
      alloc<R = _NSBrowserMatrixColumnViewController>(): R;
      new: <R = _NSBrowserMatrixColumnViewController>() => R;
    }
  }
}
