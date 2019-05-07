/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayoutItemDescription<T0 = void, T1 = void, T2 = void> extends NSObject, _NSTouchBarItemLayoutWrapperProtocol {
    dealloc<R = void>(): R;
    backupDragSize<R = CGSize>(): R;
    setBackupDragSize<R = void, P0 = CGSize>(_v: P0): R;
    itemPosition<R = number>(): R;
    setItemPosition<R = void, P0 = number>(_v: P0): R;
    priorityIndex<R = number>(): R;
    setPriorityIndex<R = void, P0 = number>(_v: P0): R;
    showsAppState<R = boolean>(): R;
    setShowsAppState<R = void, P0 = boolean>(_v: P0): R;
    itemState<R = number>(): R;
    setItemState<R = void, P0 = number>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    stacked<R = boolean>(): R;
    setStacked<R = void, P0 = boolean>(_v: P0): R;
    dragAnchorPoint<R = CGPoint>(): R;
    setDragAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    dragPosition<R = CGPoint>(): R;
    setDragPosition<R = void, P0 = CGPoint>(_v: P0): R;
    centered<R = boolean>(): R;
    setCentered<R = void, P0 = boolean>(_v: P0): R;
    isSpace<R = boolean>(): R;
    setIsSpace<R = void, P0 = boolean>(_v: P0): R;
    contentClippingSize<R = CGSize>(): R;
    setContentClippingSize<R = void, P0 = CGSize>(_v: P0): R;
    maxSize<R = CGSize>(): R;
    setMaxSize<R = void, P0 = CGSize>(_v: P0): R;
    preferredSize<R = CGSize>(): R;
    setPreferredSize<R = void, P0 = CGSize>(_v: P0): R;
    minSize<R = CGSize>(): R;
    setMinSize<R = void, P0 = CGSize>(_v: P0): R;
    description<R = NSString>(): R;
    dragging<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarCustomizationPreviewSectionLayoutItemDescription {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarCustomizationPreviewSectionLayoutItemDescription>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionLayoutItemDescription>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionLayoutItemDescription: cocoa.NSTouchBarCustomizationPreviewSectionLayoutItemDescription.CLASS;
