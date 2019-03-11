/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCell<T = any> extends cocoa.NSActionCell {
    _drawCustomTrackWithTrackRect_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawCustomTrackWithTrackRect: P0, _inView: P1): R;
    _usesCustomTrackImage<R = boolean>(): R;
    titleCell<R = unknown>(): R;
    setTitleCell<R = void, P0 = unknown>(_setTitleCell: P0): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    titleFont<R = unknown>(): R;
    setTitleFont<R = void, P0 = unknown>(_setTitleFont: P0): R;
    titleColor<R = unknown>(): R;
    setTitleColor<R = void, P0 = unknown>(_setTitleColor: P0): R;
    image<R = unknown>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    _setKnobThickness_usingInsetRect<R = boolean, P0 = number, P1 = boolean>(__setKnobThickness: P0, _usingInsetRect: P1): R;
    setKnobThickness<R = void, P0 = number>(_setKnobThickness: P0): R;
    _currentCUITickMarkOptions<R = unknown, P0 = boolean>(__currentCUITickMarkOptions: P0): R;
    _currentCUICircularSliderKnobOptions<R = unknown, P0 = boolean>(__currentCUICircularSliderKnobOptions: P0): R;
    _currentCUICircularSliderDialOptions<R = unknown, P0 = boolean>(__currentCUICircularSliderDialOptions: P0): R;
    _currentCUISliderKnobOptions<R = unknown, P0 = boolean>(__currentCUISliderKnobOptions: P0): R;
    _currentCUISliderBarOptions<R = unknown, P0 = boolean>(__currentCUISliderBarOptions: P0): R;
    _currentDrawingState<R = unknown>(): R;
    invalidateRect_forControlView<R = void, P0 = cocoa.CGRect, P1 = unknown>(_invalidateRect: P0, _forControlView: P1): R;
    _noteTracking_at_inView_startEvent_endEvent<R = boolean, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint, P2 = unknown, P3 = boolean, P4 = boolean>(__noteTracking: P0, _at: P1, _inView: P2, _startEvent: P3, _endEvent: P4): R;
    _repeatTimerFired<R = void, P0 = unknown>(__repeatTimerFired: P0): R;
    _hasSnappingBehavior<R = boolean>(): R;
    _drawLiveResizeHighlightWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawLiveResizeHighlightWithFrame: P0, _inView: P1): R;
    _drawValueImage_inRect<R = void, P0 = unknown, P1 = cocoa.CGRect>(__drawValueImage: P0, _inRect: P1): R;
    _drawMaxValueImage<R = void>(): R;
    _drawMinValueImage<R = void>(): R;
    _drawTickMarks<R = void>(): R;
    drawTickMarks<R = void>(): R;
    drawKnob<R = void, P0 = cocoa.CGRect>(_drawKnob: P0): R;
    drawBarInside_flipped<R = void, P0 = cocoa.CGRect, P1 = boolean>(_drawBarInside: P0, _flipped: P1): R;
    _barIsTintedWithValue<R = boolean>(): R;
    _rectOfMaxValueImageFlipped<R = cocoa.CGRect, P0 = boolean>(__rectOfMaxValueImageFlipped: P0): R;
    _rectOfMinValueImageFlipped<R = cocoa.CGRect, P0 = boolean>(__rectOfMinValueImageFlipped: P0): R;
    rectOfTickMarkAtIndex<R = cocoa.CGRect, P0 = number>(_rectOfTickMarkAtIndex: P0): R;
    knobRectFlipped<R = cocoa.CGRect, P0 = boolean>(_knobRectFlipped: P0): R;
    knobValueRangeRect<R = cocoa.CGRect, P0 = boolean>(_knobValueRangeRect: P0): R;
    barRectFlipped<R = cocoa.CGRect, P0 = boolean>(_barRectFlipped: P0): R;
    _alignmentRectInsetsInView<R = cocoa.NSEdgeInsets, P0 = unknown>(__alignmentRectInsetsInView: P0): R;
    _calcTrackRect_andAdjustRect<R = boolean, P0 = cocoa.CGRect, P1 = boolean>(__calcTrackRect: P0, _andAdjustRect: P1): R;
    _trackRectForCellFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(__trackRectForCellFrame: P0): R;
    _resetTrackRectWithCellFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(__resetTrackRectWithCellFrame: P0): R;
    _metricsStrategy<R = unknown>(): R;
    setTrackFillColor<R = void, P0 = unknown>(_setTrackFillColor: P0): R;
    trackFillColor<R = unknown>(): R;
    _drawsBackground<R = boolean>(): R;
    _setCollapsesOnResize<R = void, P0 = boolean>(__setCollapsesOnResize: P0): R;
    _collapsesOnResize<R = boolean>(): R;
    closestTickMarkIndexToValue<R = number, P0 = number>(_closestTickMarkIndexToValue: P0): R;
    closestTickMarkValueToValue<R = number, P0 = number>(_closestTickMarkValueToValue: P0): R;
    indexOfTickMarkAtPoint<R = number, P0 = cocoa.CGPoint>(_indexOfTickMarkAtPoint: P0): R;
    tickMarkValueAtIndex<R = number, P0 = number>(_tickMarkValueAtIndex: P0): R;
    setTickMarkIsProminent_atIndex<R = void, P0 = boolean, P1 = number>(_setTickMarkIsProminent: P0, _atIndex: P1): R;
    tickMarkIsProminentAtIndex<R = boolean, P0 = number>(_tickMarkIsProminentAtIndex: P0): R;
    allowsTickMarkValuesOnly<R = boolean>(): R;
    setAllowsTickMarkValuesOnly<R = void, P0 = boolean>(_setAllowsTickMarkValuesOnly: P0): R;
    tickMarkPosition<R = number>(): R;
    setTickMarkPosition<R = void, P0 = number>(_setTickMarkPosition: P0): R;
    numberOfTickMarks<R = number>(): R;
    setNumberOfTickMarks<R = void, P0 = number>(_setNumberOfTickMarks: P0): R;
    setDefaultValue<R = void, P0 = number>(_setDefaultValue: P0): R;
    defaultValue<R = number>(): R;
    maximumValueAccessory<R = unknown>(): R;
    setMaximumValueAccessory<R = void, P0 = unknown>(_setMaximumValueAccessory: P0): R;
    minimumValueAccessory<R = unknown>(): R;
    setMinimumValueAccessory<R = void, P0 = unknown>(_setMinimumValueAccessory: P0): R;
    maxValueImage<R = unknown>(): R;
    setMaxValueImage<R = void, P0 = unknown>(_setMaxValueImage: P0): R;
    minValueImage<R = unknown>(): R;
    setMinValueImage<R = void, P0 = unknown>(_setMinValueImage: P0): R;
    setContinuous<R = void, P0 = boolean>(_setContinuous: P0): R;
    isContinuous<R = boolean>(): R;
    _isVertical<R = boolean>(): R;
    setControlSize<R = void, P0 = number>(_setControlSize: P0): R;
    setDoubleValue<R = void, P0 = number>(_setDoubleValue: P0): R;
    doubleValue<R = number>(): R;
    setFloatValue<R = void, P0 = number>(_setFloatValue: P0): R;
    floatValue<R = number>(): R;
    setIntegerValue<R = void, P0 = number>(_setIntegerValue: P0): R;
    integerValue<R = number>(): R;
    setIntValue<R = void, P0 = number>(_setIntValue: P0): R;
    intValue<R = number>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    objectValue<R = unknown>(): R;
    setStringValue<R = void, P0 = unknown>(_setStringValue: P0): R;
    stringValue<R = unknown>(): R;
    _effectiveTickMarkPosition<R = number>(): R;
    _tickMarksAreOnLeftOrTopEdge<R = boolean>(): R;
    _effectiveControlState<R = number>(): R;
    _normalizedDoubleValue<R = number>(): R;
    _moveInDirection<R = void, P0 = number>(__moveInDirection: P0): R;
    _effectiveUserInterfaceLayoutDirection<R = number>(): R;
    _isR2L<R = boolean>(): R;
    _applicableShowsFocus<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilitySetFocus_forChild<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetFocus: P0, _forChild: P1): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    _accessibilityIndicatorRect<R = cocoa.CGRect>(): R;
    accessibilityIsActivationPointAttributeSettable<R = boolean>(): R;
    accessibilityActivationPointAttribute<R = unknown>(): R;
    accessibilityIsOrientationAttributeSettable<R = boolean>(): R;
    accessibilityOrientationAttribute<R = unknown>(): R;
    accessibilityIsAllowedValuesAttributeSettable<R = boolean>(): R;
    accessibilityAllowedValuesAttribute<R = unknown>(): R;
    accessibilityIsMaxValueAttributeSettable<R = boolean>(): R;
    accessibilityMaxValueAttribute<R = unknown>(): R;
    accessibilityIsMinValueAttributeSettable<R = boolean>(): R;
    accessibilityMinValueAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityIsValueIndicatorAttributeSettable<R = boolean>(): R;
    accessibilityValueIndicatorAttribute<R = unknown>(): R;
    trackRect<R = cocoa.CGRect>(): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
    vertical<R = boolean>(): R;
    setVertical<R = void, P0 = boolean>(_v: P0): R;
    altIncrementValue<R = number>(): R;
    setAltIncrementValue<R = void, P0 = number>(_v: P0): R;
    sliderType<R = number>(): R;
    setSliderType<R = void, P0 = number>(_v: P0): R;
    knobThickness<R = number>(): R;
    _orthogonalTickMarkInset<R = number>(): R;
    _primaryTickMarkInset<R = number>(): R;
  }
  namespace classes {
    export interface NSSliderCell<T = any> extends cocoa.classes.NSActionCell {
      alloc<R = NSSliderCell>(): R;
      new: <R = NSSliderCell>() => R;
    }
  }
}

declare const NSSliderCell: cocoa.classes.NSSliderCell;
