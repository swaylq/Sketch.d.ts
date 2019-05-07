/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {}
  namespace MSWelcomeCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = MSWelcomeCollectionView>(): R;
      new: <R = MSWelcomeCollectionView>() => R;
    }
  }
}

declare const MSWelcomeCollectionView: cocoa.MSWelcomeCollectionView.CLASS;
