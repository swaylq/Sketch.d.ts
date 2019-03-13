/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFlowLayoutSectionAccessibility<T = any> extends NSCollectionViewSectionAccessibility {
    _makeSupplementaryFooterView<R = unknown>(): R;
    _makeSupplementaryHeaderView<R = unknown>(): R;
    supplementaryFooterElement<R = unknown>(): R;
    supplementaryHeaderElement<R = unknown>(): R;
    __hasSupplementaryViewForSelector_sizeDelegateBlock_sizeNoDelegateBlock<R = boolean, P0 = string, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(___hasSupplementaryViewForSelector: P0, _sizeDelegateBlock: P1, _sizeNoDelegateBlock: P2): R;
  }
  namespace classes {
    export interface NSCollectionViewFlowLayoutSectionAccessibility<T = any> extends NSCollectionViewSectionAccessibility {
      alloc<R = NSCollectionViewFlowLayoutSectionAccessibility>(): R;
      new: <R = NSCollectionViewFlowLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSCollectionViewFlowLayoutSectionAccessibility: cocoa.classes.NSCollectionViewFlowLayoutSectionAccessibility;