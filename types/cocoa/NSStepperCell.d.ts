/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStepperCell<T0 = void, T1 = void, T2 = void> extends NSActionCell {
    _updateMouseTracking<R = void>(): R;
    _coreUIDrawOptionsWithView<R = unknown, P0 = unknown>(__coreUIDrawOptionsWithView: P0): R;
    _stepperImageSizeForControlSize<R = CGSize, P0 = number>(__stepperImageSizeForControlSize: P0): R;
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
    _setAutorepeat<R = void, P0 = boolean>(__setAutorepeat: P0): R;
    _autorepeat<R = boolean>(): R;
    _setValueWraps<R = void, P0 = boolean>(__setValueWraps: P0): R;
    _valueWraps<R = boolean>(): R;
    _setIncrement<R = void, P0 = number>(__setIncrement: P0): R;
    _increment<R = number>(): R;
    _setMaxValue<R = void, P0 = number>(__setMaxValue: P0): R;
    _maxValue<R = number>(): R;
    _setMinValue<R = void, P0 = number>(__setMinValue: P0): R;
    _minValue<R = number>(): R;
    _stepInUpDirection<R = void, P0 = boolean>(__stepInUpDirection: P0): R;
    _doSingleStep_inView<R = void, P0 = boolean, P1 = unknown>(__doSingleStep: P0, _inView: P1): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    _accessibilityArrowScreenRect<R = CGRect, P0 = boolean>(__accessibilityArrowScreenRect: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsDecrementButtonAttributeSettable<R = boolean>(): R;
    accessibilityDecrementButtonAttribute<R = unknown>(): R;
    accessibilityIsIncrementButtonAttributeSettable<R = boolean>(): R;
    accessibilityIncrementButtonAttribute<R = unknown>(): R;
    autorepeat<R = boolean>(): R;
    setAutorepeat<R = void, P0 = boolean>(_v: P0): R;
    valueWraps<R = boolean>(): R;
    setValueWraps<R = void, P0 = boolean>(_v: P0): R;
    increment<R = number>(): R;
    setIncrement<R = void, P0 = number>(_v: P0): R;
    maxValue<R = number>(): R;
    setMaxValue<R = void, P0 = number>(_v: P0): R;
    minValue<R = number>(): R;
    setMinValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSStepperCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionCell {
      alloc<R = NSStepperCell>(): R;
      new: <R = NSStepperCell>() => R;
    }
  }
}

declare const NSStepperCell: cocoa.NSStepperCell.CLASS;
