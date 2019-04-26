/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {}
  namespace _NSQuickActionTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
      alloc<R = _NSQuickActionTouchBarItem>(): R;
      new: <R = _NSQuickActionTouchBarItem>() => R;
      keyPathsForValuesAffectingRepresentedDataSource<R = unknown>(): R;
    }
  }
}
