/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentConflictTableCellView<T = any> extends NSTableCellView {
    additionalWidthRequired<R = number>(): R;
    showPreview<R = void, P0 = unknown>(_showPreview: P0): R;
    controller<R = NSDocumentConflictPanelController>(): R;
    setController<R = void, P0 = NSDocumentConflictPanelController>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDocumentConflictTableCellView<T = any> extends NSTableCellView {
      alloc<R = _NSDocumentConflictTableCellView>(): R;
      new: <R = _NSDocumentConflictTableCellView>() => R;
    }
  }
}