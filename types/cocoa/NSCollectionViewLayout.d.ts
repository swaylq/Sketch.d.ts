/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewLayout<T0 = void, T1 = void, T2 = void> {}
  namespace NSCollectionViewLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSCollectionViewLayout(NSPrivateItemSequence): 
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewLayout: cocoa.NSCollectionViewLayout.CLASS;
