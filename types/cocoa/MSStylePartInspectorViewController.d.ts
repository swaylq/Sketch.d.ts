/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorSectionProtocol, NSWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    updateDisplayedValues<R = void>(): R;
    closePopoverImmediately<R = void, P0 = boolean>(_closePopoverImmediately: P0): R;
    didGetAddedToInspector<R = void>(): R;
    hasEnabledStyle<R = boolean>(): R;
    prepare<R = void>(): R;
    supportedActionsForLayers<R = number, P0 = unknown>(_supportedActionsForLayers: P0): R;
    awakeFromNib<R = void>(): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    prepareForReuse<R = void>(): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
    delegate<R = MSStylePartInspectorDelegate>(): R;
    setDelegate<R = void, P0 = MSStylePartInspectorDelegate>(_v: P0): R;
    arrayController<R = NSArrayController>(): R;
    setArrayController<R = void, P0 = NSArrayController>(_v: P0): R;
    styleParts<R = NSArray>(): R;
    setStyleParts<R = void, P0 = NSArray>(_v: P0): R;
    layers<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSStylePartInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, MSInspectorSectionProtocol, NSWindowDelegateProtocol {
      alloc<R = MSStylePartInspectorViewController>(): R;
      new: <R = MSStylePartInspectorViewController>() => R;
      reusableControllerArray<R = unknown>(): R;
      stylePartViewController<R = unknown>(): R;
    }
  }
}

declare const MSStylePartInspectorViewController: cocoa.MSStylePartInspectorViewController.CLASS;
