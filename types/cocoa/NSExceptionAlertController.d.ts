/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExceptionAlertController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    windowWillClose<R = void, P0 = unknown>(_windowWillClose: P0): R;
    windowWillResize_toSize<R = CGSize, P0 = unknown, P1 = CGSize>(_windowWillResize: P0, _toSize: P1): R;
    btnShowDetailsClicked<R = void, P0 = unknown>(_btnShowDetailsClicked: P0): R;
    btnClicked<R = void, P0 = unknown>(_btnClicked: P0): R;
    runModal<R = number>(): R;
    windowDidLoad<R = void>(): R;
    heightCollapseConstraint<R = NSLayoutConstraint>(): R;
    setHeightCollapseConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    showDetailsButton<R = NSButton>(): R;
    setShowDetailsButton<R = void, P0 = NSButton>(_v: P0): R;
    expandedView<R = NSView>(): R;
    setExpandedView<R = void, P0 = NSView>(_v: P0): R;
    showingDetails<R = boolean>(): R;
    setShowingDetails<R = void, P0 = boolean>(_v: P0): R;
    exceptionMessage<R = NSString>(): R;
    setExceptionMessage<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSExceptionAlertController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = NSExceptionAlertController>(): R;
      new: <R = NSExceptionAlertController>() => R;
    }
  }
}

declare const NSExceptionAlertController: cocoa.NSExceptionAlertController.CLASS;
