/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDelegateDFRCustomizationLayoutProtocol<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {
    controlStripGrabberStateInCollectionView_layout<R = number, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout>(_controlStripGrabberStateInCollectionView: P0, _layout: P1): R;
    shouldShowDoneInCollectionView_layout<R = boolean, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout>(_shouldShowDoneInCollectionView: P0, _layout: P1): R;
    deleteIconDisplayModeInCollectionView_layout<R = number, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout>(_deleteIconDisplayModeInCollectionView: P0, _layout: P1): R;
    escapeKeyFrameForCollectionView_layout<R = CGRect, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout>(_escapeKeyFrameForCollectionView: P0, _layout: P1): R;
    contentIsAnimatedInCollectionView_layout<R = boolean, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout>(_contentIsAnimatedInCollectionView: P0, _layout: P1): R;
    collectionView_layout_shouldDisplayBackgroundForSection_withRect<R = boolean, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout, P2 = number, P3 = CGRect>(_collectionView: P0, _layout: P1, _shouldDisplayBackgroundForSection: P2, _withRect: P3): R;
    collectionView_layout_paddingForSection<R = NSEdgeInsets, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _paddingForSection: P2): R;
    collectionView_layout_shouldDisplayShadeRectForSection<R = boolean, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _shouldDisplayShadeRectForSection: P2): R;
    collectionView_layout_containmentFrameForSection<R = CGRect, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _containmentFrameForSection: P2): R;
    collectionView_layout_sectionLayoutForSection<R = NSTouchBarCustomizationPreviewSectionLayout, P0 = NSCollectionView, P1 = NSTouchBarCustomizationPreviewLayout, P2 = number>(_collectionView: P0, _layout: P1, _sectionLayoutForSection: P2): R;
  }
  namespace NSCollectionViewDelegateDFRCustomizationLayoutProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewDelegateProtocol {}
  }
}
