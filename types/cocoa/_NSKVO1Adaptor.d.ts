/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKVO1Adaptor<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation {
    _setEmitsChanges<R = void, P0 = boolean>(__setEmitsChanges: P0): R;
    _observeValueForKeyPath_ofObject_changeKind_oldValue_newValue_indexes_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = void>(__observeValueForKeyPath: P0, _ofObject: P1, _changeKind: P2, _oldValue: P3, _newValue: P4, _indexes: P5, _context: P6): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    initWithObservable_observer_keyPath<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithObservable: P0, _observer: P1, _keyPath: P2): R;
  }
  namespace _NSKVO1Adaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSConcreteObservation {
      alloc<R = _NSKVO1Adaptor>(): R;
      new: <R = _NSKVO1Adaptor>() => R;
    }
  }
}
