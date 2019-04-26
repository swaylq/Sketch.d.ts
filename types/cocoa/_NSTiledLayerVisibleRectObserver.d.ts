/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTiledLayerVisibleRectObserver<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSTiledLayerVisibleRectObserver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTiledLayerVisibleRectObserver>(): R;
      new: <R = _NSTiledLayerVisibleRectObserver>() => R;
      observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
      _observeValueForKeyPath_ofObject_changeKind_oldValue_newValue_indexes_context<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = void>(__observeValueForKeyPath: P0, _ofObject: P1, _changeKind: P2, _oldValue: P3, _newValue: P4, _indexes: P5, _context: P6): R;
    }
  }
}
