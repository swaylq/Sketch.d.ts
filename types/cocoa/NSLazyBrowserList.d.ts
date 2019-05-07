/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLazyBrowserList<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    makeObjectsPerform_withObject<R = void, P0 = string, P1 = unknown>(_makeObjectsPerform: P0, _withObject: P1): R;
    makeObjectsPerform<R = void, P0 = string>(_makeObjectsPerform: P0): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    removeLastObject<R = void>(): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
  }
  namespace NSLazyBrowserList {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {}
  }
}

declare const NSLazyBrowserList: cocoa.NSLazyBrowserList.CLASS;
