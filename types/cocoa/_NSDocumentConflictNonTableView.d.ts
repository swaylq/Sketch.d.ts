/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentConflictNonTableView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace _NSDocumentConflictNonTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSDocumentConflictNonTableView>(): R;
      new: <R = _NSDocumentConflictNonTableView>() => R;
    }
  }
}
