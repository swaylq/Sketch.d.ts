/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoTextOperation<T0 = void, T1 = void, T2 = void> extends NSObject {
    isSupportingCoalescing<R = boolean>(): R;
    firstTextViewForTextStorage<R = unknown, P0 = unknown>(_firstTextViewForTextStorage: P0): R;
    undoRedo<R = void, P0 = unknown>(_undoRedo: P0): R;
    dealloc<R = void>(): R;
    initWithAffectedRange_layoutManager_undoManager<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(_initWithAffectedRange: P0, _layoutManager: P1, _undoManager: P2): R;
    affectedRange<R = _NSRange>(): R;
    setAffectedRange<R = void, P0 = _NSRange>(_v: P0): R;
    undoManager<R = NSUndoManager>(): R;
    setUndoManager<R = void, P0 = NSUndoManager>(_v: P0): R;
  }
  namespace NSUndoTextOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUndoTextOperation>(): R;
      new: <R = NSUndoTextOperation>() => R;
    }
  }
}

declare const NSUndoTextOperation: cocoa.NSUndoTextOperation.CLASS;
