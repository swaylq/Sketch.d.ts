/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRLEArray<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol {
    description<R = unknown>(): R;
    count<R = number>(): R;
    objectAtRunIndex_length<R = unknown, P0 = number, P1 = number>(_objectAtRunIndex: P0, _length: P1): R;
    objectAtIndex_effectiveRange_runIndex<R = unknown, P0 = number, P1 = _NSRange, P2 = number>(_objectAtIndex: P0, _effectiveRange: P1, _runIndex: P2): R;
    objectAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_objectAtIndex: P0, _effectiveRange: P1): R;
    _makeNewListFrom<R = void, P0 = _NSRefCountedRunArray>(__makeNewListFrom: P0): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    initWithRefCountedRunArray<R = unknown, P0 = _NSRefCountedRunArray>(_initWithRefCountedRunArray: P0): R;
  }
  namespace NSRLEArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSMutableCopyingProtocol {
      alloc<R = NSRLEArray>(): R;
      new: <R = NSRLEArray>() => R;
    }
  }
}

declare const NSRLEArray: cocoa.NSRLEArray.CLASS;
