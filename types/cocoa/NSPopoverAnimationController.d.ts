/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverAnimationController<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol {}
  namespace NSPopoverAnimationController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSImmediateActionAnimationControllerProtocol {
      alloc<R = NSPopoverAnimationController>(): R;
      new: <R = NSPopoverAnimationController>() => R;
      popoverAnimationControllerWithPopover<R = unknown, P0 = unknown>(_popoverAnimationControllerWithPopover: P0): R;
    }
  }
}

declare const NSPopoverAnimationController: cocoa.NSPopoverAnimationController.CLASS;
