/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverBinder<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
    _updatePopover_withContentWidth_contentHeight<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updatePopover: P0, _withContentWidth: P1, _contentHeight: P2): R;
    _updatePopover_withPositioningRect<R = void, P0 = unknown, P1 = unknown>(__updatePopover: P0, _withPositioningRect: P1): R;
  }
  namespace NSPopoverBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewStateBinder {
      alloc<R = NSPopoverBinder>(): R;
      new: <R = NSPopoverBinder>() => R;
    }
  }
}

declare const NSPopoverBinder: cocoa.NSPopoverBinder.CLASS;
