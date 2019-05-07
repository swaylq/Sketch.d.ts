/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDropFeedbackData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    draggedRowIndexes<R = NSIndexSet>(): R;
    setDraggedRowIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
    isTemporaryDrag<R = boolean>(): R;
    setIsTemporaryDrag<R = void, P0 = boolean>(_v: P0): R;
    isExternalDrag<R = boolean>(): R;
    setIsExternalDrag<R = void, P0 = boolean>(_v: P0): R;
    draggingAccepted<R = boolean>(): R;
    setDraggingAccepted<R = void, P0 = boolean>(_v: P0): R;
    startRow<R = number>(): R;
    setStartRow<R = void, P0 = number>(_v: P0): R;
    dropFeedbackViews<R = NSMutableArray>(): R;
    setDropFeedbackViews<R = void, P0 = NSMutableArray>(_v: P0): R;
  }
  namespace NSTableViewDropFeedbackData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTableViewDropFeedbackData>(): R;
      new: <R = NSTableViewDropFeedbackData>() => R;
    }
  }
}

declare const NSTableViewDropFeedbackData: cocoa.NSTableViewDropFeedbackData.CLASS;
