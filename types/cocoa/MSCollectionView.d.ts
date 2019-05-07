/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
    drawColumns<R = void>(): R;
    drawRows<R = void>(): R;
  }
  namespace MSCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = MSCollectionView>(): R;
      new: <R = MSCollectionView>() => R;
    }
  }
}

declare const MSCollectionView: cocoa.MSCollectionView.CLASS;
