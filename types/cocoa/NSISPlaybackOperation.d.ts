/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISPlaybackOperation<T0 = void, T1 = void, T2 = void> extends NSObject, NSISVariableDelegateProtocol {
    _addToEngine<R = void, P0 = unknown>(__addToEngine: P0): R;
    secondAnchor<R = unknown>(): R;
    firstAnchor<R = unknown>(): R;
    secondItem<R = unknown>(): R;
    firstItem<R = unknown>(): R;
    playbackOneAction_onEngine<R = void, P0 = unknown, P1 = unknown>(_playbackOneAction: P0, _onEngine: P1): R;
    dealloc<R = void>(): R;
    unwrapLinearExpression_onEngine<R = unknown, P0 = unknown, P1 = unknown>(_unwrapLinearExpression: P0, _onEngine: P1): R;
    unwrapVariable<R = unknown, P0 = unknown>(_unwrapVariable: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSISPlaybackOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSISVariableDelegateProtocol {
      alloc<R = NSISPlaybackOperation>(): R;
      new: <R = NSISPlaybackOperation>() => R;
    }
  }
}

declare const NSISPlaybackOperation: cocoa.NSISPlaybackOperation.CLASS;
