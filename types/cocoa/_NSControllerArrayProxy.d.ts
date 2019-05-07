/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSControllerArrayProxy<T0 = void, T1 = void, T2 = void> extends NSArray {
    _invokeSelector_withArguments_onKeyPath_ofObjectAtIndex<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = number>(__invokeSelector: P0, _withArguments: P1, _onKeyPath: P2, _ofObjectAtIndex: P3): R;
    _validateValue_forKeyPath_ofObjectAtIndex_error<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__validateValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2, _error: P3): R;
    _setValue_forKeyPath_ofObjectAtIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__setValue: P0, _forKeyPath: P1, _ofObjectAtIndex: P2): R;
    _valueForKeyPath_ofObjectAtIndex<R = unknown, P0 = unknown, P1 = number>(__valueForKeyPath: P0, _ofObjectAtIndex: P1): R;
    getObjects_range<R = void, P0 = unknown, P1 = _NSRange>(_getObjects: P0, _range: P1): R;
    objectsAtIndexes<R = unknown, P0 = unknown>(_objectsAtIndexes: P0): R;
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    clearController<R = void>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace _NSControllerArrayProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArray {}
  }
}
