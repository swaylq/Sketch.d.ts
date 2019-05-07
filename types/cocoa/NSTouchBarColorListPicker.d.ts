/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorListPicker<T0 = void, T1 = void, T2 = void> extends NSControl, NSScrubberDelegateProtocol, NSScrubberDataSourceProtocol, NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewProtocol {
    setContinuous<R = void, P0 = boolean>(_setContinuous: P0): R;
    isContinuous<R = boolean>(): R;
    longPress<R = void, P0 = unknown>(_longPress: P0): R;
    _didFinishInteractingWithScrubber_cancelled<R = void, P0 = unknown, P1 = boolean>(__didFinishInteractingWithScrubber: P0, _cancelled: P1): R;
    _setCurrentColorWithScrubberIndex<R = void, P0 = number>(__setCurrentColorWithScrubberIndex: P0): R;
    _effectiveSelectedColorIndex<R = number>(): R;
    _colorKeyForColorAtIndex<R = unknown, P0 = number>(__colorKeyForColorAtIndex: P0): R;
    _effectiveColorCount<R = number>(): R;
    _setCurrentColor_updateScrubber<R = void, P0 = unknown, P1 = boolean>(__setCurrentColor: P0, _updateScrubber: P1): R;
    _colorListDidChange<R = void, P0 = unknown>(__colorListDidChange: P0): R;
    _autounbinder<R = unknown>(): R;
    supportsPressAndHoldVariants<R = boolean>(): R;
    setSupportsPressAndHoldVariants<R = void, P0 = boolean>(_v: P0): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
    selectedColorKey<R = NSString>(): R;
    setSelectedColorKey<R = void, P0 = NSString>(_v: P0): R;
    colorList<R = NSColorList>(): R;
    setColorList<R = void, P0 = NSColorList>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTouchBarColorListPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSScrubberDelegateProtocol, NSScrubberDataSourceProtocol, NSTouchBarColorListPickerPressAndHoldPopUpDelegateProtocol, NSGestureRecognizerDelegateProtocol, NSTouchBarColorPickerViewProtocol {
      alloc<R = NSTouchBarColorListPicker>(): R;
      new: <R = NSTouchBarColorListPicker>() => R;
      thumbnailWithSize_inView<R = unknown, P0 = CGSize, P1 = unknown>(_thumbnailWithSize: P0, _inView: P1): R;
      keyPathsForValuesAffectingCurrentColor<R = unknown>(): R;
      automaticallyNotifiesObserversOfCurrentColor<R = boolean>(): R;
      keyPathsForValuesAffectingSelectedColorKey<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorListPicker: cocoa.NSTouchBarColorListPicker.CLASS;
