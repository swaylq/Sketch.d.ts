/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewElementProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSUserInterfaceItemIdentificationProtocol {
    preferredLayoutAttributesFittingAttributes<R = NSCollectionViewLayoutAttributes, P0 = NSCollectionViewLayoutAttributes>(_preferredLayoutAttributesFittingAttributes: P0): R;
    didTransitionFromLayout_toLayout<R = void, P0 = NSCollectionViewLayout, P1 = NSCollectionViewLayout>(_didTransitionFromLayout: P0, _toLayout: P1): R;
    willTransitionFromLayout_toLayout<R = void, P0 = NSCollectionViewLayout, P1 = NSCollectionViewLayout>(_willTransitionFromLayout: P0, _toLayout: P1): R;
    applyLayoutAttributes<R = void, P0 = NSCollectionViewLayoutAttributes>(_applyLayoutAttributes: P0): R;
    prepareForReuse<R = void>(): R;
  }
  namespace NSCollectionViewElementProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSUserInterfaceItemIdentificationProtocol {}
  }
}
