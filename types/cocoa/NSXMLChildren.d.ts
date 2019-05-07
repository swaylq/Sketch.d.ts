/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLChildren<T0 = void, T1 = void, T2 = void> extends NSMutableArray {
    makeStale<R = void>(): R;
    reallyRemoveAllObjects<R = unknown>(): R;
    reallyRemoveObject<R = unknown, P0 = unknown>(_reallyRemoveObject: P0): R;
    reallyReplaceObjectAtIndex_withObject<R = unknown, P0 = number, P1 = unknown>(_reallyReplaceObjectAtIndex: P0, _withObject: P1): R;
    reallyRemoveObjectAtIndex<R = unknown, P0 = number>(_reallyRemoveObjectAtIndex: P0): R;
    reallyInsertObject_atIndex<R = unknown, P0 = unknown, P1 = number>(_reallyInsertObject: P0, _atIndex: P1): R;
    reallyAddObject<R = unknown, P0 = unknown>(_reallyAddObject: P0): R;
    replaceObjectsAtIndexes_withObjects<R = void, P0 = unknown, P1 = unknown>(_replaceObjectsAtIndexes: P0, _withObjects: P1): R;
    removeObjectsAtIndexes<R = void, P0 = unknown>(_removeObjectsAtIndexes: P0): R;
    insertObjects_atIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atIndexes: P1): R;
    sortUsingSelector<R = void, P0 = string>(_sortUsingSelector: P0): R;
    sortUsingFunction_context<R = void, P0 = CDUnknownFunctionPointerType, P1 = void>(_sortUsingFunction: P0, _context: P1): R;
    setArray<R = void, P0 = unknown>(_setArray: P0): R;
    replaceObjectsInRange_withObjectsFromArray<R = void, P0 = _NSRange, P1 = unknown>(_replaceObjectsInRange: P0, _withObjectsFromArray: P1): R;
    replaceObjectsInRange_withObjectsFromArray_range<R = void, P0 = _NSRange, P1 = unknown, P2 = _NSRange>(_replaceObjectsInRange: P0, _withObjectsFromArray: P1, _range: P2): R;
    removeObjectsInRange<R = void, P0 = _NSRange>(_removeObjectsInRange: P0): R;
    removeObjectsInArray<R = void, P0 = unknown>(_removeObjectsInArray: P0): R;
    removeObjectsFromIndices_numIndices<R = void, P0 = number, P1 = number>(_removeObjectsFromIndices: P0, _numIndices: P1): R;
    removeObjectIdenticalTo<R = void, P0 = unknown>(_removeObjectIdenticalTo: P0): R;
    removeObjectIdenticalTo_inRange<R = void, P0 = unknown, P1 = _NSRange>(_removeObjectIdenticalTo: P0, _inRange: P1): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    removeObject_inRange<R = void, P0 = unknown, P1 = _NSRange>(_removeObject: P0, _inRange: P1): R;
    removeAllObjects<R = void>(): R;
    exchangeObjectAtIndex_withObjectAtIndex<R = void, P0 = number, P1 = number>(_exchangeObjectAtIndex: P0, _withObjectAtIndex: P1): R;
    addObjectsFromArray<R = void, P0 = unknown>(_addObjectsFromArray: P0): R;
    replaceObjectAtIndex_withObject<R = void, P0 = number, P1 = unknown>(_replaceObjectAtIndex: P0, _withObject: P1): R;
    removeObjectAtIndex<R = void, P0 = number>(_removeObjectAtIndex: P0): R;
    removeLastObject<R = void>(): R;
    insertObject_atIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atIndex: P1): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    initWithMutableArray<R = unknown, P0 = unknown>(_initWithMutableArray: P0): R;
    init<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSXMLChildren {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableArray {}
  }
}

declare const NSXMLChildren: cocoa.NSXMLChildren.CLASS;
