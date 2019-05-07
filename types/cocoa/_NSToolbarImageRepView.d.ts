/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarImageRepView<T0 = void, T1 = void, T2 = void> extends NSView {
    _itemIdentifiers<R = unknown>(): R;
    _inactiveImageRep<R = unknown>(): R;
    _activeImageRep<R = unknown>(): R;
    accessibilityIsEnabledAttributeSettable<R = boolean>(): R;
    accessibilityEnabledAttribute<R = unknown>(): R;
    accessibilityIsDescriptionAttributeSettable<R = boolean>(): R;
    accessibilityDescriptionAttribute<R = unknown>(): R;
    _isPaletteView<R = boolean>(): R;
    _validDestinationForDragsWeInitiate<R = unknown>(): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    _computeDragImage<R = unknown>(): R;
    sizeWhenSizedToFit<R = CGSize>(): R;
    sizeHeightToFit<R = void>(): R;
    sizeWidthToFit<R = void>(): R;
    sizeToFit<R = void>(): R;
    setActiveImageRep_inactiveImageRep_forItemIdentifiers<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_setActiveImageRep: P0, _inactiveImageRep: P1, _forItemIdentifiers: P2): R;
    isOpaque<R = boolean>(): R;
    logicalImageSize<R = CGSize>(): R;
    setLogicalImageSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace _NSToolbarImageRepView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSToolbarImageRepView>(): R;
      new: <R = _NSToolbarImageRepView>() => R;
    }
  }
}
