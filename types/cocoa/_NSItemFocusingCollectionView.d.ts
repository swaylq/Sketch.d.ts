/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemFocusingCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
    isActiveFirstResponder<R = boolean>(): R;
    setIsActiveFirstResponder<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _NSItemFocusingCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = _NSItemFocusingCollectionView>(): R;
      new: <R = _NSItemFocusingCollectionView>() => R;
    }
  }
}
