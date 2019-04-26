/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, BCPopoverDelegateProtocol, MSColorInspectorDelegateProtocol, MSInspectorChildControllerProtocol {
    cxx_destruct<R = void>(): R;
    views<R = unknown>(): R;
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    colorizeAction<R = void, P0 = unknown>(_colorizeAction: P0): R;
    finishEditing<R = void, P0 = unknown>(_finishEditing: P0): R;
    cropAction<R = void, P0 = unknown>(_cropAction: P0): R;
    invertAction<R = void, P0 = unknown>(_invertAction: P0): R;
    magicWandAction<R = void, P0 = unknown>(_magicWandAction: P0): R;
    rectSelectionAction<R = void, P0 = unknown>(_rectSelectionAction: P0): R;
    refresh<R = void>(): R;
    buttonLabels<R = unknown>(): R;
    actionButtons<R = unknown>(): R;
    previouslySelectedColor<R = NSColor>(): R;
    setPreviouslySelectedColor<R = void, P0 = NSColor>(_v: P0): R;
    fillLabel<R = NSTextField>(): R;
    setFillLabel<R = void, P0 = NSTextField>(_v: P0): R;
    cropLabel<R = NSTextField>(): R;
    setCropLabel<R = void, P0 = NSTextField>(_v: P0): R;
    invertLabel<R = NSTextField>(): R;
    setInvertLabel<R = void, P0 = NSTextField>(_v: P0): R;
    heightField<R = MSInlineUpDownTextField>(): R;
    setHeightField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    widthField<R = MSInlineUpDownTextField>(): R;
    setWidthField<R = void, P0 = MSInlineUpDownTextField>(_v: P0): R;
    fillButton<R = NSButton>(): R;
    setFillButton<R = void, P0 = NSButton>(_v: P0): R;
    cropButton<R = NSButton>(): R;
    setCropButton<R = void, P0 = NSButton>(_v: P0): R;
    invertButton<R = NSButton>(): R;
    setInvertButton<R = void, P0 = NSButton>(_v: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    magicWandButton<R = NSButton>(): R;
    setMagicWandButton<R = void, P0 = NSButton>(_v: P0): R;
    rectSelectionButton<R = NSButton>(): R;
    setRectSelectionButton<R = void, P0 = NSButton>(_v: P0): R;
    eventHandler<R = MSBitmapEditEventHandler>(): R;
    setEventHandler<R = void, P0 = MSBitmapEditEventHandler>(_v: P0): R;
    selectionSize<R = CGSize>(): R;
    setSelectionSize<R = void, P0 = CGSize>(_v: P0): R;
    currentMode<R = number>(): R;
    setCurrentMode<R = void, P0 = number>(_v: P0): R;
    hasSelection<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSBitmapEditInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, BCPopoverDelegateProtocol, MSColorInspectorDelegateProtocol, MSInspectorChildControllerProtocol {
      alloc<R = MSBitmapEditInspectorViewController>(): R;
      new: <R = MSBitmapEditInspectorViewController>() => R;
    }
  }
}

declare const MSBitmapEditInspectorViewController: cocoa.MSBitmapEditInspectorViewController.CLASS;
