/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextStoragePool<T0 = void, T1 = void, T2 = void> extends BCObjectPool, MSFirstLineTypesetterDelegateProtocol {
    removeAllObjects<R = unknown>(): R;
    recycleTextStorage<R = void, P0 = unknown>(_recycleTextStorage: P0): R;
    vendTextStorage<R = unknown>(): R;
    initWithTextLayer<R = unknown, P0 = unknown>(_initWithTextLayer: P0): R;
    baselineAdjustmentForLayoutManager<R = number>(): R;
    setBaselineAdjustmentForLayoutManager<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSTextStoragePool {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCObjectPool, MSFirstLineTypesetterDelegateProtocol {}
  }
}

declare const MSTextStoragePool: cocoa.MSTextStoragePool.CLASS;
