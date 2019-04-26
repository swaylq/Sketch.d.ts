/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorWell<T0 = void, T1 = void, T2 = void> extends NSControl {
    _old_initWithCoder_NSColorWell<R = unknown, P0 = unknown>(__old_initWithCoder_NSColorWell: P0): R;
    refusesFirstResponder<R = boolean>(): R;
    setRefusesFirstResponder<R = void, P0 = boolean>(_setRefusesFirstResponder: P0): R;
    acceptColor_atPoint<R = void, P0 = unknown, P1 = CGPoint>(_acceptColor: P0, _atPoint: P1): R;
    windowWillClose<R = void, P0 = unknown>(_windowWillClose: P0): R;
    shiftModifySelection<R = void, P0 = unknown>(_shiftModifySelection: P0): R;
    altModifySelection<R = void, P0 = unknown>(_altModifySelection: P0): R;
    _performActivationClickWithShiftDown<R = void, P0 = boolean>(__performActivationClickWithShiftDown: P0): R;
    activate<R = void, P0 = boolean>(_activate: P0): R;
    _ownsColorPanelExclusively<R = boolean>(): R;
    setContinuous<R = void, P0 = boolean>(_setContinuous: P0): R;
    isContinuous<R = boolean>(): R;
    takeColorFrom<R = void, P0 = unknown>(_takeColorFrom: P0): R;
    deactivate<R = void>(): R;
    _drawBorderInRect<R = void, P0 = CGRect>(__drawBorderInRect: P0): R;
    _coreUIBorderDrawOptions<R = __CFDictionary>(): R;
    drawWellInside<R = void, P0 = CGRect>(_drawWellInside: P0): R;
    drawColor<R = boolean>(): R;
    _hasKeyboardFocus<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    _colorWellCommonAwake<R = void>(): R;
    objectValue<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    _takeColorFromDoAction<R = unknown, P0 = unknown>(__takeColorFromDoAction: P0): R;
    _takeColorFromAndSendActionIfContinuous<R = unknown, P0 = unknown>(__takeColorFromAndSendActionIfContinuous: P0): R;
    _takeColorFrom_andSendAction<R = unknown, P0 = unknown, P1 = boolean>(__takeColorFrom: P0, _andSendAction: P1): R;
    _shouldOrderFront<R = boolean>(): R;
    accessibilityIsValueAttributeSettable<R = boolean>(): R;
    accessibilityValueAttribute<R = unknown>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    active<R = boolean>(): R;
    bordered<R = boolean>(): R;
    setBordered<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSColorWell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSColorWell>(): R;
      new: <R = NSColorWell>() => R;
      _delayedDeactiveWindowlessWell<R = void, P0 = unknown>(__delayedDeactiveWindowlessWell: P0): R;
      _deactivateAllColorWells<R = void>(): R;
      _exclusiveColorPanelOwner<R = unknown>(): R;
      colorPanelColorChanged<R = void, P0 = unknown>(_colorPanelColorChanged: P0): R;
      automaticallyNotifiesObserversOfObjectValue<R = boolean>(): R;
    }
  }
}

declare const NSColorWell: cocoa.NSColorWell.CLASS;
