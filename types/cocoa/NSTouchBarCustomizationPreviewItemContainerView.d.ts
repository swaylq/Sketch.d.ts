/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewItemContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _updatePresentationForCurrentStateAnimated<R = void, P0 = boolean>(__updatePresentationForCurrentStateAnimated: P0): R;
    setState_animated<R = void, P0 = number, P1 = boolean>(_setState: P0, _animated: P1): R;
    itemTransform<R = CGAffineTransform>(): R;
    setItemTransform<R = void, P0 = CGAffineTransform>(_v: P0): R;
    deletionLabelString<R = NSString>(): R;
    setDeletionLabelString<R = void, P0 = NSString>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPreviewItemContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTouchBarCustomizationPreviewItemContainerView>(): R;
      new: <R = NSTouchBarCustomizationPreviewItemContainerView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewItemContainerView: cocoa.NSTouchBarCustomizationPreviewItemContainerView.CLASS;
