/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBox<T0 = void, T1 = void, T2 = void> extends NSView {
    _lineColor<R = unknown>(): R;
    _setLineColor<R = void, P0 = unknown>(__setLineColor: P0): R;
    setTitleWithMnemonic<R = void, P0 = unknown>(_setTitleWithMnemonic: P0): R;
    _removeTitleTextField<R = void>(): R;
    _updateTitleTextField<R = void>(): R;
    _titleTextFieldFrame<R = CGRect>(): R;
    _needsTitleTextField<R = boolean>(): R;
    _needsBackgroundView<R = boolean>(): R;
    _removeBackgroundView<R = void>(): R;
    _updateCustomBackgroundView<R = void>(): R;
    _updateSeparatorBackgroundView<R = void>(): R;
    _updateOldStyleBackgroundView<R = void>(): R;
    _updateThemeBoxBackgroundView<R = void>(): R;
    _updateBackgroundView<R = void>(): R;
    _backgroundViewFrame<R = CGRect>(): R;
    _invalidateSubviewsForStateChange<R = void>(): R;
    fontSmoothingBackgroundColor<R = unknown>(): R;
    _wantsBoxSubviews<R = boolean>(): R;
    _updateSubviews<R = void>(): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    _separatorBoxIsHorizontal<R = boolean>(): R;
    _tile<R = void, P0 = boolean>(__tile: P0): R;
    setFrameFromContentFrame<R = void, P0 = CGRect>(_setFrameFromContentFrame: P0): R;
    sizeToFit<R = void>(): R;
    _isOldStyleBordered<R = boolean>(): R;
    _justDrawsAGrooveOnOneSide<R = boolean>(): R;
    _directlyAddSubview_positioned_relativeTo<R = void, P0 = unknown, P1 = number, P2 = unknown>(__directlyAddSubview: P0, _positioned: P1, _relativeTo: P2): R;
    borderType<R = number>(): R;
    setBorderType<R = void, P0 = number>(_setBorderType: P0): R;
    _setupAuxiliaryStorage<R = void>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilityIsTitleUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTitleUIElementAttribute<R = unknown>(): R;
    accessibilityIsContentsAttributeSettable<R = boolean>(): R;
    accessibilityContentsAttribute<R = unknown>(): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
    cornerRadius<R = number>(): R;
    setCornerRadius<R = void, P0 = number>(_v: P0): R;
    _effectiveBorderWidth<R = number>(): R;
    borderWidth<R = number>(): R;
    setBorderWidth<R = void, P0 = number>(_v: P0): R;
    _titleTextField<R = NSTextField>(): R;
    set_titleTextField<R = void, P0 = NSTextField>(_v: P0): R;
    _backgroundView<R = NSView>(): R;
    set_backgroundView<R = void, P0 = NSView>(_v: P0): R;
    contentView<R = NSView>(): R;
    setContentView<R = void, P0 = NSView>(_v: P0): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
    contentViewMargins<R = CGSize>(): R;
    setContentViewMargins<R = void, P0 = CGSize>(_v: P0): R;
    titleCell<R = unknown>(): R;
    titleRect<R = CGRect>(): R;
    borderRect<R = CGRect>(): R;
    titleFont<R = NSFont>(): R;
    setTitleFont<R = void, P0 = NSFont>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    _effectiveTitlePosition<R = number>(): R;
    titlePosition<R = number>(): R;
    setTitlePosition<R = void, P0 = number>(_v: P0): R;
    boxType<R = number>(): R;
    setBoxType<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSBox>(): R;
      new: <R = NSBox>() => R;
    }
  }
}

declare const NSBox: cocoa.NSBox.CLASS;
