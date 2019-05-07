/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarPopoverContentViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    animateFrameWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_animateFrameWithCompletionHandler: P0): R;
    newActionButtonWithTitle_action<R = unknown, P0 = unknown, P1 = string>(_newActionButtonWithTitle: P0, _action: P1): R;
    newLabel<R = unknown>(): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
    stackView<R = NSStackView>(): R;
    setStackView<R = void, P0 = NSStackView>(_v: P0): R;
    action<R = MSPopoverAction>(): R;
    footerLabel<R = NSTextField>(): R;
    actionView<R = NSView>(): R;
    descriptionLabel<R = NSTextField>(): R;
    titleLabel<R = NSTextField>(): R;
    imageView<R = NSImageView>(): R;
    edgeInsets<R = NSEdgeInsets>(): R;
  }
  namespace MSToolbarPopoverContentViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSToolbarPopoverContentViewController>(): R;
      new: <R = MSToolbarPopoverContentViewController>() => R;
    }
  }
}

declare const MSToolbarPopoverContentViewController: cocoa.MSToolbarPopoverContentViewController.CLASS;
