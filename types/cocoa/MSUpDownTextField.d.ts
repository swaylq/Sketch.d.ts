/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpDownTextField<T0 = void, T1 = void, T2 = void> extends NSTextField, NSTextViewDelegateProtocol, MSUpDownProtocolProtocol, NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    connectToValueAdapter_bindingOptions<R = void, P0 = unknown, P1 = unknown>(_connectToValueAdapter: P0, _bindingOptions: P1): R;
    connectToValueAdapter<R = void, P0 = unknown>(_connectToValueAdapter: P0): R;
    scrubberIndex<R = number>(): R;
    setScrubberIndex<R = void, P0 = number>(_v: P0): R;
    scrubberCount<R = number>(): R;
    setScrubberCount<R = void, P0 = number>(_v: P0): R;
    minimumIncrementValue<R = number>(): R;
    setMinimumIncrementValue<R = void, P0 = number>(_v: P0): R;
    preferredNextKeyView<R = NSView>(): R;
    setPreferredNextKeyView<R = void, P0 = NSView>(_v: P0): R;
    ownMaximum<R = number>(): R;
    setOwnMaximum<R = void, P0 = number>(_v: P0): R;
    ownMinimum<R = number>(): R;
    setOwnMinimum<R = void, P0 = number>(_v: P0): R;
    hasMaximum<R = boolean>(): R;
    setHasMaximum<R = void, P0 = boolean>(_v: P0): R;
    hasMinimum<R = boolean>(): R;
    setHasMinimum<R = void, P0 = boolean>(_v: P0): R;
    upDownController<R = MSUpDownController>(): R;
    setUpDownController<R = void, P0 = MSUpDownController>(_v: P0): R;
    refreshDelegate<R = unknown>(): R;
    setRefreshDelegate<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSUpDownTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField, NSTextViewDelegateProtocol, MSUpDownProtocolProtocol, NSTouchBarDelegateProtocol {
      alloc<R = MSUpDownTextField>(): R;
      new: <R = MSUpDownTextField>() => R;
    }
  }
}

declare const MSUpDownTextField: cocoa.MSUpDownTextField.CLASS;
