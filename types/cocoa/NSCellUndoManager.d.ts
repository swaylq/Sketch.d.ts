/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCellUndoManager<T0 = void, T1 = void, T2 = void> extends NSUndoManager {
    redoMenuItemTitle<R = unknown>(): R;
    undoMenuItemTitle<R = unknown>(): R;
    canRedo<R = boolean>(): R;
    canUndo<R = boolean>(): R;
    setNextUndoManager<R = void, P0 = unknown>(_setNextUndoManager: P0): R;
  }
  namespace NSCellUndoManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUndoManager {
      alloc<R = NSCellUndoManager>(): R;
      new: <R = NSCellUndoManager>() => R;
    }
  }
}

declare const NSCellUndoManager: cocoa.NSCellUndoManager.CLASS;
