/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    description<R = unknown>(): R;
    preferredZOrder<R = number>(): R;
    _contentClippingSize<R = CGSize>(): R;
    _itemViewMinSize_maxSize<R = void, P0 = CGSize, P1 = CGSize>(__itemViewMinSize: P0, _maxSize: P1): R;
    _itemViewMinSize_maxSize_preferredSize<R = void, P0 = CGSize, P1 = CGSize, P2 = CGSize>(__itemViewMinSize: P0, _maxSize: P1, _preferredSize: P2): R;
    _itemViewMinSize_maxSize_preferredSize_stretchesContent<R = void, P0 = CGSize, P1 = CGSize, P2 = CGSize, P3 = boolean>(__itemViewMinSize: P0, _maxSize: P1, _preferredSize: P2, _stretchesContent: P3): R;
    _type<R = number>(): R;
    itemPosition<R = number>(): R;
    setPriority<R = void, P0 = number>(_setPriority: P0): R;
    priority<R = number>(): R;
    dealloc<R = void>(): R;
    initWithIdentifier<R = unknown, P0 = unknown>(_initWithIdentifier: P0): R;
    _playgroundQuickLookView<R = unknown>(): R;
    fallbackItemSizeForCustomization<R = CGSize>(): R;
    makeViewForCustomizationPreview<R = unknown>(): R;
    makeViewForCustomizationPalette<R = unknown>(): R;
    makeViewForCustomization<R = unknown>(): R;
    makePressAndHoldTransposerWithSourceFrame_destinationContentView_frame<R = unknown, P0 = CGRect, P1 = unknown, P2 = CGRect>(_makePressAndHoldTransposerWithSourceFrame: P0, _destinationContentView: P1, _frame: P2): R;
    visible<R = boolean>(): R;
    visibilityPriority<R = number>(): R;
    setVisibilityPriority<R = void, P0 = number>(_v: P0): R;
    viewController<R = NSViewController>(): R;
    view<R = NSView>(): R;
    customizationLabel<R = NSString>(): R;
    identifier<R = NSString>(): R;
    preferredSizeForCustomizationPalette<R = CGSize>(): R;
    preferredPopoverTransposerClass<R = unknown>(): R;
    preferredPopoverTransposerPriority<R = number>(): R;
  }
  namespace NSTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTouchBarItem>(): R;
      new: <R = NSTouchBarItem>() => R;
      keyPathsForValuesAffectingView<R = unknown>(): R;
      initialize<R = void>(): R;
      removeSystemTrayItem<R = void, P0 = unknown>(_removeSystemTrayItem: P0): R;
      addSystemTrayItem<R = void, P0 = unknown>(_addSystemTrayItem: P0): R;
      removeTouchIDItem<R = void, P0 = unknown>(_removeTouchIDItem: P0): R;
      addTouchIDItem<R = void, P0 = unknown>(_addTouchIDItem: P0): R;
    }
  }
}

declare const NSTouchBarItem: cocoa.NSTouchBarItem.CLASS;
