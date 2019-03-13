/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSISVariableObservable<T = any> extends NSObservationSource {
    emitValueIfNeeded<R = void>(): R;
    valueHasChanged<R = boolean>(): R;
    initWithVariable_inEngine<R = unknown, P0 = unknown, P1 = unknown>(_initWithVariable: P0, _inEngine: P1): R;
  }
  namespace classes {
    export interface _NSISVariableObservable<T = any> extends NSObservationSource {
      alloc<R = _NSISVariableObservable>(): R;
      new: <R = _NSISVariableObservable>() => R;
      observableForVariable_inEngine<R = unknown, P0 = unknown, P1 = unknown>(_observableForVariable: P0, _inEngine: P1): R;
    }
  }
}
