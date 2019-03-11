/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSISLinearExpressionObservable<T = any> extends cocoa.NSObservationSource {
    emitValueIfNeeded<R = void>(): R;
    receiveObservedValue_fromVariable<R = void, P0 = unknown, P1 = unknown>(_receiveObservedValue: P0, _fromVariable: P1): R;
    addObserver<R = unknown, P0 = unknown>(_addObserver: P0): R;
    addObserverBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_addObserverBlock: P0): R;
    _overrideUseFastBlockObservers<R = boolean>(): R;
    _lazilyObserveVariablesIfNeeded<R = void>(): R;
    initWithExpression_inEngine<R = unknown, P0 = unknown, P1 = unknown>(_initWithExpression: P0, _inEngine: P1): R;
  }
  namespace classes {
    export interface _NSISLinearExpressionObservable<T = any> extends cocoa.classes.NSObservationSource {
      alloc<R = _NSISLinearExpressionObservable>(): R;
      new: <R = _NSISLinearExpressionObservable>() => R;
      observableForExpression_inEngine<R = unknown, P0 = unknown, P1 = unknown>(_observableForExpression: P0, _inEngine: P1): R;
    }
  }
}
