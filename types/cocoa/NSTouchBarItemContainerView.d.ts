/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemContainerView<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _deferringLayoutNotifications<R = void, P0 = CDUnknownBlockType>(__deferringLayoutNotifications: P0): R;
    _updateMeasuredSizes<R = void>(): R;
    _viewForItem<R = unknown>(): R;
    _noteTouchBarItemViewChanged<R = void>(): R;
    disabled<R = boolean>(): R;
    setDisabled<R = void, P0 = boolean>(_v: P0): R;
    isInCustomizationPalette<R = boolean>(): R;
    setIsInCustomizationPalette<R = void, P0 = boolean>(_v: P0): R;
    isSpace<R = boolean>(): R;
    preferredZOrder<R = number>(): R;
    itemPosition<R = number>(): R;
    groupItemContainingItem<R = NSGroupTouchBarItem>(): R;
    setGroupItemContainingItem<R = void, P0 = NSGroupTouchBarItem>(_v: P0): R;
    compressionItemContainingItem<R = NSGroupTouchBarItem>(): R;
    setCompressionItemContainingItem<R = void, P0 = NSGroupTouchBarItem>(_v: P0): R;
    priorityIndex<R = number>(): R;
    setPriorityIndex<R = void, P0 = number>(_v: P0): R;
    contentClippingSize<R = CGSize>(): R;
    preferredSize<R = CGSize>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    touchBarItem<R = NSTouchBarItem>(): R;
    setTouchBarItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
    description<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    preferredTrailingPosition<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTouchBarItemContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, _NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarItemContainerView>(): R;
      new: <R = NSTouchBarItemContainerView>() => R;
    }
  }
}

declare const NSTouchBarItemContainerView: cocoa.NSTouchBarItemContainerView.CLASS;
