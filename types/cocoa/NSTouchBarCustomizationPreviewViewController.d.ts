/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol, NSCollectionViewDelegateDFRCustomizationLayoutProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPreviewFlexibleSectionLayoutDelegateProtocol, NSTouchBarCustomizationPreviewMiniControlStripSectionLayoutDelegateProtocol {
    systemBarRect<R = CGRect>(): R;
    setSystemBarRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarCustomizationPreviewInteractionCoordinatorDelegateProtocol, NSCollectionViewDelegateDFRCustomizationLayoutProtocol, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPreviewFlexibleSectionLayoutDelegateProtocol, NSTouchBarCustomizationPreviewMiniControlStripSectionLayoutDelegateProtocol {
      alloc<R = NSTouchBarCustomizationPreviewViewController>(): R;
      new: <R = NSTouchBarCustomizationPreviewViewController>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewViewController: cocoa.NSTouchBarCustomizationPreviewViewController.CLASS;
