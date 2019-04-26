/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLabelForUpDownField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    cxx_destruct<R = void>(): R;
    canScrub<R = boolean>(): R;
    userClickedWithMouseDownEvent_mouseUpEvent<R = void, P0 = unknown, P1 = unknown>(_userClickedWithMouseDownEvent: P0, _mouseUpEvent: P1): R;
    trackMouseDraggingWithDownEvent_block<R = boolean, P0 = unknown, P1 = CDUnknownBlockType>(_trackMouseDraggingWithDownEvent: P0, _block: P1): R;
    textField<R = unknown>(): R;
    updateCursor<R = void>(): R;
    trackMouse<R = void, P0 = unknown>(_trackMouse: P0): R;
    windowStatusChanged<R = void, P0 = unknown>(_windowStatusChanged: P0): R;
    awakeFromNib<R = void>(): R;
    setShouldTrackFlags<R = void, P0 = boolean>(_setShouldTrackFlags: P0): R;
    setupTextLabelForUpDownField<R = void>(): R;
    clickShouldDismissPopover<R = boolean, P0 = unknown>(_clickShouldDismissPopover: P0): R;
    mouseTracker<R = MSMouseTracker>(): R;
    setMouseTracker<R = void, P0 = MSMouseTracker>(_v: P0): R;
    flagsMonitor<R = unknown>(): R;
    setFlagsMonitor<R = void, P0 = unknown>(_v: P0): R;
    textFields<R = NSArray>(): R;
    setTextFields<R = void, P0 = NSArray>(_v: P0): R;
    upDownTextField<R = MSUpDownProtocol>(): R;
    setUpDownTextField<R = void, P0 = MSUpDownProtocol>(_v: P0): R;
  }
  namespace MSTextLabelForUpDownField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSTextLabelForUpDownField>(): R;
      new: <R = MSTextLabelForUpDownField>() => R;
      resizeCursorForFlags<R = unknown, P0 = number>(_resizeCursorForFlags: P0): R;
    }
  }
}

declare const MSTextLabelForUpDownField: cocoa.MSTextLabelForUpDownField.CLASS;
