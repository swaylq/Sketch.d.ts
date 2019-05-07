/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingView<T0 = void, T1 = void, T2 = void> extends NSView, NSDraggingSourceProtocol {
    cxx_destruct<R = void>(): R;
    wantsSeparator<R = boolean>(): R;
    startDragWithEvent<R = void, P0 = unknown>(_startDragWithEvent: P0): R;
    reorderingTag<R = number>(): R;
    setReorderingTag<R = void, P0 = number>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    duplicateAction<R = string>(): R;
    setDuplicateAction<R = void, P0 = string>(_v: P0): R;
    deleteAction<R = string>(): R;
    setDeleteAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSReorderingView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSDraggingSourceProtocol {
      alloc<R = MSReorderingView>(): R;
      new: <R = MSReorderingView>() => R;
    }
  }
}

declare const MSReorderingView: cocoa.MSReorderingView.CLASS;
