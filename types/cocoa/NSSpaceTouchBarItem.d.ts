/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpaceTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypeSpaceProtocol {
    customizationLabel<R = unknown>(): R;
    initWithIdentifier_minimumWidth_maximumWidth<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithIdentifier: P0, _minimumWidth: P1, _maximumWidth: P2): R;
    preferredSizeForCustomizationPalette<R = CGSize>(): R;
    maximumWidth<R = number>(): R;
    minimumWidth<R = number>(): R;
    appearsInCustomization<R = boolean>(): R;
    setAppearsInCustomization<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSSpaceTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemTypeSpaceProtocol {
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

declare const NSSpaceTouchBarItem: cocoa.NSSpaceTouchBarItem.CLASS;
