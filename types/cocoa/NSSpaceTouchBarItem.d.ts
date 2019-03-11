/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpaceTouchBarItem<T = any> extends cocoa.NSTouchBarItem, cocoa.NSTouchBarItemTypeSpaceProtocol {
    customizationLabel<R = unknown>(): R;
    initWithIdentifier_minimumWidth_maximumWidth<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithIdentifier: P0, _minimumWidth: P1, _maximumWidth: P2): R;
    preferredSizeForCustomizationPalette<R = cocoa.CGSize>(): R;
    maximumWidth<R = number>(): R;
    minimumWidth<R = number>(): R;
    appearsInCustomization<R = boolean>(): R;
    setAppearsInCustomization<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSpaceTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem, cocoa.classes.NSTouchBarItemTypeSpaceProtocol {
      alloc<R = NSSpaceTouchBarItem>(): R;
      new: <R = NSSpaceTouchBarItem>() => R;
      standardLargeSpace<R = number>(): R;
      standardSmallSpace<R = number>(): R;
      flexibleSpace<R = unknown>(): R;
      largeFixedSpace<R = unknown>(): R;
      smallFixedSpace<R = unknown>(): R;
    }
  }
}

declare const NSSpaceTouchBarItem: cocoa.classes.NSSpaceTouchBarItem;
