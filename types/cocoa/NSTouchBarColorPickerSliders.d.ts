/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerSliders<T0 = void, T1 = void, T2 = void> extends NSControl, NSTouchBarColorPickerSliderMinimizationDelegateProtocol, NSTouchBarColorPickerViewProtocol {
    _sliderDidEndTracking<R = void>(): R;
    _sliderWillBeginTracking<R = void>(): R;
    _selectComponentValueFrom<R = void, P0 = unknown>(__selectComponentValueFrom: P0): R;
    _componentForSlider<R = number, P0 = unknown>(__componentForSlider: P0): R;
    sliderForComponent<R = unknown, P0 = number>(_sliderForComponent: P0): R;
    colorWithValue_forComponent_baseColor<R = unknown, P0 = number, P1 = number, P2 = unknown>(_colorWithValue: P0, _forComponent: P1, _baseColor: P2): R;
    _autounbinder<R = unknown>(): R;
    _unminimizedComponents<R = number>(): R;
    set_unminimizedComponents<R = void, P0 = number>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    allowedColorSpaces<R = NSArray>(): R;
    setAllowedColorSpaces<R = void, P0 = NSArray>(_v: P0): R;
    colorSpaceColor<R = NSColor>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSTouchBarColorPickerSliders {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl, NSTouchBarColorPickerSliderMinimizationDelegateProtocol, NSTouchBarColorPickerViewProtocol {
      alloc<R = NSTouchBarColorPickerSliders>(): R;
      new: <R = NSTouchBarColorPickerSliders>() => R;
      thumbnailWithSize_inView<R = unknown, P0 = CGSize, P1 = unknown>(_thumbnailWithSize: P0, _inView: P1): R;
      colorSpaceNormalizedColor_withinAllowedColorSpaces<R = unknown, P0 = unknown, P1 = unknown>(_colorSpaceNormalizedColor: P0, _withinAllowedColorSpaces: P1): R;
      _fallbackColorSpaceWithAllowedColorSpaces<R = unknown, P0 = unknown>(__fallbackColorSpaceWithAllowedColorSpaces: P0): R;
      colorComponentsMask_byRemovingComponent<R = number, P0 = number, P1 = number>(_colorComponentsMask: P0, _byRemovingComponent: P1): R;
      colorComponentsMask_byAddingComponent<R = number, P0 = number, P1 = number>(_colorComponentsMask: P0, _byAddingComponent: P1): R;
      orderedColorComponentsEnumerator<R = void, P0 = CDUnknownBlockType>(_orderedColorComponentsEnumerator: P0): R;
      enumerateColorComponentsInMask_enumerator<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateColorComponentsInMask: P0, _enumerator: P1): R;
      numberOfColorComponents<R = number>(): R;
      defaultColorSpace<R = unknown>(): R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      accessibilityIdentifierForComponent<R = unknown, P0 = number>(_accessibilityIdentifierForComponent: P0): R;
      artworkProviderKeyForComponent<R = unknown, P0 = number>(_artworkProviderKeyForComponent: P0): R;
      colorValueKeyForComponent<R = unknown, P0 = number>(_colorValueKeyForComponent: P0): R;
      keyPathsForValuesAffectingColorSpaceColor<R = unknown>(): R;
    }
  }
}

declare const NSTouchBarColorPickerSliders: cocoa.NSTouchBarColorPickerSliders.CLASS;
