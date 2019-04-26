/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarClippedItemsIndicatorViewer<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
    configureForLayoutInDisplayMode_andSizeMode_inToolbarView<R = void, P0 = number, P1 = number, P2 = unknown>(_configureForLayoutInDisplayMode: P0, _andSizeMode: P1, _inToolbarView: P2): R;
    itemPosition<R = number>(): R;
    isSpace<R = boolean>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    clippedItemsIndicator<R = NSToolbarClippedItemsIndicator>(): R;
    setClippedItemsIndicator<R = void, P0 = NSToolbarClippedItemsIndicator>(_v: P0): R;
    _needsModeConfiguration<R = boolean>(): R;
    set_needsModeConfiguration<R = void, P0 = boolean>(_v: P0): R;
    contentClippingSize<R = CGSize>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    preferredSize<R = CGSize>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    priorityIndex<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSToolbarClippedItemsIndicatorViewer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSToolbarClippedItemsIndicatorViewer>(): R;
      new: <R = NSToolbarClippedItemsIndicatorViewer>() => R;
    }
  }
}

declare const NSToolbarClippedItemsIndicatorViewer: cocoa.NSToolbarClippedItemsIndicatorViewer.CLASS;
