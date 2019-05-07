/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAsynchronousPreparationDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    asynchronousPreparationDidChangePreparedResult<R = void, P0 = _NSAsynchronousPreparation>(_asynchronousPreparationDidChangePreparedResult: P0): R;
    asynchronousPreparation_prepareResultUsingParameters<R = unknown, P0 = _NSAsynchronousPreparation, P1 = _NSAsynchronousPreparationInputParameters>(_asynchronousPreparation: P0, _prepareResultUsingParameters: P1): R;
  }
  namespace _NSAsynchronousPreparationDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
