/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSlider<T0 = void, T1 = void, T2 = void> extends NSControl, NSSliderAccessoryContainerProtocol, NSSliderCellControlViewProtocol, NSSliderTickMarksDelegateProtocol, NSAccessibilitySliderProtocol {
    _preferredAppearance<R = unknown>(): R;
    _layoutComponentSubviewsIfNecessary<R = void>(): R;
    _clearComponentSubviewsAndRemoveFromSuperview<R = void, P0 = boolean>(__clearComponentSubviewsAndRemoveFromSuperview: P0): R;
    _clearComponentSubviews<R = void>(): R;
    _createComponentSubviews<R = void>(): R;
    _updateComponentSubviewRenderingState<R = void>(): R;
    _circularKnobView<R = unknown>(): R;
    _setCircularKnobView<R = void, P0 = unknown>(__setCircularKnobView: P0): R;
    _dialView<R = unknown>(): R;
    _setDialView<R = void, P0 = unknown>(__setDialView: P0): R;
    _knobView<R = unknown>(): R;
    _setKnobView<R = void, P0 = unknown>(__setKnobView: P0): R;
    _tickMarksView<R = unknown>(): R;
    _setTickMarksView<R = void, P0 = unknown>(__setTickMarksView: P0): R;
    _trackView<R = unknown>(): R;
    _setTrackView<R = void, P0 = unknown>(__setTrackView: P0): R;
    _subviewRenderingMode<R = number>(): R;
    _setSubviewRenderingMode<R = void, P0 = number>(__setSubviewRenderingMode: P0): R;
    _updateTickMarkConstraintPositionsIfNeeded<R = void>(): R;
    _setTickMarkLayoutPoints<R = void, P0 = unknown>(__setTickMarkLayoutPoints: P0): R;
    _tickMarkLayoutPoints<R = unknown>(): R;
    _hasCustomTickMarkPositioning<R = boolean>(): R;
    setTickMarkIsProminent_atIndex<R = void, P0 = boolean, P1 = number>(_setTickMarkIsProminent: P0, _atIndex: P1): R;
    tickMarkIsProminentAtIndex<R = boolean, P0 = number>(_tickMarkIsProminentAtIndex: P0): R;
    closestTickMarkValueToValue<R = number, P0 = number>(_closestTickMarkValueToValue: P0): R;
    indexOfTickMarkAtPoint<R = number, P0 = CGPoint>(_indexOfTickMarkAtPoint: P0): R;
    tickMarkValueAtIndex<R = number, P0 = number>(_tickMarkValueAtIndex: P0): R;
    allowsTickMarkValuesOnly<R = boolean>(): R;
    setAllowsTickMarkValuesOnly<R = void, P0 = boolean>(_setAllowsTickMarkValuesOnly: P0): R;
    tickMarkPosition<R = number>(): R;
    setTickMarkPosition<R = void, P0 = number>(_setTickMarkPosition: P0): R;
    numberOfTickMarks<R = number>(): R;
    setNumberOfTickMarks<R = void, P0 = number>(_setNumberOfTickMarks: P0): R;
    pageDown<R = void, P0 = unknown>(_pageDown: P0): R;
    pageUp<R = void, P0 = unknown>(_pageUp: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    _moveInDirection<R = void, P0 = number>(__moveInDirection: P0): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    image<R = unknown>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    setKnobThickness<R = void, P0 = number>(_setKnobThickness: P0): R;
    setTitleNoCopy<R = unknown, P0 = unknown>(_setTitleNoCopy: P0): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    titleFont<R = unknown>(): R;
    setTitleFont<R = void, P0 = unknown>(_setTitleFont: P0): R;
    titleColor<R = unknown>(): R;
    setTitleColor<R = void, P0 = unknown>(_setTitleColor: P0): R;
    titleCell<R = unknown>(): R;
    setTitleCell<R = void, P0 = unknown>(_setTitleCell: P0): R;
    setMaxValueImage<R = void, P0 = unknown>(_setMaxValueImage: P0): R;
    maxValueImage<R = unknown>(): R;
    setMinValueImage<R = void, P0 = unknown>(_setMinValueImage: P0): R;
    minValueImage<R = unknown>(): R;
    setMaximumValueAccessory<R = void, P0 = unknown>(_setMaximumValueAccessory: P0): R;
    setMinimumValueAccessory<R = void, P0 = unknown>(_setMinimumValueAccessory: P0): R;
    isFlipped<R = boolean>(): R;
    _removeAnchorsInRange<R = void, P0 = _NSRange>(__removeAnchorsInRange: P0): R;
    layoutPointForTickMarkAtIndex<R = unknown, P0 = number>(_layoutPointForTickMarkAtIndex: P0): R;
    trackFillColor<R = NSColor>(): R;
    setTrackFillColor<R = void, P0 = NSColor>(_v: P0): R;
    vertical<R = boolean>(): R;
    setVertical<R = void, P0 = boolean>(_v: P0): R;
    knobThickness<R = number>(): R;
    altIncrementValue<R = number>(): R;
    setAltIncrementValue<R = void, P0 = number>(_v: P0): R;
    maximumValueAccessory<R = NSSliderAccessory>(): R;
    minimumValueAccessory<R = NSSliderAccessory>(): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
    sliderType<R = number>(): R;
    setSliderType<R = void, P0 = number>(_v: P0): R;
    _hasStepBehaviorContext<R = boolean>(): R;
    incrementValue<R = number>(): R;
    setIncrementValue<R = void, P0 = number>(_v: P0): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
    maximumValue<R = number>(): R;
    setMaximumValue<R = void, P0 = number>(_v: P0): R;
    minimumValue<R = number>(): R;
    setMinimumValue<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSSlider(NextKeyViewSupport): 
    canBeKeyView<R = boolean>(): R;
  }
  namespace NSSlider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSSliderAccessoryContainerProtocol, NSSliderCellControlViewProtocol, NSSliderTickMarksDelegateProtocol, NSAccessibilitySliderProtocol {
      alloc<R = NSSlider>(): R;
      new: <R = NSSlider>() => R;
      verticalSliderWithMinValue_maxValue_initialValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(_verticalSliderWithMinValue: P0, _maxValue: P1, _initialValue: P2, _target: P3, _action: P4): R;
      horizontalSliderWithMinValue_maxValue_initialValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(_horizontalSliderWithMinValue: P0, _maxValue: P1, _initialValue: P2, _target: P3, _action: P4): R;
      verticalSliderWithValue_minValue_maxValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(_verticalSliderWithValue: P0, _minValue: P1, _maxValue: P2, _target: P3, _action: P4): R;
      horizontalSliderWithValue_minValue_maxValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(_horizontalSliderWithValue: P0, _minValue: P1, _maxValue: P2, _target: P3, _action: P4): R;
      verticalSliderWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_verticalSliderWithTarget: P0, _action: P1): R;
      horizontalSliderWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_horizontalSliderWithTarget: P0, _action: P1): R;
      sliderWithValue_minValue_maxValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(_sliderWithValue: P0, _minValue: P1, _maxValue: P2, _target: P3, _action: P4): R;
      sliderWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_sliderWithTarget: P0, _action: P1): R;
      _sliderWithMinValue_maxValue_initialValue_target_action<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = string>(__sliderWithMinValue: P0, _maxValue: P1, _initialValue: P2, _target: P3, _action: P4): R;
      keyPathsForValuesAffecting_hasStepBehaviorContext<R = unknown>(): R;
  
  }
  }
}

declare const NSSlider: cocoa.NSSlider.CLASS;
