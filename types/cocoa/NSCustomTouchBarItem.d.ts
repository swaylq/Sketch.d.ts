/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem {
    setPreferredZOrder<R = void, P0 = number>(_setPreferredZOrder: P0): R;
    preferredPopoverTransposerClass<R = unknown>(): R;
    setPreferredPopoverTransposerClass<R = void, P0 = unknown>(_v: P0): R;
    preferredPopoverTransposerPriority<R = number>(): R;
    setPreferredPopoverTransposerPriority<R = void, P0 = number>(_v: P0): R;
    customizationLabel<R = NSString>(): R;
    setCustomizationLabel<R = void, P0 = NSString>(_v: P0): R;
    viewController<R = NSViewController>(): R;
    setViewController<R = void, P0 = NSViewController>(_v: P0): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    preferredSizeForCustomizationPalette<R = CGSize>(): R;
    setPreferredSizeForCustomizationPalette<R = void, P0 = CGSize>(_v: P0): R;
    viewForCustomizationPreview<R = NSView>(): R;
    setViewForCustomizationPreview<R = void, P0 = NSView>(_v: P0): R;
    viewForCustomizationPalette<R = NSView>(): R;
    setViewForCustomizationPalette<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace NSCustomTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem {
      alloc<R = NSCustomTouchBarItem>(): R;
      new: <R = NSCustomTouchBarItem>() => R;
      automaticallyNotifiesObserversOfViewController<R = boolean>(): R;
      automaticallyNotifiesObserversOfView<R = boolean>(): R;
    }
  }
}

declare const NSCustomTouchBarItem: cocoa.NSCustomTouchBarItem.CLASS;
