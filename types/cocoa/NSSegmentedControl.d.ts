/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentedControl<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceCompressionProtocol {
    touchBarHitTestInsets<R = NSEdgeInsets>(): R;
    _supportedOptionsFromPrioritizedOptions<R = unknown, P0 = unknown>(__supportedOptionsFromPrioritizedOptions: P0): R;
    setHidesUnselectedLabelsWhenNecessary<R = void, P0 = boolean>(_setHidesUnselectedLabelsWhenNecessary: P0): R;
    hidesUnselectedLabelsWhenNecessary<R = boolean>(): R;
    _badgeValueForSegment<R = number, P0 = number>(__badgeValueForSegment: P0): R;
    _setBadgeValue_forSegment<R = void, P0 = number, P1 = number>(__setBadgeValue: P0, _forSegment: P1): R;
    _showsBadgeForSegment<R = boolean, P0 = number>(__showsBadgeForSegment: P0): R;
    _setShowsBadge_forSegment<R = void, P0 = boolean, P1 = number>(__setShowsBadge: P0, _forSegment: P1): R;
    _inToolbar<R = boolean>(): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    _updateHeightToReflectNewWindowStyleIfNecessary<R = void>(): R;
    showsMenuIndicatorForSegment<R = boolean, P0 = number>(_showsMenuIndicatorForSegment: P0): R;
    setShowsMenuIndicator_forSegment<R = void, P0 = boolean, P1 = number>(_setShowsMenuIndicator: P0, _forSegment: P1): R;
    toolTipForSegment<R = unknown, P0 = number>(_toolTipForSegment: P0): R;
    tagForSegment<R = number, P0 = number>(_tagForSegment: P0): R;
    setTag_forSegment<R = void, P0 = number, P1 = number>(_setTag: P0, _forSegment: P1): R;
    setToolTip_forSegment<R = void, P0 = unknown, P1 = number>(_setToolTip: P0, _forSegment: P1): R;
    alignmentForSegment<R = number, P0 = number>(_alignmentForSegment: P0): R;
    setAlignment_forSegment<R = void, P0 = number, P1 = number>(_setAlignment: P0, _forSegment: P1): R;
    isEnabledForSegment<R = boolean, P0 = number>(_isEnabledForSegment: P0): R;
    setEnabled_forSegment<R = void, P0 = boolean, P1 = number>(_setEnabled: P0, _forSegment: P1): R;
    isSelectedForSegment<R = boolean, P0 = number>(_isSelectedForSegment: P0): R;
    setSelected_forSegment<R = void, P0 = boolean, P1 = number>(_setSelected: P0, _forSegment: P1): R;
    menuForSegment<R = unknown, P0 = number>(_menuForSegment: P0): R;
    setMenu_forSegment<R = void, P0 = unknown, P1 = number>(_setMenu: P0, _forSegment: P1): R;
    labelForSegment<R = unknown, P0 = number>(_labelForSegment: P0): R;
    setLabel_forSegment<R = void, P0 = unknown, P1 = number>(_setLabel: P0, _forSegment: P1): R;
    setImageScaling_forSegment<R = void, P0 = number, P1 = number>(_setImageScaling: P0, _forSegment: P1): R;
    imageScalingForSegment<R = number, P0 = number>(_imageScalingForSegment: P0): R;
    alternateImageForSegment<R = unknown, P0 = number>(_alternateImageForSegment: P0): R;
    setAlternateImage_forSegment<R = void, P0 = unknown, P1 = number>(_setAlternateImage: P0, _forSegment: P1): R;
    imageForSegment<R = unknown, P0 = number>(_imageForSegment: P0): R;
    setImage_forSegment<R = void, P0 = unknown, P1 = number>(_setImage: P0, _forSegment: P1): R;
    widthForSegment<R = number, P0 = number>(_widthForSegment: P0): R;
    setWidth_forSegment<R = void, P0 = number, P1 = number>(_setWidth: P0, _forSegment: P1): R;
    selectSegmentWithTag<R = boolean, P0 = number>(_selectSegmentWithTag: P0): R;
    springLoadingExited<R = void, P0 = unknown>(_springLoadingExited: P0): R;
    springLoadingHighlightChanged<R = void, P0 = unknown>(_springLoadingHighlightChanged: P0): R;
    springLoadingActivated_draggingInfo<R = void, P0 = boolean, P1 = unknown>(_springLoadingActivated: P0, _draggingInfo: P1): R;
    springLoadingUpdated<R = number, P0 = unknown>(_springLoadingUpdated: P0): R;
    springLoadingEntered<R = number, P0 = unknown>(_springLoadingEntered: P0): R;
    _updateConstraint_forAnchor_atMinSize_priority<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(__updateConstraint: P0, _forAnchor: P1, _atMinSize: P2, _priority: P3): R;
    minimumIntrinsicContentSize<R = CGSize>(): R;
    _updateMenuUniquing<R = void>(): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    _makeSCAuxIfNeeded<R = unknown>(): R;
    isFlipped<R = boolean>(): R;
    _setSpringLoadsOnDrag<R = void, P0 = boolean>(__setSpringLoadsOnDrag: P0): R;
    _springLoadsOnDrag<R = boolean>(): R;
    activeCompressionOptions<R = NSUserInterfaceCompressionOptions>(): R;
    selectedSegmentBezelColor<R = NSColor>(): R;
    setSelectedSegmentBezelColor<R = void, P0 = NSColor>(_v: P0): R;
    doubleValueForSelectedSegment<R = number>(): R;
    trackingMode<R = number>(): R;
    setTrackingMode<R = void, P0 = number>(_v: P0): R;
    springLoaded<R = boolean>(): R;
    setSpringLoaded<R = void, P0 = boolean>(_v: P0): R;
    segmentStyle<R = number>(): R;
    setSegmentStyle<R = void, P0 = number>(_v: P0): R;
    segmentDistribution<R = number>(): R;
    setSegmentDistribution<R = void, P0 = number>(_v: P0): R;
    indexOfSelectedItem<R = number>(): R;
    selectedSegment<R = number>(): R;
    setSelectedSegment<R = void, P0 = number>(_v: P0): R;
    segmentCount<R = number>(): R;
    setSegmentCount<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSegmentedControl {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSUserInterfaceCompressionProtocol {
      alloc<R = NSSegmentedControl>(): R;
      new: <R = NSSegmentedControl>() => R;
      segmentedControlWithSegmentImages_trackingMode_target_action<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string>(_segmentedControlWithSegmentImages: P0, _trackingMode: P1, _target: P2, _action: P3): R;
      segmentedControlWithSegmentLabels_trackingMode_target_action<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string>(_segmentedControlWithSegmentLabels: P0, _trackingMode: P1, _target: P2, _action: P3): R;
      segmentedControlWithImages_trackingMode_target_action<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string>(_segmentedControlWithImages: P0, _trackingMode: P1, _target: P2, _action: P3): R;
      segmentedControlWithLabels_trackingMode_target_action<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = string>(_segmentedControlWithLabels: P0, _trackingMode: P1, _target: P2, _action: P3): R;
      _segmentedControlWithTrackingMode_target_action<R = unknown, P0 = number, P1 = unknown, P2 = string>(__segmentedControlWithTrackingMode: P0, _target: P1, _action: P2): R;
    }
  }
}

declare const NSSegmentedControl: cocoa.NSSegmentedControl.CLASS;
