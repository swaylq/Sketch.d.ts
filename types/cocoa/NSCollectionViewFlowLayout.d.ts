/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFlowLayout<T0 = void, T1 = void, T2 = void> {}
  namespace NSCollectionViewFlowLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSCollectionViewFlowLayout(NSPrivateItemSequence): 
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewFlowLayout: cocoa.NSCollectionViewFlowLayout.CLASS;
