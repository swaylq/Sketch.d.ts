/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberChangeTransition<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    exiting<R = boolean>(): R;
    setExiting<R = void, P0 = boolean>(_v: P0): R;
    view<R = unknown>(): R;
    setView<R = void, P0 = unknown>(_v: P0): R;
    toAttr<R = NSScrubberLayoutAttributes>(): R;
    setToAttr<R = void, P0 = NSScrubberLayoutAttributes>(_v: P0): R;
    fromAttr<R = NSScrubberLayoutAttributes>(): R;
    setFromAttr<R = void, P0 = NSScrubberLayoutAttributes>(_v: P0): R;
  }
  namespace NSScrubberChangeTransition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScrubberChangeTransition>(): R;
      new: <R = NSScrubberChangeTransition>() => R;
    }
  }
}

declare const NSScrubberChangeTransition: cocoa.NSScrubberChangeTransition.CLASS;
