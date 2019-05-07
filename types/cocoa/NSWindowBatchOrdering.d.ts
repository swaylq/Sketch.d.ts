/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowBatchOrdering<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    deallocateAllWindows<R = void>(): R;
    performRelativeToWindow<R = void, P0 = number>(_performRelativeToWindow: P0): R;
    performBatchOrderingForTripletsInRange<R = void, P0 = _NSRange>(_performBatchOrderingForTripletsInRange: P0): R;
    addCompletionCallback<R = void, P0 = CDUnknownBlockType>(_addCompletionCallback: P0): R;
    bottomWindowOfAtLeastNormalWindowLevel<R = number>(): R;
    unscheduleWindow<R = void, P0 = number>(_unscheduleWindow: P0): R;
    scheduleWindow_forBatchOrdering_relativeTo<R = void, P0 = number, P1 = number, P2 = number>(_scheduleWindow: P0, _forBatchOrdering: P1, _relativeTo: P2): R;
    indexOfTripletWithWindow<R = number, P0 = number>(_indexOfTripletWithWindow: P0): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    ensureCapacity<R = void, P0 = number>(_ensureCapacity: P0): R;
  }
  namespace NSWindowBatchOrdering {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWindowBatchOrdering>(): R;
      new: <R = NSWindowBatchOrdering>() => R;
    }
  }
}

declare const NSWindowBatchOrdering: cocoa.NSWindowBatchOrdering.CLASS;
