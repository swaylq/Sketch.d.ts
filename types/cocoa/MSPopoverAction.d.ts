/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopoverAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, BCPopoverDelegateProtocol {
    windowDidResignMain<R = void, P0 = unknown>(_windowDidResignMain: P0): R;
    viewForAttachingPopover<R = unknown, P0 = unknown>(_viewForAttachingPopover: P0): R;
    closePopover<R = void>(): R;
    showPopoverToForSender_viewController<R = void, P0 = unknown, P1 = unknown>(_showPopoverToForSender: P0, _viewController: P1): R;
    showPopover<R = void, P0 = unknown>(_showPopover: P0): R;
    popover<R = BCPopover>(): R;
    setPopover<R = void, P0 = BCPopover>(_v: P0): R;
    popoverViewController<R = NSViewController>(): R;
    popoverVisible<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPopoverAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction, BCPopoverDelegateProtocol {
      alloc<R = MSPopoverAction>(): R;
      new: <R = MSPopoverAction>() => R;
      popoverClass<R = unknown>(): R;
    }
  }
}

declare const MSPopoverAction: cocoa.MSPopoverAction.CLASS;
