/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPopoverController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSColorPickerMatrixViewDelegateProtocol {
    _showColorPanel<R = void, P0 = unknown>(__showColorPanel: P0): R;
    _loadViewIfNecessary<R = void>(): R;
    popover<R = NSPopover>(): R;
    setPopover<R = void, P0 = NSPopover>(_v: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_v: P0): R;
    colorPanelButton<R = NSButton>(): R;
    setColorPanelButton<R = void, P0 = NSButton>(_v: P0): R;
    colorMatrixView<R = NSColorPickerMatrixView>(): R;
    setColorMatrixView<R = void, P0 = NSColorPickerMatrixView>(_v: P0): R;
    topBarMatrixView<R = NSColorPickerMatrixView>(): R;
    setTopBarMatrixView<R = void, P0 = NSColorPickerMatrixView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSColorPopoverController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSColorPickerMatrixViewDelegateProtocol {
      alloc<R = NSColorPopoverController>(): R;
      new: <R = NSColorPopoverController>() => R;
      defaultTopBarColorList<R = unknown>(): R;
    }
  }
}

declare const NSColorPopoverController: cocoa.NSColorPopoverController.CLASS;
