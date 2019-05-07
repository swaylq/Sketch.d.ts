/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorWell<T0 = void, T1 = void, T2 = void> extends MSStylePartPreviewButton, MSColorInspectorDelegateProtocol {
    windowDidResignKey<R = void, P0 = unknown>(_windowDidResignKey: P0): R;
    dismissColorPicker<R = void>(): R;
    presentColorPicker<R = void, P0 = unknown>(_presentColorPicker: P0): R;
    prepareWithDocument_initialColor<R = void, P0 = unknown, P1 = unknown>(_prepareWithDocument: P0, _initialColor: P1): R;
    awakeFromNib<R = void>(): R;
    canDisplayPopover<R = boolean>(): R;
    setCanDisplayPopover<R = void, P0 = boolean>(_v: P0): R;
    document<R = MSDocument>(): R;
    setDocument<R = void, P0 = MSDocument>(_v: P0): R;
    colorPopover<R = BCPopover>(): R;
    setColorPopover<R = void, P0 = BCPopover>(_v: P0): R;
    colorChangedTarget<R = unknown>(): R;
    setColorChangedTarget<R = void, P0 = unknown>(_v: P0): R;
    colorChangedAction<R = string>(): R;
    setColorChangedAction<R = void, P0 = string>(_v: P0): R;
    initialColor<R = NSColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSColorWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePartPreviewButton, MSColorInspectorDelegateProtocol {
      alloc<R = MSColorWell>(): R;
      new: <R = MSColorWell>() => R;
    }
  }
}

declare const MSColorWell: cocoa.MSColorWell.CLASS;
