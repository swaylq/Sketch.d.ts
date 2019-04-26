/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    sectionLayout_itemStateForItemAtIndex_withFrame<R = number, P0 = NSTouchBarCustomizationPreviewSectionLayout, P1 = number, P2 = CGRect>(_sectionLayout: P0, _itemStateForItemAtIndex: P1, _withFrame: P2): R;
    sectionLayout_descriptionForItemAtIndex<R = NSTouchBarCustomizationPreviewSectionLayoutItemDescription, P0 = NSTouchBarCustomizationPreviewSectionLayout, P1 = number>(_sectionLayout: P0, _descriptionForItemAtIndex: P1): R;
    sectionLayoutIsVisible<R = boolean, P0 = NSTouchBarCustomizationPreviewSectionLayout>(_sectionLayoutIsVisible: P0): R;
    paddingForSectionLayout<R = NSEdgeInsets, P0 = NSTouchBarCustomizationPreviewSectionLayout>(_paddingForSectionLayout: P0): R;
    containmentRectForSectionLayout<R = CGRect, P0 = NSTouchBarCustomizationPreviewSectionLayout>(_containmentRectForSectionLayout: P0): R;
    numberOfItemsForSectionLayout<R = number, P0 = NSTouchBarCustomizationPreviewSectionLayout>(_numberOfItemsForSectionLayout: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewSectionLayoutDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
