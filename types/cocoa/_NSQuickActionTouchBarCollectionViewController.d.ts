/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarCollectionViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, _NSQuickActionTouchBarItemDelegateProtocol, NSCollectionViewDataSourceProtocol, NSCollectionViewDelegateFlowLayoutProtocol {
    delegate<R = _NSQuickActionTouchBarCollectionViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = _NSQuickActionTouchBarCollectionViewControllerDelegate>(_v: P0): R;
  }
  namespace _NSQuickActionTouchBarCollectionViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, _NSQuickActionTouchBarItemDelegateProtocol, NSCollectionViewDataSourceProtocol, NSCollectionViewDelegateFlowLayoutProtocol {
      alloc<R = _NSQuickActionTouchBarCollectionViewController>(): R;
      new: <R = _NSQuickActionTouchBarCollectionViewController>() => R;
    }
  }
}
