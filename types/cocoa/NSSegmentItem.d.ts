/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
    description<R = unknown>(): R;
    _setToolTipTag<R = void, P0 = number>(__setToolTipTag: P0): R;
    _toolTipTag<R = number>(): R;
    disabled<R = boolean>(): R;
    setDisabled<R = void, P0 = boolean>(_setDisabled: P0): R;
    view_stringForToolTip_point_userData<R = unknown, P0 = unknown, P1 = number, P2 = CGPoint, P3 = void>(_view: P0, _stringForToolTip: P1, _point: P2, _userData: P3): R;
    _recalcRectsForCell<R = void, P0 = unknown>(__recalcRectsForCell: P0): R;
    _setNeedsRecalc<R = void>(): R;
    _setOwningCell<R = void, P0 = unknown>(__setOwningCell: P0): R;
    _badgeEmblemForValue<R = unknown, P0 = number>(__badgeEmblemForValue: P0): R;
    _auxiliaryStorage<R = unknown>(): R;
    dealloc<R = void>(): R;
    toolTipTag<R = number>(): R;
    setToolTipTag<R = void, P0 = number>(_v: P0): R;
    menuIndRect<R = CGRect>(): R;
    labelRect<R = CGRect>(): R;
    fullWidth<R = number>(): R;
    toolTip<R = NSString>(): R;
    setToolTip<R = void, P0 = NSString>(_v: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    alignment<R = number>(): R;
    setAlignment<R = void, P0 = number>(_v: P0): R;
    shrinkage<R = number>(): R;
    setShrinkage<R = void, P0 = number>(_v: P0): R;
    displayWidth<R = number>(): R;
    needsRecalc<R = boolean>(): R;
    badgeEmblem<R = NSImage>(): R;
    badgeValue<R = number>(): R;
    setBadgeValue<R = void, P0 = number>(_v: P0): R;
    badgeView<R = NSImageView>(): R;
    setBadgeView<R = void, P0 = NSImageView>(_v: P0): R;
    menu<R = NSMenu>(): R;
    setMenu<R = void, P0 = NSMenu>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    springLoadingHighlight<R = number>(): R;
    setSpringLoadingHighlight<R = void, P0 = number>(_v: P0): R;
    showsBadge<R = boolean>(): R;
    setShowsBadge<R = void, P0 = boolean>(_v: P0): R;
    imageScaling<R = number>(): R;
    setImageScaling<R = void, P0 = number>(_v: P0): R;
    inactiveStateDisablesRollovers<R = boolean>(): R;
    setInactiveStateDisablesRollovers<R = void, P0 = boolean>(_v: P0): R;
    mouseInside<R = boolean>(): R;
    setMouseInside<R = void, P0 = boolean>(_v: P0): R;
    showMenuIndicator<R = boolean>(): R;
    setShowMenuIndicator<R = void, P0 = boolean>(_v: P0): R;
    disabled<R = boolean>(): R;
    setDisabled<R = void, P0 = boolean>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    setAlternateImage<R = void, P0 = NSImage>(_v: P0): R;
    imageRect<R = CGRect>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
    segmentItemView<R = NSSegmentItemView>(): R;
    setSegmentItemView<R = void, P0 = NSSegmentItemView>(_v: P0): R;
    index<R = number>(): R;
    setIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSegmentItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSSegmentItem>(): R;
      new: <R = NSSegmentItem>() => R;
    }
  }
}

declare const NSSegmentItem: cocoa.NSSegmentItem.CLASS;
