/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentConflictTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    additionalWidthRequired<R = number>(): R;
    showPreview<R = void, P0 = unknown>(_showPreview: P0): R;
    controller<R = NSDocumentConflictPanelController>(): R;
    setController<R = void, P0 = NSDocumentConflictPanelController>(_v: P0): R;
  }
  namespace _NSDocumentConflictTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = _NSDocumentConflictTableCellView>(): R;
      new: <R = _NSDocumentConflictTableCellView>() => R;
    }
  }
}
