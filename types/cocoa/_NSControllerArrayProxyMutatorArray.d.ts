/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControllerArrayProxyMutatorArray<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    removeLastObject<R = void>(): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    _performMutatorOperation_object_index<R = void, P0 = number, P1 = unknown, P2 = number>(__performMutatorOperation: P0, _object: P1, _index: P2): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    _referenceArray<R = unknown>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    initWithController_keyPath<R = unknown, P0 = unknown, P1 = unknown>(_initWithController: P0, _keyPath: P1): R;
  }
  namespace _NSControllerArrayProxyMutatorArray {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {}
  }
}
