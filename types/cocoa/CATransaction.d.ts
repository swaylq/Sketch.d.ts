/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CATransaction<T0 = void, T1 = void, T2 = void> {}
  namespace CATransaction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + CATransaction(NSBackground): 
      NS_setBackground<R = void, P0 = boolean>(_NS_setBackground: P0): R;
      NS_isBackground<R = boolean>(): R;
      // + CATransaction(NSCATransaction): 
      NS_tryAggressiveCommit<R = boolean>(): R;
      NS_setFlushesWithDisplayRefresh<R = void>(): R;
      NS_apply_block<R = void, P0 = number, P1 = CDUnknownBlockType>(_NS_apply: P0, _block: P1): R;
      // + CATransaction(MSDisableAnimation): 
      disableAnimationsInBlock<R = void, P0 = CDUnknownBlockType>(_disableAnimationsInBlock: P0): R;
    }
  }
}

declare const CATransaction: cocoa.CATransaction.CLASS;
