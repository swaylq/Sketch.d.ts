/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleBorderInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSMultipleColorStylePartInspectorViewController, BCPopoverDelegateProtocol {
    views<R = unknown>(): R;
    advancedOptionsApplicable<R = boolean>(): R;
    shouldHideAddStylePartButton<R = boolean>(): R;
    showAdvancedOptionsAction<R = void, P0 = unknown>(_showAdvancedOptionsAction: P0): R;
    addStylePartButton<R = NSButton>(): R;
    setAddStylePartButton<R = void, P0 = NSButton>(_v: P0): R;
    thicknessLabel<R = MSTextLabelForUpDownField>(): R;
    setThicknessLabel<R = void, P0 = MSTextLabelForUpDownField>(_v: P0): R;
    borderOptionsController<R = MSBorderOptionsInspectorViewController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSMultipleBorderInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMultipleColorStylePartInspectorViewController, BCPopoverDelegateProtocol {
      alloc<R = MSMultipleBorderInspectorViewController>(): R;
      new: <R = MSMultipleBorderInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleBorderInspectorViewController: cocoa.MSMultipleBorderInspectorViewController.CLASS;
