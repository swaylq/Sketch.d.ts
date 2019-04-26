/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverDelegateProtocol<T0 = void, T1 = void, T2 = void> {
    popoverDidClose<R = void, P0 = NSNotification>(_popoverDidClose: P0): R;
    popoverWillClose<R = void, P0 = NSNotification>(_popoverWillClose: P0): R;
    popoverDidShow<R = void, P0 = NSNotification>(_popoverDidShow: P0): R;
    popoverWillShow<R = void, P0 = NSNotification>(_popoverWillShow: P0): R;
    detachableWindowForPopover<R = NSWindow, P0 = NSPopover>(_detachableWindowForPopover: P0): R;
    popoverDidDetach<R = void, P0 = NSPopover>(_popoverDidDetach: P0): R;
    popoverShouldDetach<R = boolean, P0 = NSPopover>(_popoverShouldDetach: P0): R;
    popoverShouldClose<R = boolean, P0 = NSPopover>(_popoverShouldClose: P0): R;
  }
  namespace NSPopoverDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
