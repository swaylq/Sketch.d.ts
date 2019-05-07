/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAsynchronousPreparation<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    destroy<R = void>(): R;
    initWithDelegate_parameters<R = unknown, P0 = unknown, P1 = unknown>(_initWithDelegate: P0, _parameters: P1): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    preparedResult<R = unknown>(): R;
    parameters<R = _NSAsynchronousPreparationInputParameters>(): R;
  }
  namespace _NSAsynchronousPreparation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAsynchronousPreparation>(): R;
      new: <R = _NSAsynchronousPreparation>() => R;
    }
  }
}
