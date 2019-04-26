/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardPopoverSegueTemplate<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    popoverBehavior<R = number>(): R;
    setPopoverBehavior<R = void, P0 = number>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    anchorView<R = NSView>(): R;
    setAnchorView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSStoryboardPopoverSegueTemplate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardPopoverSegueTemplate>(): R;
      new: <R = NSStoryboardPopoverSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardPopoverSegueTemplate: cocoa.NSStoryboardPopoverSegueTemplate.CLASS;
