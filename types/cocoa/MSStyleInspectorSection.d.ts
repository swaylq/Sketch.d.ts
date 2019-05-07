/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleInspectorSection<T0 = void, T1 = void, T2 = void> extends MSNestedInspectorSection, MSStylePartInspectorDelegateProtocol {
    showBorderOptionsAction<R = void, P0 = unknown>(_showBorderOptionsAction: P0): R;
    showFillOptionsAction<R = void, P0 = unknown>(_showFillOptionsAction: P0): R;
    restorePopover<R = void>(): R;
    closeAnyColorPopover<R = void>(): R;
    openPopoverForStylePart_atIndex<R = void, P0 = number, P1 = number>(_openPopoverForStylePart: P0, _atIndex: P1): R;
    indexOfPopoverToRestore<R = NSNumber>(): R;
    setIndexOfPopoverToRestore<R = void, P0 = NSNumber>(_v: P0): R;
    ownerOfPopoverToRestore<R = MSMultipleColorStylePartInspectorViewController>(): R;
    setOwnerOfPopoverToRestore<R = void, P0 = MSMultipleColorStylePartInspectorViewController>(_v: P0): R;
    currentControllers<R = NSArray>(): R;
    setCurrentControllers<R = void, P0 = NSArray>(_v: P0): R;
    colorControlsViewController<R = MSColorControlsInspectorViewController>(): R;
    setColorControlsViewController<R = void, P0 = MSColorControlsInspectorViewController>(_v: P0): R;
    blurViewController<R = MSBlurInspectorViewController>(): R;
    setBlurViewController<R = void, P0 = MSBlurInspectorViewController>(_v: P0): R;
    innerShadowViewController<R = MSMultipleInnerShadowInspectorViewController>(): R;
    setInnerShadowViewController<R = void, P0 = MSMultipleInnerShadowInspectorViewController>(_v: P0): R;
    shadowViewController<R = MSMultipleShadowInspectorViewController>(): R;
    setShadowViewController<R = void, P0 = MSMultipleShadowInspectorViewController>(_v: P0): R;
    borderViewController<R = MSMultipleBorderInspectorViewController>(): R;
    setBorderViewController<R = void, P0 = MSMultipleBorderInspectorViewController>(_v: P0): R;
    fillViewController<R = MSMultipleFillInspectorViewController>(): R;
    setFillViewController<R = void, P0 = MSMultipleFillInspectorViewController>(_v: P0): R;
    headerItem<R = MSCollapsibleHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = MSCollapsibleHeaderInspectorItem>(_v: P0): R;
    hasContent<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSStyleInspectorSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSNestedInspectorSection, MSStylePartInspectorDelegateProtocol {
      alloc<R = MSStyleInspectorSection>(): R;
      new: <R = MSStyleInspectorSection>() => R;
    }
  }
}

declare const MSStyleInspectorSection: cocoa.MSStyleInspectorSection.CLASS;
